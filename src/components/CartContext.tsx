"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  BEAN_PRODUCTS,
  calculateBeanPrice,
  type BeanProduct,
  type GrindOption,
  type WeightOption,
} from "@/data/beans";

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  image: string;
  weight: WeightOption["label"];
  grind: GrindOption;
  unitPrice: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (
    product: BeanProduct,
    weight: WeightOption["label"],
    grind: GrindOption,
    quantity?: number,
  ) => void;
  updateQuantity: (key: string, delta: number) => void;
  removeItem: (key: string) => void;
  clearCart: () => void;
}

const STORAGE_KEY = "livion_coffee_cart_v1";
const CART_EVENT = "livion-cart-change";
const VALID_IDS = new Set(BEAN_PRODUCTS.map((b) => b.id));

const CartContext = createContext<CartContextValue | null>(null);

function subscribeToCart(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CART_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CART_EVENT, callback);
  };
}

function getCartSnapshot(): string {
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? "[]";
  } catch {
    return "[]";
  }
}

function getServerCartSnapshot(): string {
  return "[]";
}

function parseCartItems(raw: string): CartItem[] {
  try {
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => VALID_IDS.has(item.productId));
  } catch {
    return [];
  }
}

function writeCartItems(next: CartItem[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event(CART_EVENT));
  } catch {
    // Ignore storage write errors in restricted contexts.
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const rawCart = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot,
  );
  const items = useMemo(() => parseCartItems(rawCart), [rawCart]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (
    product: BeanProduct,
    weight: WeightOption["label"],
    grind: GrindOption,
    quantity = 1,
  ) => {
    const key = `${product.id}__${weight}__${grind}`;
    const unitPrice = calculateBeanPrice(product.basePrice200g, weight);
    const current = parseCartItems(getCartSnapshot());
    const existing = current.find((item) => item.key === key);

    const next = existing
      ? current.map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      : [
          ...current,
          {
            key,
            productId: product.id,
            name: product.name,
            image: product.image,
            weight,
            grind,
            unitPrice,
            quantity,
          },
        ];

    writeCartItems(next);
    setIsOpen(true);
  };

  const updateQuantity = (key: string, delta: number) => {
    const current = parseCartItems(getCartSnapshot());
    const next = current
      .map((item) =>
        item.key === key ? { ...item, quantity: item.quantity + delta } : item,
      )
      .filter((item) => item.quantity > 0);
    writeCartItems(next);
  };

  const removeItem = (key: string) => {
    const current = parseCartItems(getCartSnapshot());
    writeCartItems(current.filter((item) => item.key !== key));
  };

  const clearCart = () => writeCartItems([]);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

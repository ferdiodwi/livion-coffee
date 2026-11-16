function readPath(source: unknown, path: string): string {
  if (!source || typeof source !== "object") return "";
  const parts = path.split(".");
  let cursor: unknown = source;
  for (const part of parts) {
    if (!cursor || typeof cursor !== "object") return "";
    cursor = (cursor as Record<string, unknown>)[part];
  }
  if (typeof cursor === "string") return cursor;
  if (typeof cursor === "number" && Number.isFinite(cursor)) return String(cursor);
  return "";
}

/** Local dev pass-through matching CMS-SITE rewrite-bind slot signatures. */
export function bind(source: unknown, path: string): string {
  return readPath(source, path);
}

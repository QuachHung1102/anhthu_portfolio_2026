// "137/150" at 0.5 -> "69/75". Each number keeps its decimals, words are left alone.
// At the finish line it hands back the original text, so odd formats ("1,000") still end right.
export function dienSo(mau: string, tiLe: number) {
  if (tiLe >= 1) return mau;
  return mau.replace(/\d+(\.\d+)?/g, (so, le?: string) =>
    (Number(so) * tiLe).toFixed(le ? le.length - 1 : 0),
  );
}

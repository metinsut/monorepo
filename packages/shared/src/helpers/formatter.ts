export function formatPrice(
  value: number,
  options?: Intl.NumberFormatOptions & { digit: number | null }
) {
  const digit = options?.digit ?? 2;
  return new Intl.NumberFormat('de-DE', {
    ...(options?.digit === null
      ? {}
      : { minimumFractionDigits: digit, maximumFractionDigits: digit }),
    ...options,
  }).format(value);
}

export function getRandomNumMinMax(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function formattedAmount(amount: number | undefined, decimal = true) {
  return amount
    ? new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: decimal ? 2 : 0,
        maximumFractionDigits: decimal ? 2 : 0,
      }).format(amount)
    : 0.0;
}

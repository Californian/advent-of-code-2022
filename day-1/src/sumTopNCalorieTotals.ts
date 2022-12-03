const sumTopNCalorieTotals = (
  calorieTotalsSorted: number[],
  n: number
): number => {
  return calorieTotalsSorted
    .slice(0, n)
    .reduce((currentSum, currentVal) => currentSum + currentVal)
}

export { sumTopNCalorieTotals };

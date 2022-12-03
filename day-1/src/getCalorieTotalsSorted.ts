const getCalorieTotals = (caloriesArrText: string): number => {
  const caloriesArr = caloriesArrText
    .split("\n")
    .filter((c) => c !== "")
    .map((c) => {
      return parseInt(c);
    })

  const calories = caloriesArr.reduce((
    heretoforeResult,
    currentValue
  ) => heretoforeResult + currentValue)

  return calories
}

const getCalorieTotalsSorted = (caloriesArrArrText: string): number[] => {
  const elves = caloriesArrArrText.split("\n\n")
  const calories = elves.map(getCalorieTotals)

  return calories.sort((a, b) => b - a)
}
export { getCalorieTotalsSorted }

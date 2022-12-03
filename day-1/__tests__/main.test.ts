import { promises as fs } from "fs";

import { getCalorieTotalsSorted, sumTopNCalorieTotals } from "src";

describe("elf calorie functions", () => {
  const inputFile = "./__tests__/input.txt";
  let caloriesText: string;
  let calorieTotalsSorted: number[];

  // Act before assertions
  beforeAll(async () => {
    caloriesText = await fs.readFile(inputFile, "utf8")
    calorieTotalsSorted = getCalorieTotalsSorted(caloriesText)
  });

  it("should get the correct calories for the most-caloried elf", () => {
    const mostCalories = calorieTotalsSorted[0];

    expect(mostCalories).toBe(75622);
  })

  it("should get the correct sum of the calories of the top three most-caloried elves", () => {
    const topNCalorieTotalsSum =
      sumTopNCalorieTotals(calorieTotalsSorted, 3)

    expect(topNCalorieTotalsSum).toBe(213159);
  })
});

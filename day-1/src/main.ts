import { program } from "commander";
import { promises as fs } from "fs";
import { getCalorieTotalsSorted, sumTopNCalorieTotals } from "src";

program
  .name("getElfInfo")
  .argument("<file>", "path of file to parse")
  .argument("<number>", "number of top elves' calories to sum")
  .action(async (inputFile: string, n: number) => {
    const caloriesText = await fs.readFile(inputFile, "utf8")
    const calorieTotalsSorted = getCalorieTotalsSorted(caloriesText)
    const topNCalorieTotalsSum =
      sumTopNCalorieTotals(calorieTotalsSorted, n)

    console.log(
      `The maximum number of calories any elf has is ${calorieTotalsSorted[0]}.`
    );
    console.log(
      `The top ${n} elves have a total of ${topNCalorieTotalsSum} calories between them.`
    )
  })

program.parse();

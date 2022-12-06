import { program } from "commander";
import { getFirstMarkerDistance, parseInput } from "src";

program
  .name("")
  .action(async () => {
    const parsedInput = await parseInput("./input.txt")

    console.log(getFirstMarkerDistance(parsedInput));
  });

program.parse();

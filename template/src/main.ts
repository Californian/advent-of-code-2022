import { program } from "commander";
import { parseInput } from "src";

program
  .name("")
  .action(async () => {
    const parsedInput = await parseInput("./input.txt")

    console.log(parsedInput);
  });

program.parse();

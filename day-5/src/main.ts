import { program } from "commander";
import { parseInput, getCratePositionsAfterMoves, getTopCrates } from "src";
import { CraneModel } from "types";

program
  .name("getTopCrates")
  .action(async () => {
    const parsedInput = await parseInput("./input.txt")
    const cratePositionsAfterMoves9000 =
      getCratePositionsAfterMoves(...parsedInput);

    const topCrates9000 = getTopCrates(cratePositionsAfterMoves9000);

    console.log(`Top crates of each stack when using a CrateMover 9000 are: ${
      topCrates9000.join("")
    }`);

    const cratePositionsAfterMoves9001 =
      getCratePositionsAfterMoves(...parsedInput, CraneModel["CrateMover 9001"]);

    const topCrates9001 = getTopCrates(cratePositionsAfterMoves9001);

    console.log(`Top crates of each stack when using a CrateMover 9001 are: ${
      topCrates9001.join("")
    }`);
  });

program.parse();

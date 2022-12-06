import { promises as fs } from "fs";

const parseInput = async (
  inputFilePath: string
): Promise<[string[][], number[][]]> => {
  const file = await fs.readFile(inputFilePath, "utf8");

  // Separate initial crate positions text block from moves text block.
  const [initialCratePositionsText, movesText] = file.split("\n\n");

  const initialCratePositionsLines = initialCratePositionsText
    .split("\n");

  // Even if one stack of crates is empty, the column name will be defined.
  // In its current state, the column names are column numbers (one-indexed),
  // but in case this changes, we do not want to rely on the text of the column
  // numbers.
  const numCrates = initialCratePositionsLines
    .at(-1)
    .trim()
    .split(/\s+/)
    .length;

  // Crate letters are every fourth character.
  const crateIndices = Array.apply(null, Array(numCrates))
    .map((_, i) => (i * 4) + 1);

  // Parse out crate letters from line.
  const initialCratePositionsArr = initialCratePositionsLines
    // Remove last line, which is just column numbers,
    .slice(0, -1)
    .map((initialCratePositionsLine) => {
      return crateIndices
        .map((crateIndex: number) => {
          return initialCratePositionsLine
            // Handle trimmed lines in input.
            .padEnd(numCrates * 4)
            .at(crateIndex)
        })
    });

  // Rotate two-dimensional matrix of crates.
  const initialCratePositions = initialCratePositionsArr[0]
    .map((_: string[], i: number) => {
      return initialCratePositionsArr
        .map((crates: string[]) => crates[i])
        // Remove any empty matrix locations.
        .filter((crate: string) => crate !== " ")
    });

  // Parse out move parts.
  const moves = movesText
    .trim()
    .split("\n")
    .map((moveText: string) => {
      const moveTextSplit = moveText.split(" ");
      const move = [1, 3, 5]
        .map((movePartIndex) => moveTextSplit.at(movePartIndex))
        .map((movePart, i) => {
          const movePartParsed = parseInt(movePart)
          // Correct for one-indexed column names
          return i > 0 ? movePartParsed - 1 : movePartParsed
        });

      return move;
    });

  return [initialCratePositions, moves];
}

export { parseInput };

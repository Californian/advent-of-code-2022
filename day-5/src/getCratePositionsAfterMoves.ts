import { CraneModel } from "types";

const getCratePositionsAfterMoves = (
  initialPositions: string[][],
  moves: number[][],
  craneModel: CraneModel = CraneModel[Object.values(CraneModel)[0]]
): string[][] => {
  // Copy initial positions array.
  let cratePositionsAfterMoves = initialPositions
    .map((position) => position.slice());

  moves.forEach(([numCrates, sourceStack, destinationStack]) => {
    // Remove crates from source stack.
    const cratesFromSourceStack = cratePositionsAfterMoves[sourceStack]
      .splice(0, numCrates);

    // Reverse crate order if crane picks them up one at a time (i.e. the crane
    // is a CrateMover 9000).
    const cratesToMove =
      craneModel === CraneModel["CrateMover 9000"] ?
        cratesFromSourceStack.reverse() :
        cratesFromSourceStack;

    cratePositionsAfterMoves[destinationStack].splice(0, 0, ...cratesToMove);
  })

  return cratePositionsAfterMoves;
};

export { getCratePositionsAfterMoves };

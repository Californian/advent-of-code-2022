// Get top crate of each stack.
const getTopCrates = (cratePositions: string[][]): string[] => {
  return cratePositions
    // Remove empty stacks.
    .filter((stack) => stack.length > 0)
    .map((stack) => stack[0]);
};

export { getTopCrates };

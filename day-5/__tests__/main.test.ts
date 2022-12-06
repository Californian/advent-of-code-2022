import { parseInput, getCratePositionsAfterMoves, getTopCrates } from "src";
import { CraneModel } from "types";

describe("getTopCrates", () => {
  let parsedInput: [string[][], number[][]];
  let cratePositions9000Computed: string[][]
  let cratePositions9001Computed: string[][]

  // Act before assertions
  beforeAll(async () => {
    parsedInput = await parseInput("./__tests__/input.txt");
  });

  it("should parse the crates correctly", () => {
    const initialCratePositionsExpeted = [
      ['N', 'Z'],
      ['D', 'C', 'M'],
      ['P']
    ];
    const movesExpected = [
      [1, 1, 0],
      [3, 0, 2],
      [2, 1, 0],
      [1, 0, 1]
    ];

    expect(parsedInput).toStrictEqual([initialCratePositionsExpeted, movesExpected]);
  })

  it("should move the crates correctly for the CrateMover 9000", () => {
    const cratePositionsExpected = [
      ["C"],
      ["M"],
      ["Z", "N", "D", "P"],
    ];

    cratePositions9000Computed = getCratePositionsAfterMoves(...parsedInput);

    expect(cratePositions9000Computed).toStrictEqual(cratePositionsExpected);
  })

  it("should get the correct top crates for the CrateMover 9000", () => {
    const topCratesComputed = getTopCrates(cratePositions9000Computed);

    const topCratesExpected = ["C", "M", "Z"];

    expect(topCratesComputed).toStrictEqual(topCratesExpected);
  })

  it("should move the crates correctly for the CrateMover 9001", () => {
    const cratePositionsExpected = [
      ["M"],
      ["C"],
      ["D", "N", "Z", "P"],
    ];

    cratePositions9001Computed = getCratePositionsAfterMoves(
      ...parsedInput,
      CraneModel["CrateMover 9001"]
    );

    expect(cratePositions9001Computed).toStrictEqual(cratePositionsExpected);
  })

  it("should get the correct top crates for the CrateMover 9001", () => {
    const topCratesComputed = getTopCrates(cratePositions9001Computed);

    const topCratesExpected = ["M", "C", "D"];

    expect(topCratesComputed).toStrictEqual(topCratesExpected);
  })
});

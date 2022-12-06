import { parseInput, getFirstMarkerDistance } from "src";

describe("getFirstMarkerDistance", () => {
  let parsedInput: string;

  // Act before assertions
  beforeAll(async () => {
    parsedInput = await parseInput("./__tests__/input.txt");
  });

  it("should return the correct signal", () => {
    const distance = getFirstMarkerDistance(parsedInput);

    expect(distance).toBe(7);
  })
});

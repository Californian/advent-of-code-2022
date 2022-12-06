import { promises as fs } from "fs";

const parseInput = async (inputFilePath: string): any => {
  const file = await fs.readFile(inputFilePath, "utf8");

  return;
};

export { parseInput };

import { promises as fs } from "fs";

const parseInput = async (inputFilePath: string): Promise<string> => {
  const file = await fs.readFile(inputFilePath, "utf8");

  return file;
};

export { parseInput };

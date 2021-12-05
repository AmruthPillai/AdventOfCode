import { readFileSync } from "fs";

export const readFile = (filepath: string) => readFileSync(filepath, "utf-8");

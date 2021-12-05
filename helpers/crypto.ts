import { createHash } from "crypto";

export const getMD5Hash = (string: string) =>
  createHash("md5").update(string).digest("hex");

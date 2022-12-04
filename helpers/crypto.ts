import { createHash } from "crypto";

/**
 * Helper function to get MD5 hash of a string
 *
 * @param  {string} string
 * @returns {string}
 */
export const getMD5Hash = (string: string): string =>
  createHash("md5").update(string).digest("hex");

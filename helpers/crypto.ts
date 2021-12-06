import { createHash } from "crypto";

/**
 * Helper function to get MD5 hash of a text string
 *
 * @param  {string} text
 * @returns {string}
 */
export const getMD5Hash = (text: string): string =>
  createHash("md5").update(text).digest("hex");

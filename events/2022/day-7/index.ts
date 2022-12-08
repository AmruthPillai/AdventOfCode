import { sum } from "@helpers/arrays";

const generateDirectoryMap = (input: string): Map<string, number> => {
  const lines: string[] = input.split("\n");

  let currentPath: string[] = [];
  const filesMap: Record<string, number> = {};

  for (const line of lines) {
    const lineArr = line.split(" ");

    // If the line starts with $, it is a command
    if (lineArr[0] === "$") {
      const [command, arg] = lineArr.slice(1);

      // If the command is `cd`, update the currentPath
      if (command === "cd") {
        // To go back to the root, just re-initialize current path to ''
        if (arg === "/") {
          currentPath = [""];
          continue;
        }

        // Go up one directory by removing the last directory in current path
        if (arg === "..") {
          currentPath.pop();
          continue;
        }

        // Append the new directory to the current path
        currentPath.push(arg);
      }

      // If the command is `ls`, do nothing
      continue;
    }

    // If the line is not a command, it is a file or directory listing
    const [first, second] = lineArr;

    // If it is a directory listing, do nothing
    if (first === "dir") {
      continue;
    }

    // Stucture the file path using string interpolation
    const filePath = [...currentPath, second].join("/");

    // Add the file path with it's size to the files map
    filesMap[filePath] = Number(first);
  }

  // Create a map of each directory (root level and sub directories), along with their cumulative sizes
  return Object.entries(filesMap).reduce((acc, [path, size]) => {
    // Extract the list of directories (if any) from the file path string
    const directories = path.split("/").slice(0, -1);

    // Keep track of which directories have been visited within the loop
    const directoryStack = [];

    // Check if there is a directory in the path, or if the file is located in the root
    for (let i = 0; i < directories.length; i++) {
      const directoryPath = [...directoryStack, directories[i]].join("/");

      const currentSize = acc.get(directoryPath) ?? 0;
      acc.set(directoryPath, currentSize + size);

      directoryStack.push(directories[i]);
    }

    return acc;
  }, new Map<string, number>());
};

export const partOne = (input: string): number => {
  const directoryMap = generateDirectoryMap(input);

  // Return the sum of all directory sizes, which are at most 100000
  return sum([...directoryMap.values()].filter((size) => size <= 100000));
};

export const partTwo = (input: string): number => {
  const directoryMap = generateDirectoryMap(input);

  // Calculate the unused space by finding the difference between total disk space and root directory size
  const unusedSpaceLeft = 70000000 - directoryMap.get("");
  const remainingSpaceRequired = 30000000 - unusedSpaceLeft;

  // Return the minimum of the directory sizes which are above the required unused space limit
  return Math.min(...[...directoryMap.values()].filter((size) => size >= remainingSpaceRequired));
};

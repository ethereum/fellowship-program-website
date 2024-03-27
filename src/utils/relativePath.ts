/**
 * Replaces back slashes of file paths generated in Windows OS with Node to forward slashes.
 */
export const toPosixPath = (path: string) => path.replace(/\\/g, "/")
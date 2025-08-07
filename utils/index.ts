/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
 * @param bytes - The size in bytes
 * @returns A formatted string representing the size with appropriate unit
 */
export const formatSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  // Determine the appropriate unit by calculating the logarithm
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Calculate the value in the appropriate unit and round to 2 decimal places
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
  
  return `${value} ${sizes[i]}`;
};

export const generateUUID = crypto.randomUUID();
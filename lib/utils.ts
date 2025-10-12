import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function convertFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}



const CONVEX_BASE_URL = process.env.NEXT_PUBLIC_CONVEX_URL;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL; // frontend URL for share links

/**
 * Construct a public URL for viewing a file in your frontend
 * Anyone can open this link to see the file in the app
 */
export const constructFileUrl = (fileId: string) => {
  return `${SITE_URL}/workspace/${fileId}`;
};

/**
 * Construct a public URL for downloading a file
 * This will point to your frontend route that fetches the file from Convex
 */
export const constructDownloadUrl = (fileId: string) => {
  return `${SITE_URL}/workspace/${fileId}?download=true`;
};



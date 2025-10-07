<<<<<<< HEAD
import { clsx, type ClassValue } from "clsx"
=======
import { type ClassValue, clsx } from "clsx"
>>>>>>> 06aa319 (added editor and canvas functionalities)
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

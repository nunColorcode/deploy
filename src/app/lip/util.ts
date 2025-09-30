import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// NOTE: You'll need to install these packages in your new project:
// npm install clsx tailwind-merge

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

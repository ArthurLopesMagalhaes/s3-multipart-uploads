import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mbToBytes(mb: number) {
  return mb * 1024 * 1024;
}

export function sleep(delay = 1000) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

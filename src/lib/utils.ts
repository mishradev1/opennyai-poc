import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  if (!date) return '';
  
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "active":
      return "bg-blue-500";
    case "pending":
      return "bg-yellow-500";
    case "resolved":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
}

export function getStatusTextColor(status: string): string {
  switch (status.toLowerCase()) {
    case "active":
      return "text-blue-700 bg-blue-100";
    case "pending":
      return "text-yellow-700 bg-yellow-100";
    case "resolved":
      return "text-green-700 bg-green-100";
    default:
      return "text-gray-700 bg-gray-100";
  }
}

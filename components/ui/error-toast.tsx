"use client";

import { toast } from "sonner";

export function showErrorToast(message: string = "Coming soon! We're working on something awesome.") {
  toast.error("Oops!", {
    description: message,
    duration: 3000,
    position: "top-center",
  });
}
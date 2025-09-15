import { Template } from "@/types/template";

export const templates: Template[] = [
  {
    id: "timeless-professional",
    name: "Timeless Professional",
    category: "classic",
    description: "A classic and elegant template with a clean, single-column layout. Perfect for professionals in any industry.",
    features: ["ATS Optimized", "Single-Column", "Classic Design", "Professional"],
    popular: true,
    atsOptimized: true,
  },
  {
    id: "minimalist-expert",
    name: "Minimalist Expert",
    category: "modern",
    description: "A clean, two-column layout that separates contact information from the main content. Ideal for experienced professionals.",
    features: ["Two-Column", "Modern Design", "Clean Layout", "ATS Optimized"],
    popular: false,
    atsOptimized: true,
  }
];
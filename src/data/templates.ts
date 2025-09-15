import { Template } from "@/types/template";

export const templates: Template[] = [
  {
    id: "classic",
    name: "Classic Professional",
    category: "classic",
    description: "Clean, traditional layout perfect for any industry. Matches standard resume format with excellent ATS compatibility.",
    preview: "/templates/classic.jpg",
    features: ["ATS Optimized", "Traditional format", "Clean sections", "Universal appeal"],
    popular: true,
    atsOptimized: true
  },
  {
    id: "modern",
    name: "Modern Professional", 
    category: "modern",
    description: "Enhanced version of classic format with subtle modern touches while maintaining ATS optimization.",
    preview: "/templates/modern.jpg",
    features: ["Modern styling", "ATS Compatible", "Clean typography", "Professional appeal"],
    popular: true,
    atsOptimized: true
  },
  {
    id: "executive",
    name: "Executive",
    category: "executive",
    description: "Premium professional template designed for senior-level positions and executive roles.",
    preview: "/templates/executive.jpg", 
    features: ["Executive styling", "Premium design", "Leadership focus", "ATS Optimized"],
    atsOptimized: true
  },
  {
    id: "technical",
    name: "Technical",
    category: "technical",
    description: "Optimized for software engineers and technical professionals with enhanced skills presentation.",
    preview: "/templates/technical.jpg",
    features: ["Technical focus", "Skills emphasis", "Clean structure", "Developer optimized"],
    atsOptimized: true
  }
];
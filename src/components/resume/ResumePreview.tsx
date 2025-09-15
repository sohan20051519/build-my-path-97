import { ResumeData } from "@/types/resume";
import { Template } from "@/types/template";
import { ClassicTemplate } from "./templates/Classic";
import { ModernTemplate } from "./templates/Modern";
import { ExecutiveTemplate } from "./templates/Executive";
import { TechnicalTemplate } from "./templates/Technical";

interface ResumePreviewProps {
  data: ResumeData;
  template?: Template | null;
}

export const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  switch (template?.category) {
    case "modern":
      return <ModernTemplate data={data} />;
    case "executive":
      return <ExecutiveTemplate data={data} />;
    case "technical":
      return <TechnicalTemplate data={data} />;
    case "classic":
    default:
      return <ClassicTemplate data={data} />;
  }
};

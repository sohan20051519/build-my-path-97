import { ResumeData } from "@/types/resume";
import { Template } from "@/types/template";
import { TimelessProfessionalTemplate } from "./templates/TimelessProfessional";
import { MinimalistExpertTemplate } from "./templates/MinimalistExpert";

interface ResumePreviewProps {
  data: ResumeData;
  template?: Template | null;
}

export const ResumePreview = ({ data, template }: ResumePreviewProps) => {
  switch (template?.id) {
    case "timeless-professional":
      return <TimelessProfessionalTemplate data={data} />;
    case "minimalist-expert":
      return <MinimalistExpertTemplate data={data} />;
    default:
      return (
        <div className="p-4 text-center">
          <p>Please select a template to see a preview.</p>
        </div>
      );
  }
};

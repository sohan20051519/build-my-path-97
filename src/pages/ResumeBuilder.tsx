import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PersonalInfoForm } from "@/components/resume/PersonalInfoForm";
import { ProfessionalSummaryForm } from "@/components/resume/ProfessionalSummaryForm";
import { ExperienceForm } from "@/components/resume/ExperienceForm";
import { EducationForm } from "@/components/resume/EducationForm";
import { SkillsForm } from "@/components/resume/SkillsForm";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Download, Eye, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ResumeData } from "@/types/resume";
import { useToast } from "@/hooks/use-toast";
import { templates } from "@/data/templates";

const initialResumeData: ResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
  },
  professionalSummary: "",
  workExperience: [],
  education: [],
  skills: [],
};

export default function ResumeBuilder() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeSection, setActiveSection] = useState("personal");
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const templateId = searchParams.get("template");
  const selectedTemplate = templateId ? templates.find(t => t.id === templateId) : null;

  const updatePersonalInfo = (personalInfo: ResumeData["personalInfo"]) => {
    setResumeData((prev) => ({ ...prev, personalInfo }));
  };

  const updateProfessionalSummary = (professionalSummary: string) => {
    setResumeData((prev) => ({ ...prev, professionalSummary }));
  };

  const updateWorkExperience = (workExperience: ResumeData["workExperience"]) => {
    setResumeData((prev) => ({ ...prev, workExperience }));
  };

  const updateEducation = (education: ResumeData["education"]) => {
    setResumeData((prev) => ({ ...prev, education }));
  };

  const updateSkills = (skills: ResumeData["skills"]) => {
    setResumeData((prev) => ({ ...prev, skills }));
  };

  const handleDownload = () => {
    toast({
      title: "Download feature coming soon!",
      description: "PDF export functionality will be available in the next version.",
    });
  };

  const sections = [
    { id: "personal", label: "Personal Info", icon: FileText },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "experience", label: "Experience", icon: FileText },
    { id: "education", label: "Education", icon: FileText },
    { id: "skills", label: "Skills", icon: FileText },
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "personal":
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onChange={updatePersonalInfo}
          />
        );
      case "summary":
        return (
          <ProfessionalSummaryForm
            data={resumeData.professionalSummary}
            onChange={updateProfessionalSummary}
          />
        );
      case "experience":
        return (
          <ExperienceForm
            data={resumeData.workExperience}
            onChange={updateWorkExperience}
          />
        );
      case "education":
        return (
          <EducationForm
            data={resumeData.education}
            onChange={updateEducation}
          />
        );
      case "skills":
        return (
          <SkillsForm
            data={resumeData.skills}
            onChange={updateSkills}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      {/* Template Info Banner */}
      {selectedTemplate && (
        <div className="glass backdrop-blur-glass border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="neu-floating bg-gradient-primary rounded-lg p-2 shadow-elevation-2">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant">Using template:</p>
                    <p className="font-semibold text-on-surface">{selectedTemplate.name}</p>
                  </div>
                </div>
              </div>
              <Link to="/templates">
                <Button variant="glass" size="sm" className="interactive-glass w-full sm:w-auto">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Change Template
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Panel - Form */}
          <div className="space-y-6">
            {/* Section Navigation */}
            <Card variant="glass" className="interactive-glass backdrop-blur-glass">
              <CardContent className="p-4 lg:p-6">
                <div className="flex flex-wrap gap-2">
                  {sections.map((section) => (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "filled" : "neu"}
                      size="sm"
                      onClick={() => setActiveSection(section.id)}
                      className={`interactive-neu flex-1 sm:flex-none min-w-fit ${
                        activeSection === section.id ? "shadow-elevation-3" : ""
                      }`}
                    >
                      <section.icon className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">{section.label}</span>
                      <span className="sm:hidden">{section.label.split(' ')[0]}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Form Content */}
            <div className="min-h-[70vh] xl:h-[calc(100vh-16rem)]">
              <ScrollArea className="h-full">
                <div className="pr-2 lg:pr-4 space-y-6">
                  {renderActiveSection()}
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="xl:block">
            <div className="xl:sticky xl:top-8">
              <Card variant="elevated" className="interactive hover:shadow-elevation-4 transition-smooth">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-headline-medium font-semibold text-on-surface flex items-center">
                        <div className="neu-floating bg-gradient-secondary rounded-lg p-2 mr-3 shadow-elevation-2">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                        Live Preview
                      </h2>
                      <p className="text-sm text-on-surface-variant mt-1">
                        See your resume update in real-time
                      </p>
                    </div>
                    <Button
                      onClick={handleDownload}
                      variant="neu"
                      size="sm"
                      className="interactive-neu"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-[50vh] xl:h-[calc(100vh-16rem)] overflow-hidden">
                    <ScrollArea className="h-full">
                      <div className="p-4 lg:p-6">
                        <ResumePreview data={resumeData} template={selectedTemplate} />
                      </div>
                    </ScrollArea>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const ExecutiveTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="bg-white shadow-strong rounded-lg overflow-hidden h-full max-w-4xl mx-auto">
      <div className="p-8 space-y-6">
        {/* Premium Header */}
        <header className="text-center space-y-3 pb-6 border-b-2 border-primary">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 -mx-8 px-8 py-4">
            <h1 className="text-3xl font-bold text-resume-header tracking-wider">
              {data.personalInfo.fullName || "YOUR NAME"}
            </h1>
          </div>
          <div className="text-resume-muted space-y-2 pt-2">
            <div className="flex justify-center items-center space-x-6">
              {data.personalInfo.location && (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {data.personalInfo.location}
                </span>
              )}
              {data.personalInfo.phone && (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {data.personalInfo.phone}
                </span>
              )}
            </div>
            <div className="flex justify-center items-center space-x-6">
              {data.personalInfo.email && (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {data.personalInfo.email}
                </span>
              )}
              {data.personalInfo.linkedin && (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {data.personalInfo.linkedin.replace('https://', '').replace('http://', '')}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Executive Summary */}
        {data.professionalSummary && (
          <section>
            <h2 className="text-xl font-bold text-resume-header mb-4 text-center bg-primary/10 py-2 mx-4 rounded">
              EXECUTIVE SUMMARY
            </h2>
            <p className="text-resume-text leading-relaxed text-justify px-4">
              {data.professionalSummary}
            </p>
          </section>
        )}

        {/* Core Competencies */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-resume-header mb-4 text-center bg-primary/10 py-2 mx-4 rounded">
              CORE COMPETENCIES
            </h2>
            <div className="grid grid-cols-2 gap-3 px-4">
              {data.skills.slice(0, 8).map((skill) => (
                <div key={skill.id} className="flex items-center bg-gradient-to-r from-primary/5 to-transparent p-2 rounded">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                  <span className="text-resume-text font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Leadership Experience */}
        {data.workExperience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-resume-header mb-5 text-center bg-primary/10 py-2 mx-4 rounded">
              LEADERSHIP EXPERIENCE
            </h2>
            <div className="space-y-6 px-4">
              {data.workExperience.map((exp) => (
                <div key={exp.id} className="border-l-4 border-primary pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-resume-text text-lg">{exp.jobTitle}</h3>
                    </div>
                    <div className="text-sm text-resume-muted bg-primary text-white px-3 py-1 rounded-full">
                      {formatDate(exp.startDate)} to {formatDate(exp.endDate, exp.current)}
                    </div>
                  </div>
                  <p className="text-resume-accent font-semibold mb-3 text-lg">
                    {exp.company}{exp.location && `, ${exp.location}`}
                  </p>
                  {exp.description && (
                    <div className="space-y-2">
                      {exp.description.split('\n').filter(Boolean).map((line, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          <span className="text-resume-text leading-relaxed">{line.trim()}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-resume-header mb-4 text-center bg-primary/10 py-2 mx-4 rounded">
              EDUCATION
            </h2>
            <div className="px-4">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start bg-gradient-to-r from-primary/5 to-transparent p-3 rounded">
                  <div>
                    <h3 className="font-bold text-resume-text">{edu.degree}</h3>
                    <p className="text-resume-accent font-medium">{edu.school}{edu.location && `, ${edu.location}`}</p>
                  </div>
                  <div className="text-sm text-resume-muted bg-primary text-white px-3 py-1 rounded-full">
                    {formatDate(edu.graduationDate)}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
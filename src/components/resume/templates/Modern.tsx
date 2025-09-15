import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const ModernTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="bg-white shadow-strong rounded-lg overflow-hidden h-full max-w-4xl mx-auto">
      <div className="p-8 space-y-6">
        {/* Header - Name and Contact */}
        <header className="text-center space-y-3 pb-4 border-b border-primary/20">
          <h1 className="text-3xl font-bold text-resume-header tracking-wide">
            {data.personalInfo.fullName || "YOUR NAME"}
          </h1>
          <div className="text-sm text-resume-muted space-y-1">
            <div>
              {[data.personalInfo.location, data.personalInfo.phone].filter(Boolean).join(' • ')}
            </div>
            <div>
              {[
                data.personalInfo.email,
                data.personalInfo.linkedin?.replace('https://', '').replace('http://', ''),
                data.personalInfo.website?.replace('https://', '').replace('http://', '')
              ].filter(Boolean).join(' • ')}
            </div>
          </div>
        </header>

        {/* Summary */}
        {data.professionalSummary && (
          <section>
            <h2 className="text-xl font-semibold text-resume-header mb-3 flex items-center">
              <span className="w-8 h-px bg-primary mr-3"></span>
              SUMMARY
            </h2>
            <p className="text-resume-text leading-relaxed text-justify pl-11">
              {data.professionalSummary}
            </p>
          </section>
        )}

        {/* Skill Highlights */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-resume-header mb-4 flex items-center">
              <span className="w-8 h-px bg-primary mr-3"></span>
              SKILL HIGHLIGHTS
            </h2>
            <div className="grid grid-cols-2 gap-2 pl-11">
              {data.skills.slice(0, 8).map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span className="text-resume-text">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.workExperience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-resume-header mb-4 flex items-center">
              <span className="w-8 h-px bg-primary mr-3"></span>
              EXPERIENCE
            </h2>
            <div className="space-y-5 pl-11">
              {data.workExperience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-resume-text text-lg">{exp.jobTitle}</h3>
                    </div>
                    <div className="text-sm text-resume-muted bg-primary/10 px-2 py-1 rounded">
                      {formatDate(exp.startDate)} to {formatDate(exp.endDate, exp.current)}
                    </div>
                  </div>
                  <p className="text-resume-accent font-medium mb-3">
                    {exp.company}{exp.location && `, ${exp.location}`}
                  </p>
                  {exp.description && (
                    <div className="space-y-2">
                      {exp.description.split('\n').filter(Boolean).map((line, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
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
            <h2 className="text-xl font-semibold text-resume-header mb-4 flex items-center">
              <span className="w-8 h-px bg-primary mr-3"></span>
              EDUCATION
            </h2>
            <div className="pl-11">
              {data.education.map((edu) => (
                <div key={edu.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-resume-text">{edu.degree}</h3>
                    <p className="text-resume-accent">{edu.school}{edu.location && `, ${edu.location}`}</p>
                  </div>
                  <div className="text-sm text-resume-muted bg-primary/10 px-2 py-1 rounded">
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
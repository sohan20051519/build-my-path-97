import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const ClassicTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="bg-white shadow-strong rounded-lg overflow-hidden h-full max-w-4xl mx-auto">
      <div className="p-8 space-y-6">
        {/* Header - Name and Contact */}
        <header className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-resume-header uppercase tracking-wide">
            {data.personalInfo.fullName || "YOUR NAME"}
          </h1>
          <div className="text-sm text-resume-muted">
            {[
              data.personalInfo.location,
              data.personalInfo.phone,
              data.personalInfo.email,
              data.personalInfo.linkedin?.replace('https://', '').replace('http://', ''),
              data.personalInfo.website?.replace('https://', '').replace('http://', '')
            ].filter(Boolean).join(' | ')}
          </div>
        </header>

        {/* Summary */}
        {data.professionalSummary && (
          <section>
            <h2 className="text-lg font-bold text-resume-header mb-2">SUMMARY</h2>
            <p className="text-resume-text leading-relaxed text-justify">
              {data.professionalSummary}
            </p>
          </section>
        )}

        {/* Skill Highlights */}
        {data.skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-resume-header mb-3">SKILL HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.slice(0, 8).map((skill) => (
                <div key={skill.id} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-resume-text rounded-full mr-2"></span>
                  <span className="text-resume-text text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.workExperience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-resume-header mb-4">EXPERIENCE</h2>
            <div className="space-y-5">
              {data.workExperience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-bold text-resume-text">{exp.jobTitle}</h3>
                    </div>
                    <div className="text-sm text-resume-muted">
                      {formatDate(exp.startDate)} to {formatDate(exp.endDate, exp.current)}
                    </div>
                  </div>
                  <p className="text-resume-accent font-medium mb-2">
                    {exp.company}{exp.location && `, ${exp.location}`}
                  </p>
                  {exp.description && (
                    <div className="space-y-1">
                      {exp.description.split('\n').filter(Boolean).map((line, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-resume-text rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span className="text-resume-text text-sm leading-relaxed">{line.trim()}</span>
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
            <h2 className="text-lg font-bold text-resume-header mb-3">EDUCATION</h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-resume-text">{edu.degree}</h3>
                  <p className="text-resume-accent">{edu.school}{edu.location && `, ${edu.location}`}</p>
                </div>
                <div className="text-sm text-resume-muted">
                  {formatDate(edu.graduationDate)}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};
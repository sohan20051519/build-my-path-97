import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const TechnicalTemplate = ({ data }: { data: ResumeData }) => {
  const groupedSkills = Object.entries(
    data.skills.reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill.name);
      return acc;
    }, {} as Record<string, string[]>)
  );

  return (
    <div className="bg-white shadow-strong rounded-lg overflow-hidden h-full max-w-4xl mx-auto">
      <div className="p-8 space-y-6">
        {/* Tech Header */}
        <header className="text-center space-y-3 pb-4 border-b-2 border-primary bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 -mx-8 px-8 py-6">
          <h1 className="text-2xl font-bold text-resume-header font-mono tracking-widest">
            {data.personalInfo.fullName || "YOUR NAME"}
          </h1>
          <div className="text-sm text-resume-muted font-mono space-y-1">
            <div>
              📍 {data.personalInfo.location} | 📱 {data.personalInfo.phone}
            </div>
            <div>
              📧 {data.personalInfo.email}
            </div>
            {(data.personalInfo.linkedin || data.personalInfo.website) && (
              <div>
                {data.personalInfo.linkedin && `💼 ${data.personalInfo.linkedin.replace('https://', '').replace('http://', '')}`}
                {data.personalInfo.linkedin && data.personalInfo.website && ' | '}
                {data.personalInfo.website && `🌐 ${data.personalInfo.website.replace('https://', '').replace('http://', '')}`}
              </div>
            )}
          </div>
        </header>

        {/* Summary */}
        {data.professionalSummary && (
          <section>
            <h2 className="text-lg font-bold text-resume-header mb-3 font-mono border-l-4 border-primary pl-3">
              // SUMMARY
            </h2>
            <p className="text-resume-text leading-relaxed text-justify bg-primary/5 p-4 rounded font-mono text-sm">
              {data.professionalSummary}
            </p>
          </section>
        )}

        {/* Technical Skills */}
        {groupedSkills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-resume-header mb-4 font-mono border-l-4 border-primary pl-3">
              // TECHNICAL SKILLS
            </h2>
            <div className="space-y-3">
              {groupedSkills.map(([category, skills]) => (
                <div key={category} className="bg-primary/5 p-3 rounded">
                  <h4 className="font-bold text-resume-text capitalize font-mono text-primary mb-2">
                    {category.toUpperCase()}:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 text-xs bg-primary/20 text-resume-text rounded font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {data.workExperience.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-resume-header mb-4 font-mono border-l-4 border-primary pl-3">
              // EXPERIENCE
            </h2>
            <div className="space-y-5">
              {data.workExperience.map((exp) => (
                <div key={exp.id} className="border border-primary/20 p-4 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-resume-text font-mono">{exp.jobTitle}</h3>
                    </div>
                    <div className="text-sm text-resume-muted bg-primary/10 px-2 py-1 rounded font-mono">
                      {formatDate(exp.startDate)} to {formatDate(exp.endDate, exp.current)}
                    </div>
                  </div>
                  <p className="text-resume-accent font-medium mb-3 font-mono">
                    {exp.company}{exp.location && `, ${exp.location}`}
                  </p>
                  {exp.description && (
                    <div className="space-y-2">
                      {exp.description.split('\n').filter(Boolean).map((line, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-primary mr-2 font-mono">▶</span>
                          <span className="text-resume-text leading-relaxed text-sm">{line.trim()}</span>
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
            <h2 className="text-lg font-bold text-resume-header mb-4 font-mono border-l-4 border-primary pl-3">
              // EDUCATION
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start bg-primary/5 p-3 rounded">
                <div>
                  <h3 className="font-bold text-resume-text font-mono">{edu.degree}</h3>
                  <p className="text-resume-accent font-mono">{edu.school}{edu.location && `, ${edu.location}`}</p>
                </div>
                <div className="text-sm text-resume-muted bg-primary/10 px-2 py-1 rounded font-mono">
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
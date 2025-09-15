import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "T00:00:00");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export default function MinimalistExpert({ data, isPreview = false }: { data: ResumeData, isPreview?: boolean }) {
  const baseFontSize = isPreview ? '9px' : '11px';
  const personalInfo = data.personalInfo || {};
  const professionalSummary = data.professionalSummary || '';
  const workExperience = data.experience || [];
  const education = data.education || [];
  const skills = data.skills || [];

  return (
    <div
      className="bg-white text-gray-900"
      style={{
        fontSize: baseFontSize,
        width: isPreview ? '100%' : '210mm',
        height: isPreview ? '100%' : '297mm',
        padding: isPreview ? '2rem' : '1.25in',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      }}
    >
      <div className="grid grid-cols-12 gap-8 h-full">
        {/* Left Column */}
        <div className="col-span-4 space-y-4 pt-4">
          <h1 className="text-[2.5em] font-bold leading-tight">{personalInfo.name || "Your Name"}</h1>
          <h2 className="text-[1.3em] font-semibold text-primary">{personalInfo.jobTitle || "Your Title"}</h2>

          <div className="space-y-3 text-[0.9em] pt-6">
            <div>
              <h3 className="font-bold tracking-widest text-primary/80 text-[0.8em] uppercase mb-1">Contact</h3>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-8 space-y-6">
          {professionalSummary && (
            <section>
              <h2 className="text-[1.6em] font-bold border-b-2 border-primary/50 pb-1 mb-2">Summary</h2>
              <p className="mt-2 text-[1em] leading-relaxed">{professionalSummary}</p>
            </section>
          )}

          {workExperience.length > 0 && (
            <section>
              <h2 className="text-[1.6em] font-bold border-b-2 border-primary/50 pb-1 mb-2">Experience</h2>
              {workExperience.map(exp => (
                <div key={exp.id} className="mt-3">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-[1.2em] font-bold">{exp.jobTitle}</h3>
                    <p className="text-[0.9em] font-mono text-gray-600">{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.endDate === 'Present')}</p>
                  </div>
                  <p className="text-[1.1em] font-semibold text-primary">{exp.company}, {exp.location}</p>
                  {exp.description && (
                    <ul className="list-disc pl-5 mt-1 text-[1em] leading-snug space-y-1">
                      {exp.description.split('\n').map((line, i) => <li key={i}>{line}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-[1.6em] font-bold border-b-2 border-primary/50 pb-1 mb-2">Education</h2>
              {education.map(edu => (
                <div key={edu.id} className="mt-3">
                  <h3 className="text-[1.2em] font-bold">{edu.degree}</h3>
                  <div className="flex justify-between text-[1.1em]">
                    <p className="font-semibold text-primary">{edu.school}, {edu.location}</p>
                    <p className="text-[0.9em] font-mono text-gray-600">{edu.graduationDate}</p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-[1.6em] font-bold border-b-2 border-primary/50 pb-1 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                {skills.map(skill => (
                  <p key={skill.id} className="text-[1em]">{skill.name}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

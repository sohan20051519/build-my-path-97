import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "T00:00:00"); // Fix date parsing
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export default function TimelessProfessional({ data, isPreview = false }: { data: ResumeData, isPreview?: boolean }) {
  const baseFontSize = isPreview ? '8px' : '12px';
  const personalInfo = data.personalInfo || {};
  const professionalSummary = data.professionalSummary || '';
  const workExperience = data.experience || [];
  const education = data.education || [];
  const skills = data.skills || [];

  return (
    <div
      className="bg-white text-gray-800"
      style={{
        fontSize: baseFontSize,
        width: isPreview ? '100%' : '210mm',
        height: isPreview ? '100%' : '297mm',
        padding: isPreview ? '2rem' : '1in',
        fontFamily: 'Georgia, serif'
      }}
    >
      <header className="text-center mb-6">
        <h1 className="text-[2.8em] font-bold text-gray-800 uppercase tracking-wider">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-[1.1em] font-semibold text-gray-700 mt-1">
          {personalInfo.jobTitle || "Your Title"}
        </p>
        <p className="text-[0.9em] text-gray-600 mt-2">
          {[
            personalInfo.address,
            personalInfo.phone,
            personalInfo.email,
          ].filter(Boolean).join(' | ')}
        </p>
      </header>

      {professionalSummary && (
        <section className="mb-5">
          <h2 className="text-[1.5em] font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-[1em] text-gray-700 leading-relaxed">
            {professionalSummary}
          </p>
        </section>
      )}

      {workExperience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-[1.5em] font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-2">WORK EXPERIENCE</h2>
          {workExperience.map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[1.2em] font-semibold text-gray-800">{exp.jobTitle}</h3>
                <p className="text-[0.9em] text-gray-600">{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.endDate === 'Present')}</p>
              </div>
              <p className="text-[1.1em] font-medium text-gray-700">{exp.company}{exp.location && `, ${exp.location}`}</p>
              {exp.description && (
                <ul className="list-disc list-inside mt-1 text-[1em] text-gray-700 space-y-1">
                  {exp.description.split('\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {education.length > 0 && (
        <section className="mb-5">
          <h2 className="text-[1.5em] font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-2">EDUCATION</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-[1.2em] font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-[0.9em] text-gray-600">{edu.graduationDate}</p>
              </div>
              <p className="text-[1.1em] font-medium text-gray-700">{edu.school}{edu.location && `, ${edu.location}`}</p>
            </div>
          ))}
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <h2 className="text-[1.5em] font-bold text-gray-700 border-b-2 border-gray-300 pb-1 mb-2">SKILLS</h2>
          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((skill) => (
              <span key={skill.id} className="bg-gray-200 text-gray-800 text-[0.9em] font-medium mr-2 px-3 py-1 rounded">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

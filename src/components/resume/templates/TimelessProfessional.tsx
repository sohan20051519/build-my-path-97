import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const TimelessProfessionalTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden h-full max-w-4xl mx-auto p-8">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 uppercase tracking-wider">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          {[
            data.personalInfo.location,
            data.personalInfo.phone,
            data.personalInfo.email,
            data.personalInfo.linkedin,
            data.personalInfo.website,
          ].filter(Boolean).join(' | ')}
        </p>
      </header>

      {data.professionalSummary && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2 mb-3">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">
            {data.professionalSummary}
          </p>
        </section>
      )}

      {data.workExperience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2 mb-3">WORK EXPERIENCE</h2>
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-800">{exp.jobTitle}</h3>
                <p className="text-sm text-gray-600">{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.current)}</p>
              </div>
              <p className="text-md font-medium text-gray-700">{exp.company}{exp.location && `, ${exp.location}`}</p>
              {exp.description && (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {exp.description.split('\\n').map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2 mb-3">EDUCATION</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-600">{formatDate(edu.graduationDate)}</p>
              </div>
              <p className="text-md font-medium text-gray-700">{edu.school}{edu.location && `, ${edu.location}`}</p>
            </div>
          ))}
        </section>
      )}

      {data.skills.length > 0 && (
        <section>
          <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2 mb-3">SKILLS</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <span key={skill.id} className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

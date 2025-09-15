import { ResumeData } from "@/types/resume";

const formatDate = (dateString: string, current: boolean = false) => {
  if (current) return "Present";
  if (!dateString) return "";
  const date = new Date(dateString + "-01");
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
};

export const MinimalistExpertTemplate = ({ data }: { data: ResumeData }) => {
  return (
    <div className="bg-white p-10 h-full">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-1">
          <h1 className="text-4xl font-bold">{data.personalInfo.fullName || "Your Name"}</h1>
          <p className="text-lg mt-2">{data.personalInfo.email}</p>
          <p className="text-lg">{data.personalInfo.phone}</p>
          <p className="text-lg">{data.personalInfo.location}</p>
          <p className="text-lg">{data.personalInfo.linkedin}</p>
          <p className="text-lg">{data.personalInfo.website}</p>
        </div>
        <div className="col-span-2 space-y-8">
          {data.professionalSummary && (
            <section>
              <h2 className="text-2xl font-bold border-b-4 border-black pb-2">Summary</h2>
              <p className="mt-4 text-lg">{data.professionalSummary}</p>
            </section>
          )}
          {data.workExperience.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold border-b-4 border-black pb-2">Experience</h2>
              {data.workExperience.map(exp => (
                <div key={exp.id} className="mt-4">
                  <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
                  <div className="flex justify-between text-lg">
                    <p>{exp.company}, {exp.location}</p>
                    <p>{formatDate(exp.startDate)} - {formatDate(exp.endDate, exp.current)}</p>
                  </div>
                  <ul className="list-disc pl-5 mt-2 text-lg">
                    {exp.description && exp.description.split('\\n').map((line, i) => <li key={i}>{line}</li>)}
                  </ul>
                </div>
              ))}
            </section>
          )}
          {data.education.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold border-b-4 border-black pb-2">Education</h2>
              {data.education.map(edu => (
                <div key={edu.id} className="mt-4">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex justify-between text-lg">
                    <p>{edu.school}, {edu.location}</p>
                    <p>{formatDate(edu.graduationDate)}</p>
                  </div>
                </div>
              ))}
            </section>
          )}
          {data.skills.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold border-b-4 border-black pb-2">Skills</h2>
              <div className="flex flex-wrap gap-4 mt-4">
                {data.skills.map(skill => (
                  <p key={skill.id} className="text-lg">{skill.name}</p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

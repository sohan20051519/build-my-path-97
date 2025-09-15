import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";
import { Education } from "@/types/resume";

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export const EducationForm = ({ data, onChange }: EducationFormProps) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      school: "",
      location: "",
      graduationDate: "",
      gpa: "",
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    onChange(
      data.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const removeEducation = (id: string) => {
    onChange(data.filter((edu) => edu.id !== id));
  };

  return (
    <Card variant="glass" className="interactive-glass backdrop-blur-glass">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-headline-medium font-semibold text-on-surface flex items-center">
            <div className="neu-floating bg-gradient-primary rounded-lg p-2 mr-3 shadow-elevation-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            Education
          </CardTitle>
          <Button
            onClick={addEducation}
            variant="neu"
            size="sm"
            className="interactive-neu w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Education
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {data.length === 0 ? (
          <Card variant="neu" className="interactive-neu">
            <CardContent className="text-center py-12">
              <div className="neu-floating bg-gradient-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-2">No education added yet</h3>
              <p className="text-on-surface-variant mb-4">Click "Add Education" to include your academic background</p>
            </CardContent>
          </Card>
        ) : (
          data.map((education) => (
            <Card
              key={education.id}
              variant="elevated"
              className="interactive hover:shadow-elevation-4 transition-smooth"
            >
              <CardContent className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-on-surface">
                      {education.degree || "New Education"}
                    </h4>
                    <p className="text-on-surface-variant">
                      {education.school || "School Name"}
                    </p>
                  </div>
                  <Button
                    onClick={() => removeEducation(education.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 neu-inset self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">Degree *</Label>
                    <Input
                      variant="neu"
                      placeholder="Bachelor of Science in Computer Science"
                      value={education.degree}
                      onChange={(e) =>
                        updateEducation(education.id, "degree", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">School *</Label>
                    <Input
                      variant="neu"
                      placeholder="University of Technology"
                      value={education.school}
                      onChange={(e) =>
                        updateEducation(education.id, "school", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">Location</Label>
                    <Input
                      variant="neu"
                      placeholder="Boston, MA"
                      value={education.location}
                      onChange={(e) =>
                        updateEducation(education.id, "location", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">Graduation Date</Label>
                    <Input
                      variant="neu"
                      type="month"
                      value={education.graduationDate}
                      onChange={(e) =>
                        updateEducation(education.id, "graduationDate", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">GPA (Optional)</Label>
                    <Input
                      variant="neu"
                      placeholder="3.8"
                      value={education.gpa || ""}
                      onChange={(e) =>
                        updateEducation(education.id, "gpa", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  );
};
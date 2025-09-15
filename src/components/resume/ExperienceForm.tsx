import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";
import { WorkExperience } from "@/types/resume";

interface ExperienceFormProps {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}

export const ExperienceForm = ({ data, onChange }: ExperienceFormProps) => {
  const addExperience = () => {
    const newExperience: WorkExperience = {
      id: Date.now().toString(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any) => {
    onChange(
      data.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const removeExperience = (id: string) => {
    onChange(data.filter((exp) => exp.id !== id));
  };

  return (
    <Card variant="glass" className="interactive-glass backdrop-blur-glass">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CardTitle className="text-headline-medium font-semibold text-on-surface flex items-center">
            <div className="neu-floating bg-gradient-tertiary rounded-lg p-2 mr-3 shadow-elevation-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            Work Experience
          </CardTitle>
          <Button
            onClick={addExperience}
            variant="neu"
            size="sm"
            className="interactive-neu w-full sm:w-auto"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Experience
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        {data.length === 0 ? (
          <Card variant="neu" className="interactive-neu">
            <CardContent className="text-center py-12">
              <div className="neu-floating bg-gradient-tertiary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-2">No work experience added yet</h3>
              <p className="text-on-surface-variant mb-4">Click "Add Experience" to get started with your first position</p>
            </CardContent>
          </Card>
        ) : (
          data.map((experience) => (
            <Card
              key={experience.id}
              variant="elevated"
              className="interactive hover:shadow-elevation-4 transition-smooth"
            >
              <CardContent className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-on-surface">
                      {experience.jobTitle || "New Position"}
                    </h4>
                    <p className="text-on-surface-variant">
                      {experience.company || "Company Name"}
                    </p>
                  </div>
                  <Button
                    onClick={() => removeExperience(experience.id)}
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10 neu-inset self-start"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">Job Title *</Label>
                    <Input
                      variant="neu"
                      placeholder="Software Engineer"
                      value={experience.jobTitle}
                      onChange={(e) =>
                        updateExperience(experience.id, "jobTitle", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">Company *</Label>
                    <Input
                      variant="neu"
                      placeholder="Tech Corp"
                      value={experience.company}
                      onChange={(e) =>
                        updateExperience(experience.id, "company", e.target.value)
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
                      placeholder="San Francisco, CA"
                      value={experience.location}
                      onChange={(e) =>
                        updateExperience(experience.id, "location", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">Start Date</Label>
                    <Input
                      variant="neu"
                      type="month"
                      value={experience.startDate}
                      onChange={(e) =>
                        updateExperience(experience.id, "startDate", e.target.value)
                      }
                      className="interactive-neu"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-sm font-medium text-on-surface">End Date</Label>
                    <Input
                      variant="neu"
                      type="month"
                      value={experience.endDate}
                      onChange={(e) =>
                        updateExperience(experience.id, "endDate", e.target.value)
                      }
                      disabled={experience.current}
                      className="interactive-neu disabled:opacity-50"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`current-${experience.id}`}
                    checked={experience.current}
                    onCheckedChange={(checked) =>
                      updateExperience(experience.id, "current", checked)
                    }
                    className="neu-inset"
                  />
                  <Label htmlFor={`current-${experience.id}`} className="text-sm font-medium text-on-surface">
                    I currently work here
                  </Label>
                </div>
                
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-on-surface">Description</Label>
                  <Textarea
                    variant="neu"
                    placeholder="• Developed and maintained React applications with 99% uptime&#10;• Led a team of 5 developers on key product features&#10;• Implemented automated testing reducing bugs by 40%"
                    value={experience.description}
                    onChange={(e) =>
                      updateExperience(experience.id, "description", e.target.value)
                    }
                    rows={5}
                    className="interactive-neu"
                  />
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  );
};
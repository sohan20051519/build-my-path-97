import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import { Skill } from "@/types/resume";

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

const skillCategories = [
  "Technical Skills",
  "Programming Languages",
  "Frameworks & Libraries",
  "Tools & Software",
  "Soft Skills",
  "Languages",
  "Certifications",
];

export const SkillsForm = ({ data, onChange }: SkillsFormProps) => {
  const [newSkill, setNewSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const addSkill = () => {
    if (!newSkill.trim() || !selectedCategory) return;

    const skill: Skill = {
      id: Date.now().toString(),
      name: newSkill.trim(),
      category: selectedCategory,
    };

    onChange([...data, skill]);
    setNewSkill("");
  };

  const removeSkill = (id: string) => {
    onChange(data.filter((skill) => skill.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  const groupedSkills = data.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <Card variant="glass" className="interactive-glass backdrop-blur-glass">
      <CardHeader className="pb-4">
        <CardTitle className="text-headline-medium font-semibold text-on-surface flex items-center">
          <div className="neu-floating bg-gradient-tertiary rounded-lg p-2 mr-3 shadow-elevation-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          Skills
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <Card variant="neu" className="interactive-neu">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <Label className="text-sm font-medium text-on-surface">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="neu-inset border-0 h-12 transition-neu hover:neu-outset">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="glass glass-medium backdrop-blur-glass">
                    {skillCategories.map((category) => (
                      <SelectItem key={category} value={category} className="hover:bg-surface-container">
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-medium text-on-surface">Skill</Label>
                <Input
                  variant="neu"
                  placeholder="e.g., React, JavaScript, Leadership"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="interactive-neu"
                />
              </div>
              <div className="space-y-3">
                <Label className="text-sm font-medium text-on-surface sm:hidden lg:block">&nbsp;</Label>
                <Button
                  onClick={addSkill}
                  disabled={!newSkill.trim() || !selectedCategory}
                  variant="neu"
                  className="w-full interactive-neu disabled:opacity-50"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {Object.keys(groupedSkills).length === 0 ? (
          <Card variant="neu" className="interactive-neu">
            <CardContent className="text-center py-12">
              <div className="neu-floating bg-gradient-tertiary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-2">No skills added yet</h3>
              <p className="text-on-surface-variant mb-4">Add your first skill using the form above</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedSkills).map(([category, skills]) => (
              <Card key={category} variant="elevated" className="interactive hover:shadow-elevation-3 transition-smooth">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-on-surface mb-4 flex items-center">
                    <div className="neu-floating bg-gradient-primary/20 rounded-lg p-2 mr-3 shadow-elevation-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </div>
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge
                        key={skill.id}
                        className="px-4 py-2 text-sm group hover:bg-destructive hover:text-destructive-foreground transition-smooth cursor-pointer neu-outset hover:neu-pressed bg-surface-container text-on-surface border-0"
                        onClick={() => removeSkill(skill.id)}
                      >
                        {skill.name}
                        <X className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-smooth" />
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PersonalInfo } from "@/types/resume";

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export const PersonalInfoForm = ({ data, onChange }: PersonalInfoFormProps) => {
  const handleInputChange = (field: keyof PersonalInfo) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({
      ...data,
      [field]: e.target.value,
    });
  };

  return (
    <Card variant="glass" className="interactive-glass backdrop-blur-glass">
      <CardHeader className="pb-4">
        <CardTitle className="text-headline-medium font-semibold text-on-surface flex items-center">
          <div className="neu-floating bg-gradient-primary rounded-lg p-2 mr-3 shadow-elevation-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          Personal Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="fullName" className="text-sm font-medium text-on-surface">Full Name *</Label>
            <Input
              id="fullName"
              variant="neu"
              placeholder="John Doe"
              value={data.fullName}
              onChange={handleInputChange("fullName")}
              className="interactive-neu"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-sm font-medium text-on-surface">Email *</Label>
            <Input
              id="email"
              type="email"
              variant="neu"
              placeholder="john@example.com"
              value={data.email}
              onChange={handleInputChange("email")}
              className="interactive-neu"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="phone" className="text-sm font-medium text-on-surface">Phone Number *</Label>
            <Input
              id="phone"
              variant="neu"
              placeholder="+1 (555) 123-4567"
              value={data.phone}
              onChange={handleInputChange("phone")}
              className="interactive-neu"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="location" className="text-sm font-medium text-on-surface">Location *</Label>
            <Input
              id="location"
              variant="neu"
              placeholder="New York, NY"
              value={data.location}
              onChange={handleInputChange("location")}
              className="interactive-neu"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-3">
            <Label htmlFor="website" className="text-sm font-medium text-on-surface">Website</Label>
            <Input
              id="website"
              variant="neu"
              placeholder="https://johndoe.com"
              value={data.website || ""}
              onChange={handleInputChange("website")}
              className="interactive-neu"
            />
          </div>
          <div className="space-y-3">
            <Label htmlFor="linkedin" className="text-sm font-medium text-on-surface">LinkedIn</Label>
            <Input
              id="linkedin"
              variant="neu"
              placeholder="https://linkedin.com/in/johndoe"
              value={data.linkedin || ""}
              onChange={handleInputChange("linkedin")}
              className="interactive-neu"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
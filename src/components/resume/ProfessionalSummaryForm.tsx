import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProfessionalSummaryFormProps {
  data: string;
  onChange: (data: string) => void;
}

export const ProfessionalSummaryForm = ({ data, onChange }: ProfessionalSummaryFormProps) => {
  return (
    <Card variant="glass" className="interactive-glass backdrop-blur-glass">
      <CardHeader className="pb-4">
        <CardTitle className="text-headline-medium font-semibold text-on-surface flex items-center">
          <div className="neu-floating bg-gradient-secondary rounded-lg p-2 mr-3 shadow-elevation-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          Professional Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="summary" className="text-sm font-medium text-on-surface">
            Brief overview of your professional background and key qualifications
          </Label>
          <Textarea
            id="summary"
            variant="neu"
            placeholder="Experienced software engineer with 5+ years of expertise in full-stack development, specializing in React and Node.js. Proven track record of delivering scalable web applications and leading cross-functional teams..."
            value={data}
            onChange={(e) => onChange(e.target.value)}
            rows={8}
            className="interactive-neu resize-none"
          />
          <div className="flex justify-between items-center">
            <p className="text-xs text-on-surface-variant">
              {data.length}/500 characters
            </p>
            <div className={`text-xs px-2 py-1 rounded-full ${
              data.length > 450 ? 'bg-destructive/20 text-destructive' : 
              data.length > 300 ? 'bg-tertiary/20 text-tertiary' : 
              'bg-primary/20 text-primary'
            }`}>
              {data.length > 450 ? 'Almost full' : data.length > 300 ? 'Good length' : 'Keep writing'}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
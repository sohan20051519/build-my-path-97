export interface Template {
  id: string;
  name: string;
  category: 'classic' | 'modern' | 'executive' | 'technical';
  description: string;
  preview: string;
  features: string[];
  popular?: boolean;
  atsOptimized: boolean;
}
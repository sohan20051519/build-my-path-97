import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/layout/Header";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Eye, Star, CheckCircle, ArrowRight } from "lucide-react";
import { templates } from "@/data/templates";
import { Template } from "@/types/template";
import { ResumeData } from "@/types/resume";

// Import template components
import TimelessProfessional from "@/components/resume/templates/TimelessProfessional";
import MinimalistExpert from "@/components/resume/templates/MinimalistExpert";

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Templates" },
    { value: "modern", label: "Modern" },
    { value: "classic", label: "Classic" },
    { value: "creative", label: "Creative" },
    { value: "executive", label: "Executive" },
    { value: "tech", label: "Technology" }
  ];

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularTemplates = templates.filter(t => t.popular);

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 glass backdrop-blur-glass">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-display-large font-bold text-on-surface mb-4">
            Professional Resume
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Templates</span>
          </h1>
          <p className="text-headline-small text-on-surface-variant mb-8 max-w-3xl mx-auto">
            Choose from {templates.length} ATS-optimized templates designed by professionals.
            Each template is crafted to help you stand out while passing through applicant tracking systems.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <Card variant="glass" className="p-6 interactive-glass">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant w-4 h-4" />
                  <Input
                    placeholder="Search templates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 neu-inset border-0 bg-transparent"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48 neu-inset border-0">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Popular Templates Section */}
        {searchTerm === "" && selectedCategory === "all" && (
          <section className="mb-16">
            <Card variant="elevated" className="p-8 mb-8 interactive">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-headline-large font-bold text-on-surface mb-2">Popular Templates</h2>
                  <p className="text-on-surface-variant">Most chosen by our users</p>
                </div>
                <Badge className="bg-gradient-tertiary text-white shadow-elevation-2">
                  <Star className="w-4 h-4 mr-1" />
                  Top Picks
                </Badge>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {popularTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} featured />
              ))}
            </div>
          </section>
        )}

        {/* All Templates Section */}
        <section>
          <Card variant="glass" className="p-8 mb-8 interactive-glass">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-headline-large font-bold text-on-surface mb-2">
                  {selectedCategory === "all" ? "All Templates" : categories.find(c => c.value === selectedCategory)?.label}
                </h2>
                <p className="text-on-surface-variant">
                  {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>
          </Card>
          
          {filteredTemplates.length === 0 ? (
            <Card variant="neu" className="text-center py-16 interactive-neu">
              <CardContent className="text-on-surface-variant">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-40" />
                <h3 className="text-headline-small font-semibold mb-2 text-on-surface">No templates found</h3>
                <p className="mb-6">Try adjusting your search terms or category filter</p>
                <Button 
                  variant="glass" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                  className="interactive-glass"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

interface TemplateCardProps {
  template: Template;
  featured?: boolean;
}

const dummyResumeData: ResumeData = {
  personalInfo: {
    name: "Alex Doe",
    jobTitle: "Software Engineer",
    email: "alex.doe@example.com",
    phone: "123-456-7890",
    address: "123 Tech Street, Silicon Valley, CA",
    linkedin: "linkedin.com/in/alex-doe",
    website: "alexdoe.com",
    fullName: "Alex Doe",
  },
  professionalSummary: "Innovative Software Engineer with 5+ years of experience in developing, testing, and maintaining web applications. Proficient in JavaScript, React, and Node.js. Passionate about creating responsive and user-friendly interfaces.",
  experience: [
    {
      id: "exp1",
      jobTitle: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco,CA",
      startDate: "2021-01-01",
      endDate: "Present",
      description: "Led the development of a new e-commerce platform, resulting in a 30% increase in sales.\nCollaborated with UX/UI designers to implement a new design system."
    },
  ],
  education: [
    {
      id: "edu1",
      degree: "B.S. in Computer Science",
      school: "University of Technology",
      location: "Berkeley, CA",
      graduationDate: "2018-12-31",
    }
  ],
  skills: [
    { id: "skill1", name: "JavaScript" },
    { id: "skill2", name: "React" },
    { id: "skill3", name: "Node.js" },
    { id: "skill4", name: "TypeScript" },
  ]
};

const templateComponents: { [key: string]: React.ComponentType<{ data: ResumeData, isPreview?: boolean }> } = {
  "timeless-professional": TimelessProfessional,
  "minimalist-expert": MinimalistExpert,
};

const TemplateCard = ({ template, featured = false }: TemplateCardProps) => {
  const TemplateComponent = templateComponents[template.id];

  return (
    <Card variant={featured ? "elevated" : "glass"} className={`interactive-glass group hover:shadow-elevation-4 transition-smooth ${featured ? 'ring-2 ring-primary/30' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg bg-surface-container aspect-[3/4]">
          {/* Template Preview */}
          <div className="absolute inset-0 transform scale-[0.2] origin-top-left bg-white">
            {TemplateComponent ? (
              <TemplateComponent data={dummyResumeData} isPreview={true} />
            ) : (
              <div className="w-full h-full bg-gradient-neu flex items-center justify-center">
                <p className="text-on-surface-variant">Preview not available</p>
              </div>
            )}
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center backdrop-blur-sm">
            <div className="flex gap-3">
              <Button variant="glass" size="sm" className="interactive-glass">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Link to={`/builder?template=${template.id}`}>
                <Button variant="filled" size="sm" className="shadow-elevation-3">
                  Use Template
                </Button>
              </Link>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {template.popular && (
              <Badge className="bg-gradient-tertiary text-white shadow-elevation-2">
                <Star className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {template.atsOptimized && (
              <Badge className="bg-tertiary-container text-on-tertiary-container shadow-elevation-1">
                <CheckCircle className="w-3 h-3 mr-1" />
                ATS
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <CardTitle className="text-lg group-hover:text-primary transition-smooth text-on-surface">
            {template.name}
          </CardTitle>
          <Badge variant="outline" className="capitalize text-xs border-outline">
            {template.category}
          </Badge>
        </div>
        <p className="text-on-surface-variant text-sm mb-4 line-clamp-2 leading-relaxed">
          {template.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {template.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} className="text-xs bg-surface-container-high text-on-surface">
              {feature}
            </Badge>
          ))}
          {template.features.length > 2 && (
            <Badge className="text-xs bg-surface-container-high text-on-surface">
              +{template.features.length - 2} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Link to={`/builder?template=${template.id}`} className="w-full">
          <Button variant="filled" className="w-full interactive shadow-elevation-2 group-hover:shadow-elevation-4">
            Use This Template
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { 
  FileText, 
  Download, 
  Zap, 
  Shield, 
  Users, 
  Trophy,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

export default function LandingPage() {
  const features = [
    {
      icon: Zap,
      title: "ATS-Friendly Templates",
      description: "15+ professionally designed templates that pass Applicant Tracking Systems"
    },
    {
      icon: FileText,
      title: "Real-Time Preview",
      description: "See your resume update instantly as you type with our live preview feature"
    },
    {
      icon: Download,
      title: "One-Click Download",
      description: "Export your resume as a high-quality PDF ready for job applications"
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your data stays secure and private - we never share your information"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Resumes Created" },
    { icon: Trophy, value: "95%", label: "Success Rate" },
    { icon: Star, value: "4.9", label: "User Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-tertiary opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-large md:text-display-large font-bold text-on-surface mb-6 leading-tight">
            Build Your Perfect
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Resume</span>
          </h1>
          <p className="text-headline-small text-on-surface-variant mb-8 max-w-2xl mx-auto leading-relaxed">
            Create professional, ATS-friendly resumes in minutes with our intuitive builder. 
            Stand out from the crowd and land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder">
              <Button variant="filled" size="xl" className="interactive">
                <FileText className="w-5 h-5 mr-2" />
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="glass-primary" size="xl" className="interactive-glass">
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 glass backdrop-blur-glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} variant="neu" className="text-center interactive-neu p-8">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-primary rounded-full p-4 shadow-elevation-3">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="text-display-small font-bold text-on-surface mb-2">{stat.value}</div>
                  <div className="text-on-surface-variant font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-medium font-bold text-on-surface mb-4">
              Why Choose Our Resume Builder?
            </h2>
            <p className="text-headline-small text-on-surface-variant max-w-2xl mx-auto">
              Everything you need to create a standout resume that gets you noticed by employers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="glass" className="interactive-glass group">
                <CardContent className="p-8 text-center">
                  <div className="neu-floating bg-gradient-primary rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:neu-outset transition-neu">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-headline-small font-semibold text-on-surface mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 glass backdrop-blur-glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-medium font-bold text-on-surface mb-4">
              How It Works
            </h2>
            <p className="text-headline-small text-on-surface-variant">
              Three simple steps to your perfect resume
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Choose Template",
                description: "Select from 15+ ATS-friendly templates designed by professionals"
              },
              {
                step: "2", 
                title: "Fill Information",
                description: "Add your details with our intuitive form and see live preview"
              },
              {
                step: "3",
                title: "Download & Apply",
                description: "Export as PDF and start applying to your dream jobs"
              }
            ].map((item, index) => (
              <Card key={index} variant="elevated" className="text-center interactive p-8">
                <CardContent className="p-0">
                  <div className="neu-floating bg-gradient-tertiary rounded-full w-20 h-20 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-elevation-4">
                    {item.step}
                  </div>
                  <h3 className="text-headline-small font-semibold text-on-surface mb-4">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card variant="glass" className="glass-strong interactive-glass">
            <CardContent className="p-16 bg-gradient-primary/10 rounded-lg">
              <h2 className="text-display-medium font-bold mb-6 text-on-surface">
                Ready to Build Your Resume?
              </h2>
              <p className="text-headline-small mb-8 text-on-surface-variant">
                Join thousands of professionals who have successfully landed their dream jobs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/builder">
                  <Button variant="filled" size="xl" className="interactive">
                    <FileText className="w-5 h-5 mr-2" />
                    Start Building Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-on-surface-variant">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-tertiary" />
                  Free to use
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-tertiary" />
                  No sign-up required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-tertiary" />
                  Instant download
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline-variant bg-surface py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="neu-floating bg-gradient-primary rounded-lg p-3 shadow-elevation-2">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-on-surface">ResumeBuilder</h3>
                <p className="text-sm text-on-surface-variant">Professional Resumes Made Easy</p>
              </div>
            </div>
            <nav className="flex items-center space-x-6">
              <Link to="/" className="text-on-surface-variant hover:text-on-surface transition-smooth">
                Home
              </Link>
              <Link to="/templates" className="text-on-surface-variant hover:text-on-surface transition-smooth">
                Templates
              </Link>
              <Link to="/builder" className="text-on-surface-variant hover:text-on-surface transition-smooth">
                Builder
              </Link>
            </nav>
          </div>
          <div className="mt-8 pt-8 border-t border-outline-variant text-center text-on-surface-variant">
            <p>&copy; 2024 ResumeBuilder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
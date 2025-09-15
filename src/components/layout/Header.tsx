import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, LayoutTemplate, PenTool } from "lucide-react";

export const Header = () => {
  return (
    <header className="glass backdrop-blur-glass border-b border-outline-variant/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 interactive group">
            <div className="neu-outset bg-neu-base rounded-lg p-2 group-hover:neu-floating transition-neu">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-on-surface">ResumeBuilder</h1>
              <p className="text-xs text-on-surface-variant">Professional Resumes</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-on-surface-variant hover:text-primary transition-smooth text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              to="/templates" 
              className="text-on-surface-variant hover:text-primary transition-smooth text-sm font-medium"
            >
              Templates
            </Link>
            <Link 
              to="/builder" 
              className="text-on-surface-variant hover:text-primary transition-smooth text-sm font-medium"
            >
              Builder
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/templates">
              <Button variant="glass" size="sm" className="hidden sm:flex interactive-glass">
                <LayoutTemplate className="w-4 h-4 mr-2" />
                Browse Templates
              </Button>
            </Link>
            <Link to="/builder">
              <Button variant="filled" size="sm" className="interactive shadow-elevation-2">
                <PenTool className="w-4 h-4 mr-2" />
                Create Resume
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
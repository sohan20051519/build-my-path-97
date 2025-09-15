import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & {
  variant?: 'default' | 'elevated' | 'filled' | 'outlined' | 'neu' | 'glass'
}>(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: "rounded-lg border bg-card text-card-foreground shadow-elevation-1",
    elevated: "rounded-lg bg-surface-container text-card-foreground shadow-elevation-2 hover:shadow-elevation-3 transition-smooth",
    filled: "rounded-lg bg-surface-container-high text-card-foreground shadow-elevation-1",
    outlined: "rounded-lg border border-outline-variant bg-surface text-card-foreground",
    neu: "rounded-lg neu-outset text-card-foreground hover:neu-floating transition-neu",
    glass: "rounded-lg glass glass-light text-card-foreground backdrop-blur-glass",
  };
  
  return (
    <div 
      ref={ref} 
      className={cn(variants[variant], className)} 
      {...props} 
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

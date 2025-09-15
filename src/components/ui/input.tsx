import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex h-12 w-full px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-on-surface-variant/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-smooth md:text-sm",
  {
    variants: {
      variant: {
        default: "rounded-lg border border-outline-variant bg-surface hover:bg-surface-container focus:bg-surface-bright",
        neu: "rounded-xl neu-inset border-0 bg-transparent text-on-surface hover:neu-outset focus:neu-floating",
        glass: "rounded-xl glass glass-light border-0 bg-transparent text-on-surface hover:glass-medium focus:glass-strong backdrop-blur-glass",
        filled: "rounded-lg bg-surface-container text-on-surface border-0 hover:bg-surface-container-high focus:bg-surface-container-highest shadow-elevation-1",
      },
    },
    defaultVariants: {
      variant: "neu",
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };

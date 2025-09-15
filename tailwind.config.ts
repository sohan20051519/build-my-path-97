import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-tertiary': 'var(--gradient-tertiary)',
        'gradient-surface': 'var(--gradient-surface)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-neu': 'var(--gradient-neu)',
      },
      backdropBlur: {
        'glass': 'var(--glass-backdrop-blur)',
      },
      boxShadow: {
        'elevation-1': 'var(--elevation-1)',
        'elevation-2': 'var(--elevation-2)',
        'elevation-3': 'var(--elevation-3)',
        'elevation-4': 'var(--elevation-4)',
        'elevation-5': 'var(--elevation-5)',
        'neu-inset': 'var(--neu-shadow-inset)',
        'neu-outset': 'var(--neu-shadow-outset)',
        'neu-pressed': 'var(--neu-shadow-pressed)',
        'neu-floating': 'var(--neu-shadow-floating)',
        'glass-light': 'var(--glass-shadow-light)',
        'glass-medium': 'var(--glass-shadow-medium)',
        'glass-strong': 'var(--glass-shadow-strong)',
      },
      transitionTimingFunction: {
        'smooth': 'var(--transition-smooth)',
        'fast': 'var(--transition-fast)',
        'bounce': 'var(--transition-bounce)',
        'neu': 'var(--transition-neu)',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        /* Material 3 Surface Colors */
        surface: {
          DEFAULT: "hsl(var(--surface))",
          container: "hsl(var(--surface-container))",
          'container-high': "hsl(var(--surface-container-high))",
          'container-highest': "hsl(var(--surface-container-highest))",
          dim: "hsl(var(--surface-dim))",
          bright: "hsl(var(--surface-bright))",
        },
        
        /* Material 3 Content Colors */
        'on-surface': "hsl(var(--on-surface))",
        'on-surface-variant': "hsl(var(--on-surface-variant))",
        outline: "hsl(var(--outline))",
        'outline-variant': "hsl(var(--outline-variant))",
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          container: "hsl(var(--primary-container))",
          'on-container': "hsl(var(--on-primary-container))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          container: "hsl(var(--secondary-container))",
          'on-container': "hsl(var(--on-secondary-container))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          container: "hsl(var(--tertiary-container))",
          'on-container': "hsl(var(--on-tertiary-container))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          container: "hsl(var(--error-container))",
          'on-container': "hsl(var(--on-error-container))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        
        /* Neumorphism Colors */
        neu: {
          base: "hsl(var(--neu-base))",
          light: "hsl(var(--neu-light))",
          dark: "hsl(var(--neu-dark))",
          highlight: "hsl(var(--neu-highlight))",
          shadow: "hsl(var(--neu-shadow))",
        },
        
        /* Glassmorphism Colors */
        glass: {
          bg: "hsl(var(--glass-bg))",
          border: "hsl(var(--glass-border))",
          shadow: "hsl(var(--glass-shadow))",
        },
        
        /* Legacy Resume Colors */
        resume: {
          header: "hsl(var(--primary))",
          text: "hsl(var(--on-surface))",
          muted: "hsl(var(--on-surface-variant))",
          section: "hsl(var(--surface-container))",
          accent: "hsl(var(--tertiary))",
        },
        
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

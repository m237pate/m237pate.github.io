/**
 * Stitch design system — Tailwind runtime config.
 * Shared by every page on the site. Loaded after the Tailwind CDN, before any utility classes resolve.
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        surface: "#0A0A0A",
        "surface-dim": "#0A0A0A",
        "surface-bright": "#222222",
        "surface-container-lowest": "#050505",
        "surface-container-low": "#111111",
        "surface-container": "#141414",
        "surface-container-high": "#1A1A1A",
        "surface-container-highest": "#222222",
        "surface-variant": "#1A1A1A",

        "on-surface": "#e5e2e1",
        "on-surface-variant": "#c4c7c7",
        "on-background": "#e5e2e1",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",

        primary: "#c9c6c5",
        "on-primary": "#313030",
        "primary-container": "#0A0A0A",
        "on-primary-container": "#7b7979",
        "primary-fixed": "#e5e2e1",
        "primary-fixed-dim": "#c9c6c5",
        "inverse-primary": "#5f5e5e",

        secondary: "#c6c6c6",
        "on-secondary": "#2f3131",
        "secondary-container": "#454747",
        "on-secondary-container": "#b5b5b5",
        "secondary-fixed": "#e2e2e2",
        "secondary-fixed-dim": "#c6c6c6",

        tertiary: "#76d6d5",
        "on-tertiary": "#003737",
        "tertiary-container": "#000d0d",
        "on-tertiary-container": "#158787",
        "tertiary-fixed": "#93f2f2",
        "tertiary-fixed-dim": "#76d6d5",

        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",

        outline: "#8e9192",
        "outline-variant": "#444748",

        "blueprint-accent": "#76d6d5",
        "text-primary": "#e5e2e1",
        "text-secondary": "#b5b5b5",
        "border-subtle": "#353434"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        gutter: "24px",
        "container-max": "1280px",
        base: "8px",
        "section-gap": "120px"
      },
      fontFamily: {
        "display-lg": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "label-md": ["Inter"],
        "label-caps": ["JetBrains Mono"],
        "technical-label": ["JetBrains Mono"]
      },
      fontSize: {
        "display-lg": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg": ["40px", { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-md": ["14px", { lineHeight: "20px", fontWeight: "500" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }],
        "technical-label": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }]
      }
    }
  }
};

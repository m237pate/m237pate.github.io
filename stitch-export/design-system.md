---
name: Precision Engineering Portfolio
colors:
  surface: '#041329'
  surface-dim: '#041329'
  surface-bright: '#2c3951'
  surface-container-lowest: '#010e24'
  surface-container-low: '#0d1c32'
  surface-container: '#112036'
  surface-container-high: '#1c2a41'
  surface-container-highest: '#27354c'
  on-surface: '#d6e3ff'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#d6e3ff'
  inverse-on-surface: '#233148'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#b7c8e1'
  on-tertiary: '#213145'
  tertiary-container: '#8292aa'
  on-tertiary-container: '#1a2b3e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#041329'
  on-background: '#d6e3ff'
  surface-variant: '#27354c'
  background-deep: '#0A192F'
  surface-charcoal: '#121212'
  blueprint-accent: '#007AFF'
  success-emerald: '#10B981'
  text-primary: '#F8FAFC'
  text-secondary: '#94A3B8'
  border-subtle: rgba(255, 255, 255, 0.1)
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  technical-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

This design system is built for high-performance engineering portfolios, emphasizing technical precision, architectural clarity, and forward-thinking innovation. The aesthetic follows a "Modern Blueprint" philosophy—combining the raw, structured feel of technical schematics with the sleek, polished finish of premium aerospace or software interfaces.

The visual language balances **Minimalism** with **Glassmorphism** to create a multi-layered environment. It utilizes thin, purposeful lines and structured data visualizations to evoke a sense of expertise and meticulous attention to detail. The UI is designed to feel like a high-end workstation: functional, efficient, and sophisticated.

## Colors

The palette is rooted in deep, cinematic darkness to provide maximum contrast for technical data. The primary **Blueprint Blue** serves as the navigational anchor, representing reliability and calculation. The secondary **Emerald Green** is reserved for success states, active connections, or "live" engineering metrics.

Text is rendered in varying shades of cool white and slate gray to establish a clear information hierarchy without straining the eyes in low-light environments. Surfaces are primarily dark navy and charcoal, layered to create a sense of physical depth within the digital space.

## Typography

The system uses a dual-font approach. **Inter** provides a clean, systematic sans-serif foundation for headlines and body copy, ensuring readability across complex project descriptions.

For technical metadata, labels, and "readout" elements, **JetBrains Mono** is utilized to reinforce the engineering and code-centric nature of the work. This monospaced font adds a layer of "blueprint" authenticity. Headlines should be tightly tracked and bold, while technical labels should use uppercase styling with increased letter spacing for a hardware-interface feel.

## Layout & Spacing

This design system employs a **Fixed Grid** model on desktop to mimic technical drawings, transitioning to a fluid model for mobile devices. A 12-column grid is used for desktop layouts, allowing for complex data arrangements and asymmetrical "blueprint" compositions.

Spacing follows a strict 8px rhythmic scale. Grid lines should be occasionally made visible (1px width, low opacity) to emphasize the "under construction" or "schematic" aesthetic of the portfolio. Content should be grouped in modular "blocks" with consistent padding to maintain a sense of order and precision.

## Elevation & Depth

Depth is communicated through **Glassmorphism** and tonal layering rather than traditional shadows. High-priority elements use semi-transparent background blurs (backdrop-filter: blur(12px)) and thin, 1px borders that catch the "light" like the edge of a glass pane.

- **Level 1 (Base):** Deep Navy (#0A192F).
- **Level 2 (Cards/Modules):** Charcoal (#121212) with a 1px subtle border.
- **Level 3 (Modals/Overlays):** Glassmorphic surfaces with a slight Blueprint Blue tint and crisp white inner-borders.

Avoid heavy, fuzzy shadows. Use "glow" effects (box-shadow with high spread and low opacity) sparingly for active primary buttons to simulate illuminated hardware components.

## Shapes

To maintain a technical and professional character, the system utilizes **Soft** corners (4px - 8px). Sharp corners feel too aggressive, while pill-shapes feel too consumer-oriented; the 4px radius provides just enough modern refinement while retaining a "machined" look.

Interactive elements like buttons and input fields should strictly adhere to the `rounded-sm` (4px) or `rounded-md` (8px) rules. Large containers like project cards may use `rounded-lg` (12px) to softly frame complex imagery.

## Components

### Buttons
High-contrast primary buttons should use the **Blueprint Blue** background with white text. Secondary buttons are "Ghost" style—thin 1px borders with monospaced labels. All buttons should have a subtle 200ms transition on hover, slightly increasing the border-glow.

### Cards
Project cards utilize the glassmorphic style. They should feature a "header" section with a monospaced ID (e.g., PRJ-001) to simulate a technical filing system. Use thin dividers to separate title, description, and tags.

### Chips/Tags
Tags for technical stacks (e.g., "Python", "CAD", "AWS") should use the monospaced font in all-caps, with a low-opacity background of the primary blue or emerald green.

### Input Fields
Fields are outlined with a 1px border. On focus, the border shifts to Blueprint Blue with a subtle outer glow. Labels should be monospaced and positioned above the field, never hidden as placeholders.

### Lists
Lists should be structured with "bullet points" that resemble geometric nodes (small squares or crosses) to reinforce the grid-based blueprint aesthetic.

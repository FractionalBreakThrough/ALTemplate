---
name: web-design
description: Build modern, production-grade websites and web pages with professional design patterns, responsive layouts, and polished UI
allowed-tools: Read Write Edit Bash Glob Grep WebFetch
---

# Web Design & Development Skill

You are an expert web designer and frontend developer. When building or modifying websites:

## Design Principles

1. **Visual Hierarchy**: Use size, color, contrast, and spacing to guide the eye
2. **Whitespace**: Generous padding and margins - never cramped layouts
3. **Typography**: Use a clear type scale (clamp() for fluid sizing), limit to 2-3 font families max
4. **Color**: Use a cohesive palette with CSS custom properties. Ensure WCAG 2.1 AA contrast ratios
5. **Consistency**: Reuse design tokens (colors, spacing, shadows, border-radius) throughout

## Layout & Responsiveness

- Mobile-first approach: design for small screens, then enhance for larger
- Use CSS Grid for 2D layouts, Flexbox for 1D alignment
- Breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop), 1200px+ (wide)
- Fluid typography with `clamp()` - no fixed font sizes
- Test all layouts mentally at 320px, 768px, and 1440px widths

## Modern CSS Techniques

- CSS custom properties for theming (`--color-primary`, `--spacing-md`, etc.)
- `backdrop-filter` for frosted glass effects
- `scroll-behavior: smooth` for anchor navigation
- CSS animations and transitions for micro-interactions
- `prefers-reduced-motion` media query for accessibility
- Container queries where appropriate
- Logical properties (`margin-inline`, `padding-block`) for internationalization

## Component Patterns

When building sections, follow these proven patterns:

### Hero Sections
- Bold headline with clear value proposition
- Supporting subtext (1-2 sentences)
- Primary + secondary CTA buttons
- Visual element (image, illustration, or gradient)
- Social proof (stats, logos, testimonials)

### Navigation
- Fixed/sticky header with blur backdrop
- Logo left, nav links center or right, CTA button far right
- Mobile hamburger menu with smooth slide/fade animation
- Active state indicators on current page/section

### Feature/Card Grids
- Consistent card sizing with CSS Grid `auto-fit` / `auto-fill`
- Hover effects (subtle lift with box-shadow transition)
- Icon + heading + description pattern
- Even spacing with gap property

### Testimonials & Social Proof
- Quote with attribution (name, title, company)
- Star ratings or metric highlights
- Logo strips for client/partner logos

### Footer
- Multi-column layout with links grouped by category
- Newsletter signup form
- Social media links
- Copyright and legal links

## Performance

- Inline critical CSS for above-the-fold content
- Lazy load images below the fold
- Use modern image formats (WebP, AVIF) with fallbacks
- Minimize DOM depth - avoid unnecessary wrapper divs
- Use `will-change` sparingly for animated elements

## Accessibility

- Semantic HTML (`nav`, `main`, `section`, `article`, `aside`, `footer`)
- All images need `alt` text (decorative images get `alt=""`)
- Focus styles for keyboard navigation
- ARIA labels where semantic HTML isn't sufficient
- Color is never the only means of conveying information
- Form inputs always have associated labels

## Graphics & Images

When graphics are needed:
- Use CSS gradients, shapes, and effects for decorative elements when possible
- Use SVG for icons and simple illustrations (inline for styling control)
- If the project has Nanobanana MCP configured, use it to generate custom graphics:
  - Hero images and backgrounds
  - Feature illustrations
  - Icons and decorative elements
  - Social media preview images
- Optimize all images for web (compress, correct dimensions, responsive srcset)

## Code Quality

- Single HTML file is fine for landing pages - keep CSS and JS inline for simplicity
- For larger sites, separate into files with a clear structure
- Use BEM or utility-class naming for CSS
- Comment sections clearly with `<!-- Section: Name -->` in HTML
- Group related CSS with section comments
- Keep JavaScript minimal and vanilla unless a framework is needed

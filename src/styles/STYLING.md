# Styling Conventions

This document outlines the styling conventions used in this project to ensure consistency and maintainability.

## CSS Variables

### Spacing Variables
- Use `--space-*` variables for all padding, margins, and spacing:
  - `--space-xs`: 4px - Use for minimal spacing, small icons padding, tight layouts
  - `--space-sm`: 8px - Use for general minimal padding, button vertical padding
  - `--space-md`: 12px - Use for medium padding, mobile component padding
  - `--space-lg`: 16px - Default padding for cards, containers, grid gaps
  - `--space-xl`: 24px - Use for section content spacing
  - `--space-2xl`: 32px - Use for mobile section padding
  - `--space-3xl`: 48px - Use for desktop section padding
  - `--space-4xl`: 64px - Use for large separations (footer margins)

### Color Variables
- Use semantic color variables:
  - `--background`: Page background
  - `--foreground`: Main text color
  - `--primary`: Primary accent color
  - `--muted`: Secondary text color
  - `--card`: Card/component background
  - `--border`: Border color
  - `--hover`: Hover state color
  - `--shadow`: Shadow base color

### Size Variables
- Use size variables for consistent element sizing:
  - Icon sizes: `--icon-sm` (18px), `--icon-md` (20px), `--icon-lg` (24px)
  - Button sizes: `--button-size-sm` (36px), `--button-size-md` (40px), `--button-size-lg` (44px)
  - Border radius: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-full` (9999px)

### Shadow Variables
- Use shadow variables for elevation consistency:
  - `--shadow-sm`: Subtle shadow (0 1px 2px)
  - `--shadow-md`: Medium shadow (0 4px 6px)
  - `--shadow-lg`: Large shadow (0 10px 15px)
  - `--shadow-focus`: Focus state shadow

## Utility Classes (helpers.css)

### Basic Utilities
- **Border**: `.border-standard` (1px solid var(--border))
- **Border Radius**: `.rounded-sm`, `.rounded-md`, `.rounded-lg`, `.rounded-full`
- **Shadow**: `.shadow-standard`, `.shadow-hover`, `.shadow-lg`, `.shadow-blue`
- **Transition**: `.transition-standard` (all 0.2s ease), `.transition-transform`

### Interactive Utilities
- **Hover Effects**:
  - `.hover-lift-sm:hover` (translateY(-1px))
  - `.hover-lift-md:hover` (translateY(-2px))
  - `.hover-scale:hover` (scale(1.02))
  - `.hover-border-primary:hover` (border-color: var(--primary))
  - `.hover-brightness:hover` (filter: brightness(1.1))
  - `.hover-shadow:hover` (box-shadow: var(--shadow-md))
- **Focus Effects**:
  - `.focus-outline:focus-visible` (2px solid var(--primary) with 2px offset)
  - `.focus-outline-hover:focus-visible` (2px solid var(--hover) with 2px offset)

### Combined Interactive Classes
- **`.interactive-card`**: Standard card interaction pattern 
  - Apply this class to any card-like elements in HTML/JSX
  - Provides: border, shadow-sm, background, transition, hover/focus effects
- **`.interactive-button`**: Standard button interaction pattern
  - Apply this class to button elements in HTML/JSX
  - Provides: shadow-sm, transition, cursor, hover/focus effects
- **`.interactive-toggle`**: Special toggle button interaction
  - Apply this class to toggle-like elements in HTML/JSX
  - Provides: shadow-sm, transition, cursor, hover/focus effects

## Component Styling Guidelines

### Cards
- Use baseline `.card` class for specific styling (padding, border-radius)
- Add `.interactive-card` class for standard interactions
- Default padding: `var(--space-lg)` (16px)
- Mobile padding: `var(--space-md)` (12px)
- Border radius: `var(--radius-md)` (8px)

### Buttons
- Use baseline `button` or `.button` class for component-specific styles
- Add `.interactive-button` class for standard interactions 
- Horizontal padding: `var(--space-xl)` (24px)
- Vertical padding: `var(--space-md)` (12px)
- Border radius: `var(--radius-sm)` (4px)

### Badges & Social Links
- Use baseline `.social-link` or `.tech-badge` for component-specific styles
- Add `.interactive-card` class for standard interactions
- Default padding: `var(--space-sm)` vertical, `var(--space-lg)` horizontal
- Mobile padding: `var(--space-xs)` vertical, `var(--space-md)` horizontal
- Inside cards: `var(--space-xs)` vertical, `var(--space-md)` horizontal

### ThemeToggle
- Use baseline `.theme-toggle` for component-specific styles
- Add `.interactive-toggle` class for standard interactions
- Desktop size: `var(--button-size-lg)` (44px)
- Mobile size: `var(--button-size-md)` (40px)
- Desktop position: `var(--space-lg)` (16px) from top/right
- Mobile position: `var(--space-md)` (12px) from top/right

## CSS Organization
- `base/`: Foundational styles (reset, typography, layout)
- `components/`: Specific UI elements (cards, badges, buttons, etc.)
- `theme/`: Variables, colors, and theming
- `utilities/`: Helper classes and animations

## Best Practices
1. Apply utility classes alongside component classes (e.g., `className="card interactive-card"`)
2. Set component-specific styles in the component CSS file
3. Check `helpers.css` for existing utilities before creating new styles
4. Keep media queries with the components they modify
5. Maintain dark mode support using the `dark` class
6. Only add component-specific overrides when the utility classes don't provide the desired behavior

## Example Usage
```jsx
// Regular card with interactive behavior
<div className="card interactive-card">Content</div>

// Button with interactive behavior
<button className="button interactive-button">Click me</button>

// Badge with interactive behavior
<span className="tech-badge interactive-card">React</span>

// Theme toggle with interactive behavior
<button className="theme-toggle interactive-toggle">Toggle</button>
```

## Enhanced Component Props

### SocialLink Props
```jsx
// Default usage
<SocialLink 
  href="https://example.com" 
  icon={<FaGithub />} 
  label="GitHub" 
  ariaLabel="Visit GitHub" 
/>

// With size and variant
<SocialLink 
  href="https://example.com" 
  icon={<FaGithub />} 
  label="GitHub" 
  ariaLabel="Visit GitHub"
  size="lg" // 'sm' | 'md' | 'lg'
  variant="outline" // 'default' | 'outline' | 'minimal'
  rounded="lg" // 'none' | 'sm' | 'md' | 'lg'
  className="my-custom-class" // Additional CSS classes
/>
```

### TechBadge Props
```jsx
// Default usage
<TechBadge 
  label="React" 
  icon={<FaReact />} 
  ariaLabel="React" 
/>

// With size and color
<TechBadge 
  label="React" 
  icon={<FaReact />} 
  ariaLabel="React"
  size="sm" // 'sm' | 'md' | 'lg'
  color="primary" // 'default' | 'primary' | 'muted'
  rounded="md" // 'none' | 'sm' | 'md' | 'lg'
  className="my-custom-class" // Additional CSS classes
/>
```

### Section Props
```jsx
// Default usage
<Section title="My Section" id="section-id">
  <p>Content</p>
</Section>

// With layout and alignment
<Section 
  title="My Section" 
  id="section-id"
  layout="grid" // 'block' | 'grid' | 'flex'
  columns={2} // 1 | 2 | 3 | 4 (when layout="grid")
  align="left" // 'left' | 'center' | 'right'
  spacing="lg" // 'sm' | 'md' | 'lg'
  background="muted" // 'default' | 'primary' | 'muted'
  className="my-custom-class" // Additional CSS classes
>
  <p>Content 1</p>
  <p>Content 2</p>
</Section>
```

### ThemeToggle Props
```jsx
// Default usage
<ThemeToggle />

// With size and position
<ThemeToggle 
  size="lg" // 'sm' | 'md' | 'lg'
  position="bottom-right" // 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'custom'
  shape="square" // 'circle' | 'square'
  corner="lg" // 'sm' | 'md' | 'lg' (only applies when shape="square")
  className="my-custom-class" // Additional CSS classes when position="custom"
/>
```

### Repository Props
```jsx
// Default usage
<Repository 
  name="My Repo" 
  description="Description" 
  url="https://github.com/user/repo" 
  language="typescript" 
/>

// With variant and size
<Repository 
  name="My Repo" 
  description="Description" 
  url="https://github.com/user/repo" 
  language="typescript"
  variant="compact" // 'default' | 'compact' | 'detailed'
  size="lg" // 'sm' | 'md' | 'lg'
  rounded="lg" // 'none' | 'sm' | 'md' | 'lg'
  className="my-custom-class" // Additional CSS classes
/>
```

## Configuration Notes
- Ensure `helpers.css` is imported in `index.css` after Tailwind directives to apply utilities correctly.
- The utility classes in `helpers.css` should come after component styles to ensure proper precedence.
- When adding new interactive patterns, update both component CSS and `helpers.css` to maintain consistency.

## Troubleshooting
- If utility classes don't apply, check CSS specificity or import order in `index.css`.
- For inconsistent hover/focus behaviors, ensure the correct interactive utility class is applied (`.interactive-card`, `.interactive-button`, or `.interactive-toggle`).
- If transitions don't work as expected, verify that the component doesn't have conflicting transition properties.

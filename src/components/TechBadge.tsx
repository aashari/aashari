"use client";

interface TechBadgeProps {
  label: string;
  icon: React.ReactNode;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'muted';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function TechBadge({ 
  label, 
  icon, 
  ariaLabel, 
  size = 'md', 
  color = 'default',
  rounded = 'sm',
  className = '' 
}: TechBadgeProps) {
  // Combined class mapping for size and color
  const classMap = {
    'default-sm': 'tech-badge interactive-card text-xs py-1 px-2 gap-1',
    'default-md': 'tech-badge interactive-card text-sm py-1.5 px-3 gap-2',
    'default-lg': 'tech-badge interactive-card text-md py-2 px-4 gap-3',
    'primary-sm': 'tech-badge interactive-card text-primary border-primary/20 text-xs py-1 px-2 gap-1',
    'primary-md': 'tech-badge interactive-card text-primary border-primary/20 text-sm py-1.5 px-3 gap-2',
    'primary-lg': 'tech-badge interactive-card text-primary border-primary/20 text-md py-2 px-4 gap-3',
    'muted-sm': 'tech-badge interactive-card text-muted border-muted/20 text-xs py-1 px-2 gap-1',
    'muted-md': 'tech-badge interactive-card text-muted border-muted/20 text-sm py-1.5 px-3 gap-2',
    'muted-lg': 'tech-badge interactive-card text-muted border-muted/20 text-md py-2 px-4 gap-3',
  };

  const baseClass = classMap[`${color}-${size}`] || classMap['default-md'];
  const roundedClass = `rounded-${rounded}`;

  return (
    <div
      className={`${baseClass} ${roundedClass} ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
} 

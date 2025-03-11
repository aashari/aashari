"use client";

interface TechBadgeProps {
  label: string;
  icon: React.ReactNode;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'muted';
  className?: string;
}

export default function TechBadge({ 
  label, 
  icon, 
  ariaLabel, 
  size = 'md', 
  color = 'default',
  className = '' 
}: TechBadgeProps) {
  // Size-specific styles
  const sizeClasses = {
    sm: 'text-xs py-1 px-2 gap-1',
    md: 'text-sm py-1.5 px-3 gap-2',
    lg: 'text-md py-2 px-4 gap-3',
  };

  // Color-specific styles
  const colorClasses = {
    default: '',
    primary: 'text-primary border-primary/20',
    muted: 'text-muted border-muted/20',
  };

  return (
    <div
      className={`tech-badge interactive-card ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
} 

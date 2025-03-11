"use client";

interface TechBadgeProps {
  label: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export default function TechBadge({ label, icon, ariaLabel }: TechBadgeProps) {
  return (
    <div className="tech-badge" role="img" aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </div>
  );
} 

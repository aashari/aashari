"use client";

import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'minimal';
  className?: string;
}

export default function SocialLink({ 
  href, 
  icon, 
  label, 
  ariaLabel, 
  size = 'md', 
  variant = 'default', 
  className = ''
}: SocialLinkProps) {
  // Size-specific styles
  const sizeClasses = {
    sm: 'text-xs py-1 px-2 gap-1',
    md: 'text-sm py-2 px-3 gap-2',
    lg: 'text-md py-3 px-4 gap-3',
  };

  // Variant-specific styles
  const variantClasses = {
    default: 'social-link interactive-card',
    outline: 'social-link border border-primary bg-transparent text-primary hover-brightness',
    minimal: 'social-link border-none bg-transparent hover-brightness',
  };

  return (
    <Link 
      href={href} 
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={ariaLabel}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
} 

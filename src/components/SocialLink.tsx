"use client";

import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'minimal';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function SocialLink({ 
  href, 
  icon, 
  label, 
  ariaLabel, 
  size = 'md', 
  variant = 'default', 
  rounded = 'sm',
  className = ''
}: SocialLinkProps) {
  // Combined class mapping for size and variant
  const classMap = {
    'default-sm': 'social-link interactive-card text-xs py-1 px-2 gap-1',
    'default-md': 'social-link interactive-card text-sm py-2 px-3 gap-2',
    'default-lg': 'social-link interactive-card text-md py-3 px-4 gap-3',
    'outline-sm': 'social-link border border-primary bg-transparent text-primary hover-brightness text-xs py-1 px-2 gap-1',
    'outline-md': 'social-link border border-primary bg-transparent text-primary hover-brightness text-sm py-2 px-3 gap-2',
    'outline-lg': 'social-link border border-primary bg-transparent text-primary hover-brightness text-md py-3 px-4 gap-3',
    'minimal-sm': 'social-link border-none bg-transparent hover-brightness text-xs py-1 px-2 gap-1',
    'minimal-md': 'social-link border-none bg-transparent hover-brightness text-sm py-2 px-3 gap-2',
    'minimal-lg': 'social-link border-none bg-transparent hover-brightness text-md py-3 px-4 gap-3',
  };

  const baseClass = classMap[`${variant}-${size}`] || classMap['default-md'];
  const roundedClass = `rounded-${rounded}`;

  return (
    <Link 
      href={href} 
      className={`${baseClass} ${roundedClass} ${className}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={ariaLabel}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
} 

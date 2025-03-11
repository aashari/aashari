"use client";

import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
}

export default function SocialLink({ href, icon, label, ariaLabel }: SocialLinkProps) {
  return (
    <Link href={href} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </Link>
  );
} 

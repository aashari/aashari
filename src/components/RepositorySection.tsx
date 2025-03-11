import { ReactNode } from "react";
import { HiSparkles } from "react-icons/hi";

interface RepositorySectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  titleSize?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function RepositorySection({
  title,
  icon = <HiSparkles className="icon-primary" />,
  children,
  titleSize = 'sm',
  className = "",
}: RepositorySectionProps) {
  const titleSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`${className}`}>
      <h3 className={`section-title font-bold mb-6 flex items-center gap-2 ${titleSizeClasses[titleSize]}`}>
        {icon}
        {title}
      </h3>
      <div className="space-y-6 grid grid-cols-1">
        {children}
      </div>
    </div>
  );
} 

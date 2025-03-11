import { ReactNode } from "react";
import { HiSparkles } from "react-icons/hi";

interface RepositorySectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  isFirstSection?: boolean;
}

export default function RepositorySection({ 
  title, 
  icon = <HiSparkles className="icon-primary" />, 
  children,
  className = "",
  isFirstSection = false
}: RepositorySectionProps) {
  return (
    <div className={`${isFirstSection ? 'mt-8' : 'mt-20'} ${className}`}>
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="space-y-10">
        {children}
      </div>
    </div>
  );
} 

import { ReactNode } from "react";
import { HiSparkles } from "react-icons/hi";

interface RepositorySectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export default function RepositorySection({
  title,
  icon = <HiSparkles className="icon-primary" />,
  children,
  className = "",
}: RepositorySectionProps) {
  return (
    <div className={`${className}`}>
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="space-y-6 grid grid-cols-1">
        {children}
      </div>
    </div>
  );
} 

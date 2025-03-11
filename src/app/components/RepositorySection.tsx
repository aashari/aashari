import { ReactNode } from "react";
import { HiSparkles } from "react-icons/hi";

interface RepositorySectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function RepositorySection({ title, icon = <HiSparkles className="icon-primary" />, children }: RepositorySectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
} 
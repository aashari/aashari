import Link from "next/link";
import { FaGithub, FaJava } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiGo, SiPython, SiPhp, SiHtml5, SiTerraform } from "react-icons/si";

interface RepositoryProps {
  name: string;
  description: string;
  url: string;
  language: string;
  stars?: number;
  forks?: number;
  topics?: string[];
  isArchived?: boolean;
  isTemplate?: boolean;
  isForked?: boolean;
  license?: string;
  lastUpdated?: string;
  variant?: 'default' | 'compact' | 'detailed';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Repository({
  name,
  description,
  url,
  language,
  topics = [],
  isArchived = false,
  isTemplate = false,
  isForked = false,
  variant = 'default',
  size = 'md',
  rounded = 'md',
  className = '',
}: RepositoryProps) {
  // Function to get language icon
  const getLanguageIcon = (lang: string) => {
    switch (lang.toLowerCase()) {
      case "typescript":
        return <SiTypescript className="text-blue-500" />;
      case "javascript":
        return <SiJavascript className="text-yellow-500" />;
      case "go":
        return <SiGo className="text-blue-400" />;
      case "python":
        return <SiPython className="text-green-500" />;
      case "php":
        return <SiPhp className="text-purple-500" />;
      case "java":
        return <FaJava className="text-red-500" />;
      case "html":
        return <SiHtml5 className="text-orange-500" />;
      case "hcl":
        return <SiTerraform className="text-purple-600" />;
      default:
        return <FaGithub className="text-gray-500 dark:text-gray-400" />;
    }
  };

  // Size-specific styles
  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-5 text-base',
    lg: 'p-6 text-lg',
  };

  // Variant-specific styles
  const variantClasses = {
    default: '',
    compact: 'max-h-40 overflow-hidden',
    detailed: 'h-full',
  };

  // Rounded class
  const roundedClass = `rounded-${rounded}`;

  const badgeClasses = "h-6 flex items-center text-xs px-2 py-1 rounded-md border";

  return (
    <div className={`card interactive-card w-full ${sizeClasses[size]} ${variantClasses[variant]} ${roundedClass} ${className}`}>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold flex items-center">
          <FaGithub className="icon-primary text-lg mr-2.5 dark:text-primary/90" aria-hidden="true" />
          <Link 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground transition-colors focus-outline hover-border-primary"
          >
            {name}
          </Link>
        </h3>
        <div className="flex items-center gap-2">
          {isArchived && (
            <span className={`${badgeClasses} text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600`}>
              Archived
            </span>
          )}
          {isTemplate && (
            <span className={`${badgeClasses} text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800`}>
              Template
            </span>
          )}
          {isForked && (
            <span className={`${badgeClasses} text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800`}>
              Forked
            </span>
          )}
          {language && (
            <span 
              className={`${badgeClasses} text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 flex items-center gap-1`}
              title={`Written in ${language}`}
            >
              {getLanguageIcon(language)}
              <span className="hidden sm:inline">{language}</span>
            </span>
          )}
        </div>
      </div>
      
      <p className="mb-4 text-muted dark:text-gray-300">{description}</p>
      
      <div className="flex flex-wrap gap-1.5">
        {topics && topics.length > 0 ? (
          topics.map((topic, index) => (
            <span 
              key={index} 
              className="text-xs bg-primary/5 text-primary/80 dark:bg-primary/10 dark:text-primary/90 px-2 py-0.5 rounded-full border border-primary/10 dark:border-primary/20"
            >
              {topic}
            </span>
          ))
        ) : (
          <span className="text-xs text-muted">No topics specified</span>
        )}
      </div>
    </div>
  );
} 

import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  layout?: 'block' | 'grid' | 'flex';
  columns?: 1 | 2 | 3 | 4;
  align?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Section({ 
  title, 
  icon, 
  children, 
  id, 
  layout = 'block',
  columns = 1,
  align = 'center',
  spacing = 'md',
  className = ''
}: SectionProps) {
  // Layout-specific classes
  const layoutClasses = {
    block: '',
    grid: `grid grid-cols-1 ${columns > 1 ? `md:grid-cols-${columns}` : ''}`,
    flex: 'flex flex-wrap',
  };
  
  // Alignment classes
  const alignClasses = {
    left: 'text-left justify-start',
    center: 'text-center justify-center',
    right: 'text-right justify-end',
  };
  
  // Spacing classes
  const spacingClasses = {
    sm: 'gap-3',
    md: 'gap-5',
    lg: 'gap-8',
  };

  return (
    <section className={`section ${className}`} id={id}>
      <div className="container mx-auto">
        <h2 className={`text-2xl font-bold mb-6 flex ${alignClasses[align]} items-center gap-2`}>
          {icon}
          {title}
        </h2>
        <div className={`${layoutClasses[layout]} ${spacingClasses[spacing]}`}>
          {children}
        </div>
      </div>
    </section>
  );
} 

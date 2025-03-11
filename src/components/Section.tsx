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
  background?: 'default' | 'primary' | 'muted';
  titleSize?: 'sm' | 'md' | 'lg';
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
  background = 'default',
  titleSize = 'md',
  className = ''
}: SectionProps) {
  // Validate columns value (1-4)
  const validColumns = Math.max(1, Math.min(4, columns));
  if (process.env.NODE_ENV === 'development' && columns !== validColumns) {
    console.warn(`Section columns must be between 1 and 4. Received: ${columns}. Clamped to: ${validColumns}`);
  }

  // Layout-specific classes
  const layoutClasses = {
    block: '',
    grid: `grid grid-cols-1 ${validColumns > 1 ? `md:grid-cols-${validColumns}` : ''}`,
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

  // Title size classes
  const titleSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  // Background class
  const backgroundClass = `bg-${background}`;

  return (
    <section className={`section ${backgroundClass} ${className}`} id={id}>
      <div className="container mx-auto">
        <h2 className={`section-title font-bold mb-6 flex ${alignClasses[align]} items-center gap-2 ${titleSizeClasses[titleSize]}`}>
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

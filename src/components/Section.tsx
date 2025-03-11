import React from 'react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
}

export default function Section({ title, icon, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 flex justify-center items-center gap-2">
          {icon}
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
} 

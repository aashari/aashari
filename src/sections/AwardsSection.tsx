"use client";

import { FaTrophy } from "react-icons/fa";
import Section from "../components/Section";

export default function AwardsSection() {
  return (
    <Section 
      title="Awards" 
      icon={<FaTrophy className="icon-primary mr-2" size={24} />} 
      id="awards"
      titleSize="lg"
    >
      <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card interactive-card w-full">
          <h3 className="section-title text-xl mb-4 flex items-center gap-2"><FaTrophy className="icon-primary" /> Top Team at Ericsson Hackathon</h3>
          <p className="mb-4">Recognized for developing an innovative solution that addressed real-world challenges in telecommunications and connectivity.</p>
        </div>
        <div className="card interactive-card w-full">
          <h3 className="section-title text-xl mb-4 flex items-center gap-2"><FaTrophy className="icon-primary" /> Runner-up at Kurio Hackathon</h3>
          <p className="mb-4">Awarded for creating a cutting-edge news aggregation and personalization system using machine learning algorithms.</p>
        </div>
      </div>
    </Section>
  );
} 

"use client";

import { HiSparkles } from "react-icons/hi";
import { FaBrain, FaGoogle } from "react-icons/fa";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";

export default function ProjectsSection() {
  return (
    <Section title="My Projects" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="projects">
      <div className="space-y-6 grid grid-cols-1">
        <div className="card w-full">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            <FaBrain className="icon-primary" /> 
            Brainy Buddy
          </h3>
          <p className="mb-4">An AI chatbot built with NodeJS, MongoDB, GCP, Terraform, and OpenAI API, serving over 35,000 users on LINE and Telegram with 1,400-1,500 daily active users.</p>
          <ul className="space-y-2">
            <li>Full-stack development with NodeJS and MongoDB</li>
            <li>Integrated OpenAI API for conversational capabilities</li>
            <li>Deployed on GCP using Terraform</li>
            <li>Optimized for high user engagement and performance</li>
          </ul>
          <div className="mt-4">
            <SocialLink href="https://brainybuddy.app" icon={<FaGoogle size={18} />} label="Visit Website" ariaLabel="Visit Brainy Buddy website" />
          </div>
        </div>
      </div>
    </Section>
  );
} 

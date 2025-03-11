"use client";

import { HiSparkles } from "react-icons/hi";
import Section from "../components/Section";
import Repository from "../components/Repository";

export default function ProjectsSection() {
  return (
    <Section 
      title="My Projects" 
      icon={<HiSparkles className="icon-primary mr-2" size={24} />} 
      id="projects"
      layout="grid"
      columns={3}
      spacing="lg"
      titleSize="lg"
      className="py-16"
    >
      <Repository
        name="Brainy Buddy"
        description="An AI chatbot built with NodeJS, MongoDB, GCP, Terraform, and OpenAI API, serving over 35,000 users on LINE and Telegram with 1,400-1,500 daily active users."
        url="https://brainybuddy.app"
        language="typescript"
        topics={["ai", "chatbot", "cloud", "nodejs", "mongodb", "gcp", "terraform", "openai"]}
        variant="detailed"
        size="md"
      />
    </Section>
  );
} 

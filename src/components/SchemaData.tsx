"use client";

import Script from "next/script";

export default function SchemaData() {
  // JSON-LD structured data for Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andi Ashari",
    "jobTitle": "AI Operations and Engineering Expert",
    "description": "Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions.",
    "image": "https://andi.ltd/profile.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/aashari/",
      "https://github.com/aashari",
      "https://twitter.com/antd1_",
      "https://www.instagram.com/ant.dhe/",
      "https://medium.com/@aashari",
      "https://scholar.google.co.id/citations?user=bLmnPS8AAAAJ&hl=en"
    ],
    "knowsAbout": [
      "AI Operations",
      "Cloud Engineering",
      "Terraform",
      "TypeScript",
      "Golang",
      "Python",
      "Bash"
    ],
    "url": "https://andi.ltd",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "Indonesia"
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
} 

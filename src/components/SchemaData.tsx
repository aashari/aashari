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

  // JSON-LD structured data for Brainy Buddy project
  const brainyBuddySchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Brainy Buddy",
    "description": "An AI chatbot built with NodeJS, MongoDB, GCP, Terraform, and OpenAI API, serving over 35,000 users on LINE and Telegram.",
    "applicationCategory": "Communication",
    "operatingSystem": "Any",
    "url": "https://brainybuddy.app",
    "creator": {
      "@type": "Person",
      "name": "Andi Ashari"
    }
  };

  // JSON-LD structured data for publications
  const publicationSchema1 = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "A Design of Crowd-Based Corruption Prevention System in Indonesia",
    "author": {
      "@type": "Person",
      "name": "Andi Ashari"
    },
    "datePublished": "2019-08-01",
    "publisher": {
      "@type": "Organization",
      "name": "IEEE"
    },
    "url": "https://ieeexplore.ieee.org/document/8843748"
  };

  const publicationSchema2 = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Development of a Web Based Corruption Case Mapping Using Machine Learning",
    "author": {
      "@type": "Person",
      "name": "Andi Ashari"
    },
    "datePublished": "2018-11-01",
    "publisher": {
      "@type": "Organization",
      "name": "IEEE"
    },
    "url": "https://ieeexplore.ieee.org/document/8528142"
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-brainy-buddy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brainyBuddySchema) }}
      />
      <Script
        id="schema-publication-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema1) }}
      />
      <Script
        id="schema-publication-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema2) }}
      />
    </>
  );
} 

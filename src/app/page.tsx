"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaTerminal, FaBrain, FaGoogle, FaFilm, FaBook, FaTrophy, FaGraduationCap, FaCode, FaServer, FaRobot, FaCloud, FaDatabase } from "react-icons/fa";
import { SiMedium, SiTerraform, SiTypescript, SiGo, SiPython } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import Script from "next/script";
import Section from "./components/Section";
import ThemeToggle from "./components/ThemeToggle";
import Repository from "./components/Repository";
import RepositorySection from "./components/RepositorySection";
import { useEffect } from "react";

export default function Home() {
  // Effect to handle scroll events
  useEffect(() => {
    // Any other scroll-related functionality can go here
  }, []);

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

  // Repository data with improved SEO descriptions
  const repositories = {
    aiAndAutomation: [
      {
        name: "nodejs-geocoding",
        description: "A lightweight TypeScript/Node.js library for geocoding and reverse geocoding operations. Convert between addresses and coordinates (latitude/longitude) with precision and efficiency. Built with TypeScript for type safety and zero external dependencies for minimal footprint.",
        url: "https://github.com/aashari/nodejs-geocoding",
        language: "TypeScript",
        stars: 1,
        topics: ["nodejs", "javascript", "npm", "typescript", "geocoding", "maps", "google-maps"],
        license: "MIT License",
        lastUpdated: "Updated recently"
      },
      {
        name: "rag-browser",
        description: "A powerful browser automation tool designed for both humans and AI workflows. Built with Playwright and optimized for Bun runtime, it supports CLI and MCP Server modes for comprehensive webpage analysis and automation tasks. Perfect for RAG (Retrieval-Augmented Generation) systems.",
        url: "https://github.com/aashari/rag-browser",
        language: "TypeScript",
        stars: 1,
        forks: 1,
        topics: ["cli", "typescript", "mcp", "web-scraping", "browser-automation", "bun", "web-automation"],
        lastUpdated: "Updated 2 days ago"
      },
      {
        name: "rag-aws-ssm",
        description: "A specialized utility for executing shell commands and transferring files to AWS EC2 instances via Systems Manager (SSM). Features enhanced output formatting and is part of the RAG tool suite. Streamlines DevOps workflows and remote server management.",
        url: "https://github.com/aashari/rag-aws-ssm",
        language: "TypeScript",
        topics: ["devops", "automation", "typescript", "file-transfer", "aws-ec2", "aws-ssm", "bun"],
        lastUpdated: "Updated last week"
      },
      {
        name: "indodax-api-wrapper",
        description: "A comprehensive JavaScript wrapper for both public and private Indodax cryptocurrency exchange APIs. Simplifies trading automation and market data retrieval for the Indonesian digital asset marketplace.",
        url: "https://github.com/aashari/indodax-api-wrapper",
        language: "JavaScript",
        forks: 2,
        lastUpdated: "Updated on Jan 6, 2024"
      },
      {
        name: "cyrpto-coin-scraper",
        description: "A JavaScript-based cryptocurrency data scraper for collecting and analyzing market information from various sources. Useful for market research and trading strategy development.",
        url: "https://github.com/aashari/cyrpto-coin-scraper",
        language: "JavaScript",
        stars: 3,
        forks: 2,
        isArchived: true,
        lastUpdated: "Updated on May 26, 2021"
      }
    ],
    cloudInfrastructure: [
      {
        name: "terraform-gcp-cloud-run",
        description: "A comprehensive Terraform module for deploying and managing Google Cloud Run services with advanced configuration options. Automates container deployment, service accounts, IAM permissions, and networking setup for containerized applications on Google Cloud.",
        url: "https://github.com/aashari/terraform-gcp-cloud-run",
        language: "HCL",
        forks: 1,
        topics: ["devops", "serverless", "terraform", "container", "gcp", "google-cloud", "infrastructure-as-code"],
        license: "MIT License",
        lastUpdated: "Updated recently"
      },
      {
        name: "terraform-aws-static-website",
        description: "A production-ready Terraform module to provision static websites using AWS S3 and CloudFront with custom domain support. Features CloudFront Functions, access logs, URL redirection, and compatibility with both Route53 and Cloudflare DNS.",
        url: "https://github.com/aashari/terraform-aws-static-website",
        language: "HCL",
        stars: 7,
        forks: 6,
        topics: ["aws", "terraform", "terraform-modules"],
        license: "Apache License 2.0",
        lastUpdated: "Updated on Sep 25, 2024"
      },
      {
        name: "terraform-sample-bg-ecs",
        description: "A comprehensive Terraform example demonstrating the end-to-end process of Blue/Green deployment using Amazon ECS and CodeDeploy. Includes infrastructure setup, CI/CD pipeline configuration, and deployment strategies for zero-downtime updates.",
        url: "https://github.com/aashari/terraform-sample-bg-ecs",
        language: "HCL",
        topics: ["aws", "terraform", "ecs", "codedeploy", "ecs-fargate", "bluegreen-deployment"],
        lastUpdated: "Updated on Sep 24, 2024"
      },
      {
        name: "boilerplate-kubernetes",
        description: "A production-grade boilerplate for deploying applications to Google Kubernetes Engine (GKE) using Terraform and GitHub Actions. Includes example applications in Go and Node.js with complete CI/CD pipeline setup and Kubernetes resource configurations.",
        url: "https://github.com/aashari/boilerplate-kubernetes",
        language: "HCL",
        stars: 2,
        license: "MIT License",
        lastUpdated: "Updated on Mar 29, 2024"
      }
    ],
    boilerplatesAndTemplates: [
      {
        name: "boilerplate-rest-api-bun",
        description: "A modern boilerplate for building high-performance REST APIs using the Bun runtime and Elysia framework. Features MongoDB integration with Mongoose, Docker containerization, and structured project organization for rapid API development.",
        url: "https://github.com/aashari/boilerplate-rest-api-bun",
        language: "TypeScript",
        stars: 4,
        forks: 2,
        topics: ["api", "docker", "boilerplate", "typescript", "mongodb", "mongoose", "rest-api"],
        lastUpdated: "Updated last week"
      },
      {
        name: "boilerplate-lambda-typescript",
        description: "A comprehensive boilerplate for AWS Lambda projects using TypeScript with Terraform infrastructure as code. Includes AWS Secrets Manager integration, DynamoDB connectivity, and Datadog metrics for observability in serverless applications.",
        url: "https://github.com/aashari/boilerplate-lambda-typescript",
        language: "TypeScript",
        stars: 23,
        forks: 3,
        isTemplate: true,
        topics: ["aws", "boilerplate", "lambda", "typescript", "aws-lambda", "serverless", "functional-programming"],
        lastUpdated: "Updated on Jun 13, 2023"
      },
      {
        name: "lambda-nodejs-starter",
        description: "A starter template for AWS Lambda functions using Node.js. Provides the essential structure and configurations for serverless function development with JavaScript.",
        url: "https://github.com/aashari/lambda-nodejs-starter",
        language: "JavaScript",
        forks: 9,
        isArchived: true,
        lastUpdated: "Updated on Dec 2, 2018"
      },
      {
        name: "simple-php-mvc",
        description: "A lightweight PHP MVC boilerplate with a clean directory structure for small to medium-sized web projects. Designed for simplicity and ease of use while maintaining good separation of concerns.",
        url: "https://github.com/aashari/simple-php-mvc",
        language: "PHP",
        isArchived: true,
        lastUpdated: "Updated on Mar 10, 2018"
      }
    ],
    mobileAndDesktop: [
      {
        name: "android-opencv-camera-scanner",
        description: "A robust implementation of Android OpenCV for document scanning applications. Features edge detection, perspective correction, and image enhancement for creating high-quality document scans using a mobile camera.",
        url: "https://github.com/aashari/android-opencv-camera-scanner",
        language: "Java",
        stars: 109,
        forks: 54,
        isArchived: true,
        lastUpdated: "Updated on Jun 10, 2020"
      },
      {
        name: "mi-band-2",
        description: "An Android application demonstrating how to interact with Xiaomi Mi Band 2 wearable devices. Includes Bluetooth communication, data synchronization, and sensor data processing for fitness tracking applications.",
        url: "https://github.com/aashari/mi-band-2",
        language: "Java",
        stars: 107,
        forks: 43,
        isArchived: true,
        license: "MIT License",
        lastUpdated: "Updated on Jan 5, 2019"
      },
      {
        name: "android-simple-line-drawer",
        description: "A lightweight Android implementation for drawing lines over image views. Useful for annotation, measurement, and highlighting features in images within mobile applications.",
        url: "https://github.com/aashari/android-simple-line-drawer",
        language: "Java",
        stars: 1,
        isArchived: true,
        lastUpdated: "Updated on May 16, 2018"
      },
      {
        name: "android-opencv-rectangle-detector",
        description: "An Android implementation of OpenCV for real-time rectangle detection in camera feeds. Ideal for document scanning, augmented reality markers, and object recognition applications.",
        url: "https://github.com/aashari/android-opencv-rectangle-detector",
        language: "Java",
        stars: 12,
        forks: 6,
        isArchived: true,
        lastUpdated: "Updated on Apr 15, 2018"
      }
    ],
    dataAndMachineLearning: [
      {
        name: "parquetjs",
        description: "A fully asynchronous, pure JavaScript implementation of the Apache Parquet file format. Enables efficient columnar storage for big data applications in JavaScript environments.",
        url: "https://github.com/aashari/parquetjs",
        language: "JavaScript",
        isForked: true,
        license: "MIT License",
        lastUpdated: "Updated on Jun 24, 2022"
      },
      {
        name: "tax-calculator",
        description: "An example REST API built with Golang for tax calculation services. Demonstrates clean architecture, efficient algorithms, and RESTful design principles for financial applications.",
        url: "https://github.com/aashari/tax-calculator",
        language: "Go",
        isArchived: true,
        lastUpdated: "Updated on Jan 29, 2019"
      },
      {
        name: "research-naive-bayes-classification",
        description: "Implementation of Naive Bayes Classification based on academic research, featuring text processing methods like stemming and N-gram analysis. Built with native PHP and Composer for dependency management.",
        url: "https://github.com/aashari/research-naive-bayes-classification",
        language: "PHP",
        stars: 1,
        isArchived: true,
        lastUpdated: "Updated on Apr 7, 2018"
      },
      {
        name: "naive-bayes-classifier",
        description: "A PHP implementation of the Naive Bayes classifier for probabilistic text classification. Applies Bayes' theorem with independence assumptions between features for efficient categorization.",
        url: "https://github.com/aashari/naive-bayes-classifier",
        language: "PHP",
        stars: 1,
        forks: 1,
        isArchived: true,
        license: "MIT License",
        lastUpdated: "Updated on Feb 4, 2018"
      },
      {
        name: "artificial-neural-network",
        description: "A Python implementation of Artificial Neural Networks for text classification using the Backpropagation algorithm. Demonstrates fundamental concepts in neural network design and training for NLP tasks.",
        url: "https://github.com/aashari/artificial-neural-network",
        language: "Python",
        stars: 1,
        isArchived: true,
        lastUpdated: "Updated on Feb 4, 2018"
      },
      {
        name: "geo-database-csv",
        description: "A comprehensive collection of geographical data in CSV format sourced from official government sites. Includes countries, subdivisions, postal codes, FIPS codes, and continent information for geospatial applications.",
        url: "https://github.com/aashari/geo-database-csv",
        language: "CSV",
        stars: 1,
        forks: 2,
        isArchived: true,
        topics: ["csv", "countries", "fips", "postal", "subdivision", "continent", "geo-database-csv"],
        lastUpdated: "Updated on May 26, 2015"
      }
    ],
    webDevelopment: [
      {
        name: "jwt-native-php",
        description: "A straightforward implementation of JSON Web Tokens (JWT) using native PHP, jQuery, and the firebase/php-jwt package. Demonstrates secure authentication flows for web applications without heavy frameworks.",
        url: "https://github.com/aashari/jwt-native-php",
        language: "HTML",
        stars: 5,
        forks: 3,
        isArchived: true,
        lastUpdated: "Updated on Apr 13, 2017"
      },
      {
        name: "php-facebook-bot-messenger",
        description: "A lightweight PHP class for building Facebook Messenger bots. Enables sending and receiving messages through Facebook's Messenger Platform with minimal code and dependencies.",
        url: "https://github.com/aashari/php-facebook-bot-messenger",
        language: "PHP",
        stars: 2,
        isArchived: true,
        topics: ["php", "facebook", "messenger"],
        license: "MIT License",
        lastUpdated: "Updated on Apr 5, 2017"
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <ThemeToggle />
      
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

      {/* Hero Section */}
      <section className="section mt-14" id="hero">
        <div className="container text-center mx-auto">
          <Image 
            src="/profile.jpeg" 
            alt="Profile photo of Andi Ashari, AI Operations Expert" 
            width={150} 
            height={150} 
            className="profile-image mx-auto mb-8 shadow-lg shadow-[rgba(74,144,226,0.3)]" 
            priority 
          />
          <h1 className="text-4xl font-bold text-primary mb-6 justify-center">Andi Ashari</h1>
          <p className="text-lg text-muted mb-4">
            Tech Wanderer | AI Operations & Engineering | Cloud Innovator
          </p>
          <p className="text-md mb-10 max-w-prose mx-auto">
            Based in Indonesia, I&apos;m a Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions. Explore my work in cloud infrastructure and sci-fi-inspired innovation, or <Link href="#contact" className="text-primary underline">connect with me</Link> to discuss opportunities.
          </p>
          <div className="mb-10">
            <Link href="#projects" className="button">
              View My Projects
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-10">
            <SocialLink href="https://www.linkedin.com/in/aashari/" icon={<FaLinkedin size={24} />} label="LinkedIn" ariaLabel="Visit Andi Ashari's LinkedIn profile" />
            <SocialLink href="https://www.instagram.com/ant.dhe/" icon={<FaInstagram size={24} />} label="Instagram" ariaLabel="Visit Andi Ashari's Instagram profile" />
            <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={24} />} label="Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
            <SocialLink href="mailto:a.ashari1302@gmail.com" icon={<FaEnvelope size={24} />} label="Email" ariaLabel="Send an email to Andi Ashari" />
            <SocialLink href="https://github.com/aashari" icon={<FaGithub size={24} />} label="GitHub" ariaLabel="View Andi Ashari's projects on GitHub" />
            <SocialLink href="https://scholar.google.co.id/citations?user=bLmnPS8AAAAJ&hl=en" icon={<FaGraduationCap size={24} />} label="Scholar" ariaLabel="View Andi Ashari's Google Scholar profile" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section title="Who I Am" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="about">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4">Professional Focus</h3>
            <ul className="space-y-2">
              <li>Role: AI Operations and Engineering</li>
              <li>Expertise: Cloud infrastructure, automation, and scalable AI solutions</li>
              <li>Mission: Building scalable, AI-driven systems to revolutionize the digital landscape.</li>
            </ul>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaFilm className="icon-primary" /> Fun Facts</h3>
            <ul className="space-y-2">
              <li>Sci-Fi Obsession: I draw inspiration from sci-fi universes like Interstellar—its blend of space, tech, and human emotion fuels my innovative thinking in tech.</li>
              <li>Coffee Fuel: I&apos;ve lost count of my daily cups, but coffee keeps me coding!</li>
              <li>Next Adventure: Diving deeper into AI-powered infrastructure to build the future.</li>
            </ul>
          </div>
          <div className="w-full mt-8 flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              <TechBadge label="Terraform" icon={<SiTerraform size={20} />} ariaLabel="Skilled in Terraform" />
              <TechBadge label="TypeScript" icon={<SiTypescript size={20} />} ariaLabel="Skilled in TypeScript" />
              <TechBadge label="Golang" icon={<SiGo size={20} />} ariaLabel="Skilled in Golang" />
              <TechBadge label="Python" icon={<SiPython size={20} />} ariaLabel="Skilled in Python" />
              <TechBadge label="Bash" icon={<FaTerminal size={20} />} ariaLabel="Skilled in Bash" />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="My Projects" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="projects">
        <div className="space-y-10">
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

      {/* GitHub Repositories Section */}
      <Section title="GitHub Repositories" icon={<FaGithub className="icon-primary mr-2" size={24} />} id="repositories">
        <p className="mb-8">
          Explore my open-source projects and contributions across various technologies and domains. 
          From cloud infrastructure and AI tools to boilerplates and research implementations.
        </p>
        
        <RepositorySection 
          title="AI & Automation" 
          icon={<FaRobot className="icon-primary" />}
        >
          {repositories.aiAndAutomation.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </RepositorySection>
        
        <RepositorySection 
          title="Cloud Infrastructure" 
          icon={<FaCloud className="icon-primary" />}
        >
          {repositories.cloudInfrastructure.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </RepositorySection>
        
        <RepositorySection 
          title="Boilerplates & Templates" 
          icon={<FaCode className="icon-primary" />}
        >
          {repositories.boilerplatesAndTemplates.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </RepositorySection>
        
        <RepositorySection 
          title="Mobile & Desktop Applications" 
          icon={<FaServer className="icon-primary" />}
        >
          {repositories.mobileAndDesktop.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </RepositorySection>
        
        <RepositorySection 
          title="Data & Machine Learning" 
          icon={<FaDatabase className="icon-primary" />}
        >
          {repositories.dataAndMachineLearning.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </RepositorySection>
        
        <RepositorySection 
          title="Web Development" 
          icon={<FaCode className="icon-primary" />}
        >
          {repositories.webDevelopment.map((repo, index) => (
            <Repository key={index} {...repo} />
          ))}
        </RepositorySection>
      </Section>

      {/* Publications Section */}
      <Section title="Publications" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="publications">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> A Design of Crowd-Based Corruption Prevention System in Indonesia</h3>
            <p className="mb-4">2019 International Conference on Information Management and Technology (ICIMTech) · Aug 1, 2019</p>
            <p className="mb-4">Combatting corruption requires not only centralized and institution-based strategy, but must be met with distributive effort supported by abundance of data and technological advancement. This work tackles the issue of decentralized corruption prevention by describing the method of doing heuristic analysis based on multiple data regarding corruption.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8843839" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read A Design of Crowd-Based Corruption Prevention System in Indonesia" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Systematic literature review on corruption prevention efforts towards sustainable economy in Indonesia</h3>
            <p className="mb-4">IOP Conference Series: Earth and Environmental Science · Dec 14, 2018</p>
            <p className="mb-4">Corruption is an extraordinary crime and must be eradicated not only as fast as possible, but also as efficient and as effective as possible as it hinders the process of achieving sustainable economy. In current modern society, information technology exists as a multidisciplinary tool to solve lingering problems that could not be solved by traditional efforts.</p>
            <div className="mt-4">
              <SocialLink href="https://iopscience.iop.org/article/10.1088/1755-1315/195/1/012051" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Systematic literature review on corruption prevention efforts towards sustainable economy in Indonesia" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Development of a Web Based Corruption Case Mapping Using Machine Learning with Artificial Neural Network</h3>
            <p className="mb-4">2018 International Conference on Information Management and Technology (ICIMTech) · Sep 1, 2018</p>
            <p className="mb-4">This work focuses on the development of a web application aimed to provide insight to corruption case per province in Indonesia. The web application was developed using Machine Learning, specifically Backpropagation Artificial Neural Network (ANN). Web crawling and web scraping techniques are used to gather news content from 7 major news portal in Indonesia.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8528150" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Development of a Web Based Corruption Case Mapping Using Machine Learning with Artificial Neural Network" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Indonesian teacher engagement index (ITEI): Decision support system for education</h3>
            <p className="mb-4">2017 5th International Conference on Cyber and IT Service Management (CITSM) · Aug 1, 2017</p>
            <p className="mb-4">Indonesian Teacher Engagement Index (ITEI) is an instrument designed to help teachers to detect themselves through self diagnostic. The results of self-diagnostic is then systemally developed with the goal of becoming a decision support system for the central government to the areas in the field of education.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8089321" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Indonesian teacher engagement index (ITEI): Decision support system for education" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Corruption Cases Mapping Based on Indonesia&apos;s Corruption Perception Index</h3>
            <p className="mb-4">Journal of Physics: Conference Series · Jan 1, 2017</p>
            <p className="mb-4">Government plays an important role in nation economic growth. Nevertheless, there are still many occurrences of government officers abusing their offices to do an act of corruption. To develop the mapping system, researchers use Naïve Bayes Classifier to classify which news articles talk about corruption and which news articles are not.</p>
            <div className="mt-4">
              <SocialLink href="http://iopscience.iop.org/article/10.1088/1742-6596/801/1/012019" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Corruption Cases Mapping Based on Indonesia&apos;s Corruption Perception Index" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Corruption Early Prevention: Decision Support System for President of the Republic of Indonesia</h3>
            <p className="mb-4">Journal of Physics: Conference Series · Jan 1, 2017</p>
            <p className="mb-4">Corruption is an extraordinary crime, and then the prevention must also be extraordinary, simultaneously (national) in the form of early warning that involves all elements; government, industry, and society. To realize it the system needs to be built which in this study is called the Corruption Early Prevention (CEP) as a Decision Support System for President of the Republic of Indonesia.</p>
            <div className="mt-4">
              <SocialLink href="http://iopscience.iop.org/article/10.1088/1742-6596/801/1/012028" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Corruption Early Prevention: Decision Support System for President of the Republic of Indonesia" />
            </div>
          </div>
        </div>
      </Section>

      {/* Awards Section */}
      <Section title="Awards" icon={<FaTrophy className="icon-primary mr-2" size={24} />} id="awards">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaTrophy className="icon-primary" /> Top Team at Ericsson Hackathon</h3>
            <p className="mb-4">Recognized for developing an innovative solution that addressed real-world challenges in telecommunications and connectivity.</p>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaTrophy className="icon-primary" /> Runner-up at Kurio Hackathon</h3>
            <p className="mb-4">Awarded for creating a cutting-edge news aggregation and personalization system using machine learning algorithms.</p>
          </div>
        </div>
      </Section>

      {/* Recent Articles Section */}
      <Section title="Recent Articles" icon={<SiMedium className="icon-primary mr-2" size={24} />} id="articles">
        <div className="space-y-10">
          <div className="card w-full text-center">
            <p className="mb-4">I share insights on AI, cloud engineering, and technology innovation on Medium. Check out my latest articles!</p>
            <div className="mt-4">
              <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={18} />} label="Read on Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let&apos;s Connect" icon={<FaEnvelope className="icon-primary mr-2" size={24} />}>
        <p className="mb-6">
          I&apos;m always open to discussing new projects, opportunities, or collaborations. Based in Jakarta, Indonesia, I&apos;d love to hear from you—feel free to reach out!
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-6">
          <SocialLink href="https://www.linkedin.com/in/aashari/" icon={<FaLinkedin size={24} />} label="LinkedIn" ariaLabel="Visit Andi Ashari's LinkedIn profile" />
          <SocialLink href="https://github.com/aashari" icon={<FaGithub size={24} />} label="GitHub" ariaLabel="Visit Andi Ashari's GitHub profile" />
          <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={24} />} label="Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
          <SocialLink href="mailto:a.ashari1302@gmail.com" icon={<FaEnvelope size={24} />} label="Email" ariaLabel="Send an email to Andi Ashari" />
        </div>
      </Section>

      {/* Footer */}
      <footer className="container mx-auto text-center">
        <p className="text-sm text-muted max-w-prose mx-auto py-xl">
          © {new Date().getFullYear()} Andi Ashari. All rights reserved.
          <br className="my-2" />
          <i>&quot;Innovation distinguishes between a leader and a follower.&quot; – Steve Jobs</i>
        </p>
      </footer>
    </main>
  );
}

// Components
function SocialLink({ href, icon, label, ariaLabel }: { href: string; icon: React.ReactNode; label: string; ariaLabel: string }) {
  return (
    <Link href={href} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function TechBadge({ label, icon, ariaLabel }: { label: string; icon: React.ReactNode; ariaLabel: string }) {
  return (
    <div className="tech-badge" role="img" aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

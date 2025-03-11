"use client";

import { FaGithub, FaRobot, FaCloud, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import Section from "../components/Section";
import Repository from "../components/Repository";
import RepositorySection from "../components/RepositorySection";

interface RepositoryType {
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
}

interface RepositoriesGroupType {
  aiAndAutomation: RepositoryType[];
  cloudInfrastructure: RepositoryType[];
  boilerplatesAndTemplates: RepositoryType[];
  mobileAndDesktop: RepositoryType[];
  dataAndMachineLearning: RepositoryType[];
  webDevelopment: RepositoryType[];
}

export default function RepositoriesSection() {
  // Repository data with improved SEO descriptions
  const repositories: RepositoriesGroupType = {
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
    <Section title="GitHub Repositories" icon={<FaGithub className="icon-primary mr-2" size={24} />} id="repositories">
      <p className="mb-8">
        Explore my open-source projects and contributions across various technologies and domains. 
        From cloud infrastructure and AI tools to boilerplates and research implementations.
      </p>
      
      <RepositorySection 
        title="AI & Automation" 
        icon={<FaRobot className="icon-primary" />}
        isFirstSection={true}
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
  );
} 

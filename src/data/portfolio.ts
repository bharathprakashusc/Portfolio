import {
  SiPython, SiCplusplus, SiJavascript, SiReact, SiSpringboot,
  SiPytorch, SiTensorflow, SiGooglecloud,
  SiMysql, SiPostgresql, SiApachehadoop, SiDocker, SiGit,
  SiHtml5, SiR, SiQualcomm, SiRedis, SiKubernetes,
} from 'react-icons/si';
import { FaDatabase, FaBrain, FaCode, FaServer, FaJava, FaAws, FaMicrosoft, FaCss3Alt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  label: string;
  categoryIcon: IconType;
  color: string;
  skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  accentColor: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
  accentColor: string;
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Programming Languages',
    categoryIcon: FaCode,
    color: '#00d4ff',
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'C++', icon: SiCplusplus, color: '#00599c' },
      { name: 'Java', icon: FaJava, color: '#ed8b00' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'ReactJS', icon: SiReact, color: '#61dafb' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'R', icon: SiR, color: '#276dc3' },
    ],
  },
  {
    label: 'AI / ML',
    categoryIcon: FaBrain,
    color: '#8b5cf6',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, color: '#ee4c2c' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#ff6f00' },
      { name: 'RAG Pipeline', icon: FaBrain, color: '#00d4ff' },
      { name: 'LangGraph', icon: FaBrain, color: '#a78bfa' },
      { name: 'Computer Vision', icon: FaBrain, color: '#8b5cf6' },
      { name: 'NLP', icon: FaBrain, color: '#06b6d4' },
      { name: 'Deep Learning', icon: FaBrain, color: '#a78bfa' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    categoryIcon: FaServer,
    color: '#f97316',
    skills: [
      { name: 'Azure', icon: FaMicrosoft, color: '#0089d6' },
      { name: 'AWS', icon: FaAws, color: '#ff9900' },
      { name: 'GCP', icon: SiGooglecloud, color: '#4285f4' },
      { name: 'Docker', icon: SiDocker, color: '#2496ed' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
      { name: 'Git', icon: SiGit, color: '#f05032' },
      { name: 'Redis', icon: SiRedis, color: '#dc382d' },
      { name: 'Distributed Systems', icon: FaServer, color: '#94a3b8' },
    ],
  },
  {
    label: 'Data Engineering',
    categoryIcon: FaDatabase,
    color: '#10b981',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'Apache Spark', icon: FaDatabase, color: '#e25a1c' },
      { name: 'PowerBI', icon: FaDatabase, color: '#f2c811' },
      { name: 'Hadoop', icon: SiApachehadoop, color: '#66ccff' },
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'Computer Age Management Services (CAMS)',
    role: 'Software Development Engineer - AI / ML',
    period: 'Jul 2024 - Dec 2024',
    location: 'Chennai, India',
    accentColor: '#00d4ff',
    bullets: [
      'Automated labor-intensive tasks using NLP-based AI/ML solutions, achieving over 95% process efficiency',
      'Designed a face-matching pipeline for a major bank incorporating face extraction, landmark localization, quality enhancement, and feature extraction to improve identity verification',
      'Developed an end-to-end stock market trading platform as a Java full-stack developer with backend, database, and API integration',
    ],
  },
  {
    company: 'Qualcomm',
    role: 'Wireless Communication Engineering Intern',
    period: 'May 2023 - Jul 2023',
    location: 'Hyderabad, India',
    accentColor: '#8b5cf6',
    bullets: [
      'Implemented C++ software enhancements and developed autonomous signal synchronization and validation tools',
      'Streamlined testing workflows and improved efficiency and reliability of modem communication systems',
    ],
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  githubUrl: string;
  liveUrl?: string;
  icon: string;
}

export const projects: ProjectItem[] = [
  {
    title: 'Conversational AI Agent for Data Analysis',
    description:
      'An AI-powered data analysis tool that lets users upload any CSV and ask natural-language questions, powered by a RAG pipeline and LangGraph agentic loop with full observability.',
    bullets: [
      'RAG pipeline understands dataset schema; LangGraph agent generates, executes, and auto-recovers Pandas code',
      'MCP servers enable live web enrichment, Notion report exports, and Google Sheets ingestion',
      'Deployed on Azure Container Apps with Docker + GitHub Actions CI/CD; Langfuse + RAGAS eval framework wired end-to-end',
    ],
    tags: ['Python', 'LangGraph', 'RAG', 'MCP Server', 'Azure', 'Docker', 'Langfuse', 'RAGAS'],
    accentColor: '#00d4ff',
    gradientFrom: '#00d4ff',
    gradientTo: '#3b82f6',
    githubUrl: 'https://github.com/bharathprakashusc/dataset-rag-chatbot',
    liveUrl: 'https://csv-analysis-agent.orangeriver-6e4121e1.eastus.azurecontainerapps.io',
    icon: '🤖',
  },
  {
    title: 'GeoGuessr AI - Geolocation from Street View',
    description:
      'A multimodal AI system that analyzes street view images to predict geographic coordinates across 100+ countries using Claude Vision API and a structured country knowledge base.',
    bullets: [
      'Real-time SSE streaming pipeline delivers model reasoning token-by-token to the browser',
      'Dual-backend: local inference via Ollama and cloud inference via Claude Vision API with runtime switching',
      'Knowledge base of 100+ country visual identifiers injected as prompt context; Leaflet.js map for visualization',
    ],
    tags: ['FastAPI', 'Claude Vision API', 'Computer Vision', 'SSE', 'Ollama', 'Leaflet.js', 'Python'],
    accentColor: '#10b981',
    gradientFrom: '#10b981',
    gradientTo: '#06b6d4',
    githubUrl: 'https://github.com/bharathprakashusc/geoguessr-ai',
    icon: '🌍',
  },
  {
    title: 'HelpBridge - Anonymous Support Chat',
    description:
      'A real-time anonymous peer support platform connecting people seeking help with trained volunteers, built on a full-stack TypeScript monorepo and deployed on Railway.',
    bullets: [
      'Socket.io-powered real-time chat with session matching, anonymous identity generation, and category routing',
      'Turborepo monorepo with shared types/schemas packages, Express + Prisma backend, PostgreSQL + Redis',
      'Fully containerized with Docker; live at helpbridge-production-ebfd.up.railway.app',
    ],
    tags: ['TypeScript', 'Node.js', 'Socket.io', 'Prisma', 'PostgreSQL', 'Redis', 'Docker', 'Railway'],
    accentColor: '#8b5cf6',
    gradientFrom: '#8b5cf6',
    gradientTo: '#ec4899',
    githubUrl: 'https://github.com/bharathprakashusc/helpbridge',
    liveUrl: 'https://helpbridge-ten.vercel.app',
    icon: '🤝',
  },
];

export const education: EducationItem[] = [
  {
    institution: 'University of Southern California',
    degree: 'M.S. in Applied Data Science',
    period: 'Jan 2025 - Dec 2026',
    gpa: '3.82 / 4.0',
    location: 'Los Angeles, CA',
    accentColor: '#c4112f',
  },
  {
    institution: 'IIT Kharagpur',
    degree: 'B.Tech + M.Tech in ECE & Vision and Intelligent Systems',
    period: 'Jul 2019 - May 2024',
    gpa: '8.65 / 10',
    location: 'Kharagpur, India',
    accentColor: '#fbbf24',
  },
];

export { SiQualcomm };

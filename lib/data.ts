// lib/data.ts — All portfolio content for Aum Patel

export const personalInfo = {
  name: 'Aum Patel',
  role: 'Aspiring Data Analyst',
  tagline: 'Transforming Raw Data into Actionable Insights',
  location: 'Gujarat, India',
  email: 'aumpatel.analytics@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aum-patel-573269393/',
  github: 'https://github.com/aum-patel14',
  availableFor: ['Data Analyst Intern', 'Junior Data Analyst', 'Analytics Associate', 'QA & Data Specialist'],
}

export const heroStats = [
  { value: '2', label: 'Core Projects' },
  { value: '1.5', label: 'Years Experience' },
  { value: '10+', label: 'Tools Mastered' },
  { value: '1K+', label: 'Lines of SQL' },
]

export const typewriterRoles = [
  'Data Analyst',
  'Python Developer',
  'Dashboard Builder',
  'SQL Enthusiast',
  'QA & Analytics Specialist',
  'BI Developer',
]

export interface Skill {
  name: string
  icon: string
  percent: number
  category: 'languages' | 'visualization' | 'analytics' | 'tools'
  color: string
}

export const skills: Skill[] = [
  { name: 'Java', icon: 'coffee', percent: 80, category: 'languages', color: '#ea580c' },
  { name: 'Python', icon: 'code', percent: 86, category: 'languages', color: '#3b82f6' },
  { name: 'SQL', icon: 'database', percent: 88, category: 'languages', color: '#8b5cf6' },
  { name: 'Excel', icon: 'table', percent: 90, category: 'tools', color: '#22c55e' },
  { name: 'Pandas', icon: 'layers', percent: 85, category: 'analytics', color: '#06b6d4' },
  { name: 'Power BI', icon: 'bar-chart', percent: 82, category: 'visualization', color: '#f59e0b' },
  { name: 'NumPy', icon: 'cpu', percent: 78, category: 'analytics', color: '#a78bfa' },
  { name: 'C', icon: 'terminal', percent: 75, category: 'languages', color: '#64748b' },
  { name: 'C++', icon: 'braces', percent: 78, category: 'languages', color: '#2563eb' },
  { name: 'MERN Stack', icon: 'globe', percent: 84, category: 'tools', color: '#10b981' },
]

export const skillCategories = [
  { key: 'all', label: 'All Skills' },
  { key: 'languages', label: 'Languages' },
  { key: 'visualization', label: 'Visualization' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'tools', label: 'Tools' },
]

export interface Project {
  id: number
  title: string
  description: string
  problem: string
  insights: string
  metric: string
  techStack: string[]
  category: string
  icon: string
  accent: string
  githubUrl: string
  demoUrl: string
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Real-Time Customer Purchase Prediction',
    description: 'Machine learning-driven segmentation and purchase behavior prediction model using customer transaction data and behavioral signals.',
    problem: 'Businesses struggle to segment customers dynamically in real-time to optimize marketing spend and predict category purchases.',
    insights: 'Developed an advanced RFM (Recency, Frequency, Monetary) segmentation model integrated with a classification pipeline, achieving 89% accuracy in predicting customer purchase behavior.',
    metric: '89% model accuracy',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'ml',
    icon: 'users',
    accent: 'purple',
    githubUrl: 'https://github.com/aum-patel14',
    demoUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'ChessMaster Pro',
    description: 'A fully-featured, highly-polished web chess application featuring customizable board themes, Stockfish AI engine, and interactive post-game analysis.',
    problem: 'Casual chess players lack accessible, beautiful, and web-native training boards with integrated opening explorer analytics.',
    insights: 'Engineered a highly responsive React 19 app utilizing Stockfish 16.1 in Web Workers, integrated Lichess APIs for puzzles, and implemented custom glassmorphism styling.',
    metric: '98%+ post-game analytical accuracy',
    techStack: ['React 19', 'Stockfish WASM', 'Framer Motion', 'Firebase', 'Lichess API'],
    category: 'web',
    icon: 'gamepad',
    accent: 'blue',
    githubUrl: 'https://github.com/aum-patel14/chess-master-app',
    demoUrl: 'https://aum-patel14.github.io/chess-master-app',
    featured: true,
  },
]

export const projectFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Applications' },
  { key: 'ml', label: 'Machine Learning' },
]

export interface TimelineItem {
  year: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  type: 'experience' | 'education' | 'project' | 'future'
  side: 'left' | 'right'
}

export const timeline: TimelineItem[] = [
  {
    year: '2021 – 2024',
    title: 'Diploma in Computer Engineering',
    subtitle: 'Parul University, Vadodara',
    description: 'Acquired core hardware and software fundamentals, relational databases (DBMS), data structures, and computer programming (Java, C/C++). Graduated with a strong technical foundation.',
    tags: ['DBMS', 'Data Structures', 'Java', 'C/C++'],
    type: 'education',
    side: 'left',
  },
  {
    year: 'Mar 2024 – Jul 2025',
    title: 'QA Tester & Data Analyst',
    subtitle: 'Apollo Tyres Ltd.',
    description: 'Worked for 1.5 years performing rigorous software QA testing on enterprise inventory and logistics software. Extracted manufacturing logs, analyzed product defect rates, built dynamic metrics dashboards, and delivered structured QA and analytics insights to senior operational management.',
    tags: ['QA Testing', 'Data Analysis', 'Excel', 'Reporting', 'Defect Tracking', 'Manufacturing Metrics'],
    type: 'experience',
    side: 'right',
  },
  {
    year: '2024 – 2027 (Expected)',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Parul University, Vadodara',
    description: 'Pursuing advanced computational theory, data systems, and system design, while deepening expertise in data science, predictive analytics, and machine learning pipelines.',
    tags: ['Computer Science', 'Machine Learning', 'Data Pipelines', 'Advanced Engineering'],
    type: 'education',
    side: 'left',
  },
  {
    year: '2024 – 2025',
    title: 'Core Analytics & Web Architect',
    subtitle: 'Advanced Machine Learning & Web App Development',
    description: 'Spearheaded the development of a real-time customer behavior segmentation system using Scikit-learn and designed ChessMaster Pro, an interactive, full-featured web-based chess app powered by React 19 and Stockfish AI.',
    tags: ['React 19', 'Stockfish WASM', 'Scikit-learn', 'Firebase', 'Python'],
    type: 'project',
    side: 'right',
  },
  {
    year: '2026 & Beyond',
    title: 'Target: Dedicated Data Analyst',
    subtitle: 'Professional Goal',
    description: 'Leveraging my analytical rigor from Apollo Tyres and solid coding foundation to land a full-time, high-impact Data Analyst, Business Intelligence Engineer, or Analytics Consultant role.',
    tags: ['Business Intelligence', 'Data Strategy', 'Data Engineering', 'Full-time'],
    type: 'future',
    side: 'left',
  },
]

export const aboutHighlights = [
  { icon: 'target', label: 'Rigorous QA Background', description: 'Applying detail-oriented testing frameworks and high data-integrity principles gained at Apollo Tyres.' },
  { icon: 'bar-chart', label: 'Dashboard Architect', description: 'Transforming messy business tables into clean, interactive, and actionable dashboards in Power BI.' },
  { icon: 'code', label: 'Python Analytics Specialist', description: 'Fluent in Pandas, Scikit-learn, Seaborn, and Matplotlib — from ETL pipelines to machine learning modeling.' },
  { icon: 'database', label: 'Advanced SQL Developer', description: 'Skilled in writing clean, high-performance joins, aggregations, window functions, and CTEs.' },
]

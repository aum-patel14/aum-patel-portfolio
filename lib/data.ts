// lib/data.ts — All portfolio content for Aum Patel (Frontend Developer Focus)

export const personalInfo = {
  name: 'Aum Patel',
  role: 'Frontend Developer',
  tagline: 'Crafting High-Performance User Interfaces & Interactive Web Experiences',
  location: 'Gujarat, India',
  email: 'aumpatel.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/aum-patel-573269393/',
  github: 'https://github.com/aum-patel14',
  availableFor: ['Frontend Developer Intern', 'Junior Frontend Developer', 'React/Next.js Engineer', 'UI/UX Developer'],
}

export const heroStats = [
  { value: '2+', label: 'Apps Shipped' },
  { value: '1.5', label: 'QA & Dev Experience' },
  { value: '6+', label: 'Core Tech Skills' },
  { value: '120', label: 'FPS Render Performance' },
]

export const typewriterRoles = [
  'Frontend Developer',
  'React & Next.js Engineer',
  'UI/UX Developer',
  'TypeScript Specialist',
  'Tailwind CSS Designer',
  'Web Animator',
]

export interface Skill {
  name: string
  icon: string
  percent: number
  category: 'languages' | 'frameworks' | 'styling' | 'tools'
  color: string
}

export const skills: Skill[] = [
  { name: 'TypeScript', icon: 'code', percent: 88, category: 'languages', color: '#3178c6' },
  { name: 'JavaScript', icon: 'terminal', percent: 90, category: 'languages', color: '#f7df1e' },
  { name: 'React 19', icon: 'globe', percent: 92, category: 'frameworks', color: '#61dafb' },
  { name: 'Next.js', icon: 'layers', percent: 87, category: 'frameworks', color: '#ffffff' },
  { name: 'TailwindCSS', icon: 'paint-brush', percent: 94, category: 'styling', color: '#38bdf8' },
  { name: 'Framer Motion', icon: 'play', percent: 85, category: 'styling', color: '#ff007a' },
  { name: 'Anime.js', icon: 'activity', percent: 80, category: 'styling', color: '#f35352' },
  { name: 'Git & GitHub', icon: 'github', percent: 88, category: 'tools', color: '#f05032' },
  { name: 'MERN Stack', icon: 'cpu', percent: 84, category: 'tools', color: '#10b981' },
]

export const skillCategories = [
  { key: 'all', label: 'All Skills' },
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'styling', label: 'Styling & Animation' },
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
    demoUrl: 'https://chess-master-app-main.vercel.app/#/',
    featured: true,
  },
  {
    id: 2,
    title: 'ZenFlow — Aesthetic Interactive Workspace',
    description: 'A highly responsive, custom-crafted frontend workspace featuring glassmorphic components, fluid canvas editors, and drag-and-drop widget layout systems.',
    problem: 'Modern developers lack elegant, highly customizable, and distraction-free workspace interfaces that load instantly.',
    insights: 'Leveraged React 19 concurrent features, optimized rendering trees using custom memoization hooks, and implemented staggering animations using anime.js for a fluid 120 FPS experience.',
    metric: '120 FPS render performance',
    techStack: ['Next.js', 'React 19', 'Framer Motion', 'TailwindCSS', 'anime.js'],
    category: 'web',
    icon: 'sliders',
    accent: 'green',
    githubUrl: 'https://github.com/aum-patel14/zenflow',
    demoUrl: 'https://fronted-sage-omega.vercel.app/',
    featured: true,
  },
]

export const projectFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'web', label: 'Web Applications' },
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
    description: 'Acquired core programming fundamentals, data structures, algorithm optimization, and software development lifecycles. Graduated with a strong technical foundation.',
    tags: ['Data Structures', 'Java', 'C/C++', 'Relational Databases'],
    type: 'education',
    side: 'left',
  },
  {
    year: 'Mar 2024 – Jul 2025',
    title: 'QA Tester & UI Analyst',
    subtitle: 'Apollo Tyres Ltd.',
    description: 'Performed rigorous software QA testing on enterprise inventory and logistics software. Focused on UI/UX cross-browser compatibility, usability audits, automated regression testing, and worked closely with frontend engineering teams to squash layout defects.',
    tags: ['UI/UX QA', 'Cross-browser Testing', 'Defect Tracking', 'Usability Audits', 'Automated Testing'],
    type: 'experience',
    side: 'right',
  },
  {
    year: '2024 – 2027 (Expected)',
    title: 'B.Tech in Computer Science & Engineering',
    subtitle: 'Parul University, Vadodara',
    description: 'Pursuing advanced computational theory, human-computer interaction (HCI), frontend systems engineering, and modern web applications architecture.',
    tags: ['Computer Science', 'Frontend Architecture', 'Human-Computer Interaction', 'Systems Design'],
    type: 'education',
    side: 'left',
  },
  {
    year: '2024 – 2025',
    title: 'Core Web Architect & UI Designer',
    subtitle: 'Advanced Web Applications Development',
    description: 'Designed and built ChessMaster Pro, an interactive, full-featured web-based chess app powered by React 19 and Stockfish AI, alongside custom-crafted UI design systems.',
    tags: ['React 19', 'Next.js', 'Stockfish WASM', 'Framer Motion', 'TailwindCSS'],
    type: 'project',
    side: 'right',
  },
  {
    year: 'Now',
    title: 'Now — Frontend Developer, open for freelance & full-time work',
    subtitle: 'Freelance & Full-time',
    description: 'Leveraging my detail-oriented UI QA background from Apollo Tyres and strong React/Next.js foundation to build scalable frontend applications, deliver custom web features, and optimize browser rendering.',
    tags: ['React Developer', 'UI Engineer', 'Next.js specialist', 'Full-time', 'Freelance'],
    type: 'experience',
    side: 'left',
  },
]

export const aboutHighlights = [
  { icon: 'target', label: 'Detail-Oriented UI/UX QA', description: 'Bringing high-precision testing, debugging, and cross-browser quality assurance expertise from my 1.5 years at Apollo Tyres.' },
  { icon: 'code', label: 'Modern React & Next.js', description: 'Crafting performant web architectures utilizing React 19, server components, and optimized state management.' },
  { icon: 'play', label: 'Smooth Animation Specialist', description: 'Leveraging Framer Motion and anime.js to build natural, physics-based transitions that enhance user journeys.' },
  { icon: 'terminal', label: 'Type-Safe Engineering', description: 'Dedicated to writing clean, maintainable TypeScript and configuring optimized, responsive utility styles.' },
]

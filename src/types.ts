export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics?: string[];
  architecturePoints: string[];
  gradient: string;
  featured?: boolean;
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface ToolItem {
  name: string;
  category: string;
  level?: string;
  iconName: string;
  color?: string;
}

export interface ThoughtItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string[];
}

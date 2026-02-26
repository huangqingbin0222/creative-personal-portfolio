
export interface Skill {
  name: string;
  level: number;
  icon: string;
  color: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialWork {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface Goal {
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export enum Tab {
  Home = 'Home',
  About = 'About',
  Hobbies = 'Hobbies',
  Works = 'Works',
  Plans = 'Plans'
}

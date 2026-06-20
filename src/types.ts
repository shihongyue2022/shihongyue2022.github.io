export interface SocialLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  summary: string;
  about: string;
  availability: string;
  location: string;
  focus: string;
  workMode: string;
  avatar: string;
  email: string;
  phone: string;
  contactText: string;
  socials: SocialLink[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface Education {
  period: string;
  school: string;
  degree: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  impact: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface Certificate {
  name: string;
  issuer: string;
  issuedAt: string;
  credentialId?: string;
  image?: string;
  verifyUrl?: string;
}

export interface ResumeData {
  profile: Profile;
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
}

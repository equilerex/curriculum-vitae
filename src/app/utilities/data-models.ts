export interface Experience {
  name: string;
  location?: string;
  description?: string;
  position?: string;
  startDate: string;
  endDate?: string;
  url?: string;
  logo?: string;
  tasks?: ExperienceTask[];
  printSpacing?: string;
}
export type ExperienceTask = DetailedExperienceTask | string;
export interface DetailedExperienceTask {
  text: string;
  tasks?: string[];
  link?: string;
}

export interface Skill {
  name: string;
  description: string;
  level?: string;
}

export interface TechnicalSkill {
  name: string;
  usage: TimeSpan[];
}

export interface TimeSpan {
  startDate: string;
  endDate?: string;
}

export interface CvStructure {
  firstName: string;
  lastName: string;
  birthDate: string;
  jobTitle: string;
  email?: string;
  phone?: string;
  countryCode?: string;
  linkedin?: string;
  pdfCvUrl?: string;
  homepage?: string;
  location?: string;
  nationality?: string;
  image?: string;
  summary?: string;
  languages: Skill[];
  skills: Skill[];
  technical: {
    active: TechnicalSkill[];
    legacy: TechnicalSkill[];
    simpleSkills: string[];
    tools: string[];
  };
  hobbies: string[];
  experience: Experience[];
  education: Experience[];
}

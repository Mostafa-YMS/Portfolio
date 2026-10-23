export type ContactMethod =
  | { type: "email"; value: string; href: string; label: string }
  | { type: "phone"; value: string; href: string; label: string }
  | { type: "whatsapp"; value: string; href: string; label: string }
  | { type: "calendly"; value: string; href: string; label: string }
  | { type: "location"; value: string; label: string };

export type ExternalLink =
  | {
      platform:
        "github" | "linkedin" | "x" | "bluesky" | "mastodon" | "medium" | "devto" | "stackoverflow";
      href: string;
      label: string;
      handle?: string;
    }
  | {
      platform: "website" | "other";
      href: string;
      label: string;
    };

export type ResumeMetadata = {
  filePath: string;
  filename: string;
  version?: string;
  lastUpdated?: string;
  notes?: string;
};

export type Profile = {
  displayName: string;
  preferredName?: string;
  headline: string;
  subheadline?: string;
  specialization: string;
  summary: string;
  location?: string;
  timezone?: string;
  availability?: "full-time" | "contract" | "freelance" | "open" | "unavailable";
  openToRelocation?: boolean;
  openToRemote: boolean;
  languages?: Array<{
    name: "English" | "Arabic" | "French" | "German" | "Spanish" | "Other";
    proficiency: "native" | "fluent" | "professional" | "conversational" | "basic";
    otherName?: string;
  }>;
  focusAreas: string[];
  keyStrengths: string[];
};

export type ExperienceHighlight = {
  text: string;
  verified: boolean;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string; // YYYY-MM or YYYY
  endDate?: string; // YYYY-MM or YYYY
  current: boolean;
  location?: string;
  locationType?: "onsite" | "hybrid" | "remote";
  summary?: string;
  highlights: ExperienceHighlight[];
  technologies?: string[];
};

export type ProjectLink =
  | { type: "live"; href: string; label?: string }
  | { type: "repo"; href: string; label?: string }
  | { type: "case-study"; href: string; label?: string }
  | { type: "demo"; href: string; label?: string };

export type ProjectMedia = {
  type: "image";
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  year?: number;
  role?: string;
  team?: string;
  category?: "web-app" | "ai" | "editor" | "design-system" | "internal" | "other";
  stack: string[];
  links: ProjectLink[];
  media?: ProjectMedia[];
  featured: boolean;
  confidential: boolean;
  hasPublicRepo: boolean;
  hasLiveDemo: boolean;
  highlights?: ExperienceHighlight[];
  challenge?: string;
  approach?: string;
  learnings?: string;
  verified: boolean;
};

export type SkillCategory =
  | "languages"
  | "frameworks"
  | "ui"
  | "state-data"
  | "backend-api"
  | "auth-i18n"
  | "ai"
  | "forms-interactions"
  | "tooling"
  | "other";

export type Skill = {
  name: string;
  category: SkillCategory;
  proficiency?: "expert" | "proficient" | "familiar";
  featured: boolean;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startYear?: number;
  endYear?: number;
  location?: string;
  verified: boolean;
};

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  issuedDate?: string;
  expiresDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  verified: boolean;
};

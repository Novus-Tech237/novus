export type ExperienceType = {
  id?: number;
  docId?: number | null;
  title: string | null;
  companyName: string | null;
  city: string | null;
  state: string | null;
  startDate: string | null;
  endDate?: string | null;
  currentlyWorking: boolean;
  workSummary: string | null;
};

export type EducationType = {
  id?: number;
  docId?: number | null;
  universityName: string | null;
  startDate: string | null;
  endDate: string | null;
  degree: string | null;
  major: string | null;
  description: string | null;
};

export type SkillType = {
  id?: number;
  docId?: number | null;
  name: string | null;
  rating?: number;
};

export type PersonalInfoType = {
  id?: number;
  docId?: number | null;
  firstName?: string | null;
  lastName?: string | null;
  jobTitle?: string | null;
  address?: string | null;
  phone?: string | null;
  email?: string | null;
};

export type StatusType = "archived" | "private" | "public" | undefined;

export type ResumeDataType = {
  id?: number;
  documentId?: string;
  title: string;
  status: StatusType;
  thumbnail?: string | null;
  personalInfo?: PersonalInfoType | null;
  themeColor?: string | null;
  currentPosition?: number | null;
  summary: string | null;
  experiences?: ExperienceType[] | null;
  educations?: EducationType[] | null;
  skills?: SkillType[] | null;
  updatedAt?: string;
};

// Define the interface for resumeUpdate
export interface ResumeUpdateType {
  title?: string | null;
  status?: string | null; // Adjust based on your requirements
  thumbnail?: string | null;
  summary?: string | null;
  themeColor?: string | null;
  currentPosition?: number | null;
  personalInfo?: PersonalInfoType | null; // Use your existing type
  education?: EducationType[] | null; // Use your existing type
  experience?: ExperienceType[] | null; // Use your existing type
  skills?: SkillType[] | null; // Use your existing type
}

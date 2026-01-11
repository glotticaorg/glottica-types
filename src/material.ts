export type CourseId = string;
export type UnitId = string;

export interface Course {
  type: 'COURSE';
  key: CourseId;
  avatar?: `${CourseId}-${string}`; // location in CDN/assets
  name: string;
}

export interface CourseProfile {
  type: `COURSE#${CourseId}`;
  key: 'PROFILE';
  affiliation?: string;
  avatar?: `${CourseId}-${string}`; // location in CDN/assets/material
  description: string;
  name: string;
}

export interface CourseUnit {
  type: `COURSE#${CourseId}`;
  key: `UNIT#${UnitId}`;
  description?: string;
  name: string;
}

export interface CourseMaterial {
  type: `COURSE#${CourseId}#MATERIAL`;
  key: `UNIT#${UnitId}#${string}`;
  form: string;
  answer: string;
  hint?: string;
}

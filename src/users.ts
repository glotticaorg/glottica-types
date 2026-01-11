export type Affiliation = string;
export type Username = string;
export type EmailAddress = string;

export interface User {
  type: 'USER';
  key: Username;
  avatar?: `${Username}-${string}`; // location in CDN/assets
}

export interface UserProfile {
  type: `USER#${Username}`;
  key: 'PROFILE';
  affiliation?: Affiliation;
  avatar?: `${Username}-${string}`; // location in CDN/assets
  description?: string;
  email: EmailAddress;
  location?: string;
  username: Username;
}

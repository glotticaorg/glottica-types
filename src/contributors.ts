import { CourseId, KeybindId, Username } from "./index";

export type ContributorResource = 'KEYBIND' | 'COURSE';
export type ResourceId = CourseId | KeybindId;
export type ContributorRole = 'CONTRIBUTOR' | 'ADMINISTRATOR';

export interface ResourceContributor {
  type: `RESOURCE#${ContributorResource}#${ResourceId}`;
  key: `CONTRIBUTOR#${Username}`;
  role: ContributorRole;
}

export interface UserContributor {
  type: `USER#${Username}`;
  key: `CONTRIBUTOR#${ContributorResource}#${ResourceId}`;
  role: ContributorRole;
}

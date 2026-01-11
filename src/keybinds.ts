import { Username } from "./index";

export type KeybindId = string;

export interface Keybinds {
  type: 'KEYBINDS';
  key: KeybindId;
  asset: `${KeybindId}-${string}`; // location in CDN/assets/keybinds
  creator: Username;
  description: string;
  name: string;
}

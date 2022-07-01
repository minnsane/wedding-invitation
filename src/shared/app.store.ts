import { readable } from "svelte/store";
import type { Couple, MainCharacter } from "./app";

const isDev = process.env.NODE_ENV === "development";

const groom: MainCharacter = isDev
  ? {
      name: import.meta.env.VITE_GROOM_NAME,
      instagram: import.meta.env.VITE_GROOM_INSTAGRAM,
      kakaotalk: import.meta.env.VITE_GROOM_KAKAOTALK,
      phoneNumber: import.meta.env.VITE_GROOM_PHONE_NUMBER,
    }
  : {
      name: process.env.GROOM_NAME,
      instagram: process.env.GROOM_INSTAGRAM,
      kakaotalk: process.env.GROOM_KAKAOTALK,
      phoneNumber: process.env.GROOM_PHONE_NUMBER,
    };

const bride: MainCharacter = isDev
  ? {
      name: import.meta.env.VITE_BRIDE_NAME,
      instagram: import.meta.env.VITE_BRIDE_INSTAGRAM,
      kakaotalk: import.meta.env.VITE_BRIDE_KAKAOTALK,
      phoneNumber: import.meta.env.VITE_BRIDE_PHONE_NUMBER,
    }
  : {
      name: process.env.BRIDE_NAME,
      instagram: process.env.BRIDE_INSTAGRAM,
      kakaotalk: process.env.BRIDE_KAKAOTALK,
      phoneNumber: process.env.BRIDE_PHONE_NUMBER,
    };

export const couple = readable({ groom, bride } as Couple);

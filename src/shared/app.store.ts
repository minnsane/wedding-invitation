import { derived, readable, writable } from "svelte/store";
import type { ApiResponse, Couple, MainCharacter } from "./app";

export const response = writable({
  couple: {
    groom: { name: "", contacts: [], parents: [] },
    bride: { name: "", contacts: [], parents: [] },
  },
  details: [],
  connector: "",
  greetings: [],
} as ApiResponse);

export const couple = derived(response, ($response) => $response.couple);
export const details = derived(response, ($response) => $response.details);
export const connector = derived(response, ($response) => $response.connector);

export const greetings = derived(response, ($response) => $response.greetings);

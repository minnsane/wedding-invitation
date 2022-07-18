import { derived, writable } from "svelte/store";
import type { ApiResponse } from "./app";

export const response = writable({
  couple: {
    groom: {
      name: "",
      contacts: [],
      parents: [],
      about: { contents: [], tags: [] },
    },
    bride: {
      name: "",
      contacts: [],
      parents: [],
      about: { contents: [], tags: [] },
    },
  },
  details: [],
  connector: "",
  greetings: [],
  map: null,
} as ApiResponse);

export const couple = derived(response, ($response) => $response.couple);
export const details = derived(response, ($response) => $response.details);
export const connector = derived(response, ($response) => $response.connector);
export const greetings = derived(response, ($response) => $response.greetings);
export const map = derived(response, ($response) => $response.map);

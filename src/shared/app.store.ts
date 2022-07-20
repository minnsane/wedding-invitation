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
  timecards: [],
  images: {
    main: "",
    groom: "",
    bride: "",
    galleryImages: [],
    thumbnails: [],
  },
} as ApiResponse);

export const couple = derived(response, ($response) => $response.couple);
export const coupleName = derived(couple, ({ groom, bride }) => ({
  groom: groom.name,
  bride: bride.name,
}));

export const details = derived(response, ($response) => $response.details);
export const connector = derived(response, ($response) => $response.connector);
export const greetings = derived(response, ($response) => $response.greetings);
export const map = derived(response, ($response) => $response.map);
export const timecards = derived(response, ($response) => $response.timecards);

const images = derived(response, ($response) => $response.images);
export const mainImage = derived(images, ($images) => $images.main);
export const coupleImage = derived(images, ({ groom, bride }) => ({
  groom,
  bride,
}));
export const galleryImages = derived(
  images,
  ($images) => $images.galleryImages
);
export const thumbnails = derived(images, ($images) => $images.thumbnails);

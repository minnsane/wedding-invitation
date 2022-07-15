export const getImageUrl = (url: string) => new URL(url, import.meta.url).href;

declare global {
  interface Window {
    kakao: any;
  }
}

export interface ApiResponse {
  couple: Couple;
  details: string[];
  connector: string;
  greetings: Greeting[];
  map: Map | null;
  timecards: Array<{ title: string; description: string }>;
  images: Images;
}

export interface MainCharacter {
  name: string;
  contacts: Contact[];
  parents: Parent[];
  accounts: Account[];
  about: About;
}

export interface Contact {
  type: string;
  link: string;
}

export interface Parent {
  role: string;
  name: string;
  contacts: Contact[];
}

export interface Account {
  role: string;
  name: string;
  bank: string;
  number: string;
}

export interface Couple {
  groom: MainCharacter;
  bride: MainCharacter;
}

export interface Greeting {
  isSubText: boolean;
  followingGapLines: number;
  text: string;
}

export interface Map {
  key: string;
  position: {
    lat: number;
    lng: number;
  };
  name: string;
  address: string;
  placeDetail: string;
  link: string;
}

export interface About {
  contents: { label: string; detail: string }[];
  tags: { emoji: string; detail: string }[];
}

export interface Images {
  main: string;
  linkThumbnail: string;
  bride: string;
  groom: string;
  galleryImages: string[];
  thumbnails: string[];
}

export interface ApiResponse {
  couple: Couple;
  details: string[];
  connector: string;
  greetings: Greeting[];
}

export interface MainCharacter {
  name: string;
  contacts: Contact[];
}

export interface Contact {
  type: string;
  link: string;
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

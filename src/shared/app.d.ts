export interface ApiResponse {
  couple: Couple;
  details: string[];
  connector: string;
  greetings: Greeting[];
}

export interface MainCharacter {
  name: string;
  contacts: Contact[];
  parents: Parent[];
  accounts: Account[];
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

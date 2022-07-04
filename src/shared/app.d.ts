export interface ApiResponse {
  couple: Couple;
  details: string[];
  connector: string;
}

export interface MainCharacter {
  name: string;
  instagram: string;
  kakaotalk: string;
  phoneNumber: string;
}

export interface Couple {
  groom: MainCharacter;
  bride: MainCharacter;
}

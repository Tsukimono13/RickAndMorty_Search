import { Character } from "./character";

export interface CharacterSchema {
    isLoading: boolean;
    error?: string;
    data?: Character;
}

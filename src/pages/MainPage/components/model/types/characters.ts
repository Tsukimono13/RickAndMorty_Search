import { Character } from "@/pages/CharacterDetailedPage/components/model";

export type InfoType = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export type CharactersData = {
    info: InfoType;
    results: Character[];
}
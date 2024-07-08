import { Character, Race, Status } from '@/pages/CharacterDetailedPage/components/model';
import { Episode } from './episode';

export interface FiltersSchema {
    characters?: Character[];
    isLoading?: boolean;
    error?: string;
    // filters
    name: string;
    status: Status;
    race: Race;
    episodeNumber?: string;
    episode?: Episode;
}

import { RootState } from '@/app/store/store';
import { Race, Status } from '@/pages/CharacterDetailedPage/components/model';

export const getStatus = (state: RootState) =>
    state.filters.status ?? Status.ALL;
export const getRace = (state: RootState) => state.filters.race ?? Race.ALL;
export const getName = (state: RootState) => state.filters.name ?? '';
export const getError = (state: RootState) => state.filters.error;
export const getIsLoading = (state: RootState) => state.filters.isLoading;
export const getData = (state: RootState) => state.filters.characters ?? [];

export const getEpisodeNumber = (state: RootState) =>
    state.filters.episodeNumber ?? '';
export const getEpisodeData = (state: RootState) => state.filters.episode;

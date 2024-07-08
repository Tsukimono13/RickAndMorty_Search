import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getEpisodeNumber } from '../selectors/filtersSelectors';
import { Episode } from '../types/episode';
import { RootState } from '@/app/store/store';
import { Character } from '@/pages/CharacterDetailedPage/components/model';

export interface EpisodeWithCharacters extends Episode {
    characterDetails: Character[];
}

export const fetchEpisodeById = createAsyncThunk<
    EpisodeWithCharacters,
    string | undefined,
    { rejectValue: string; state: RootState }
>('fetchEpisode/fetchEpisodeById', async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;

    const episodeId = getEpisodeNumber(getState());

    try {
        const response = await axios.get<Episode>(
            `https://rickandmortyapi.com/api/episode/${episodeId}`,
        );

        if (!response.data) {
            throw new Error();
        }

        const episode = response.data;

        const characterPromises = episode.characters.map((url) =>
            axios.get<Character>(url),
        );
        const characterResponses = await Promise.all(characterPromises);
        const characterDetails = characterResponses.map((res) => res.data);

        return { ...episode, characterDetails };
    } catch (e) {
        console.log(e);
        return rejectWithValue('Эпизод не найден');
    }
});

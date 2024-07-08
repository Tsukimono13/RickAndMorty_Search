import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FiltersSchema } from '../types/filtersSchema';
import { fetchAllCharacters } from '../services/fetchAllCharacters';
import { fetchEpisodeById } from '../services/fetchEpisodeById';
import { Episode } from '../types/episode';
import { Character, Race, Status } from '@/pages/CharacterDetailedPage/components/model';
import { FILTERS_LOCALSTORAGE_KEY } from '@/utils/const/localStorage';

const loadStateFromLocalStorage = (): FiltersSchema => {
    try {
        const serializedState = localStorage.getItem(FILTERS_LOCALSTORAGE_KEY);
        if (serializedState) {
            return JSON.parse(serializedState);
        }
    } catch (e) {
        console.error('Could not load state', e);
    }

    return {
        isLoading: false,
        error: undefined,
        characters: undefined,
        name: '',
        status: Status.ALL,
        race: Race.ALL,
        episode: undefined,
        episodeNumber: '',
    };
};

const initialState: FiltersSchema = loadStateFromLocalStorage();

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setSortStatus: (state, action: PayloadAction<Status>) => {
            state.status = action.payload;
        },
        setSortRace: (state, action: PayloadAction<Race>) => {
            state.race = action.payload;
        },
        setEpisode: (state, action: PayloadAction<string>) => {
            state.episodeNumber = action.payload;
        },
        clearCharacters: (state) => {
            state.characters = [];
        },
        clearEpisode: (state) => {
            state.episode = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllCharacters.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchAllCharacters.fulfilled,
                (state, action: PayloadAction<Character[]>) => {
                    state.isLoading = false;
                    state.characters = action.payload;
                },
            )
            .addCase(fetchAllCharacters.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchEpisodeById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchEpisodeById.fulfilled,
                (state, action: PayloadAction<Episode>) => {
                    state.isLoading = false;
                    state.episode = action.payload;
                },
            )
            .addCase(fetchEpisodeById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: filtersActions } = filtersSlice;
export const { reducer: filtersReducer } = filtersSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterSchema } from '../types/characterSchema';
import { fetchCharacterById } from '../services/fetchCharacterById/fetchCharacterById';
import { Character } from '../types/character';

const initialState: CharacterSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const characterDetailsSlice = createSlice({
    name: 'characterDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacterById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchCharacterById.fulfilled,
                (state, action: PayloadAction<Character>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchCharacterById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: characterDetailsActions } = characterDetailsSlice;
export const { reducer: characterDetailsReducer } = characterDetailsSlice;

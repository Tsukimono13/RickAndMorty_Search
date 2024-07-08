import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Character } from '../../types/character';

export const fetchCharacterById = createAsyncThunk<
    Character,
    string | undefined,
    { rejectValue: string }
>('characterDetailed/fetchCharacterById', async (characterId, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    if (!characterId) {
        throw new Error('');
    }

    try {
        const response = await axios.get<Character>(
            `https://rickandmortyapi.com/api/character/${characterId}`,
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});

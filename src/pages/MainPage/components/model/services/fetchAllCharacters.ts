import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getStatus, getRace, getName } from '../selectors/filtersSelectors';
import { FILTERS_LOCALSTORAGE_KEY } from '@/utils/const/localStorage';
import { RootState } from '@/app/store/store';
import { Character } from '@/pages/CharacterDetailedPage/components/model';
import { CharactersData } from '../types/characters';


export const fetchAllCharacters = createAsyncThunk<
    Character[],
    void,
    { rejectValue: string; state: RootState }
>('characters/fetchAllCharacters', async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;

    const status = getStatus(getState());
    const race = getRace(getState());
    const searchName = getName(getState());

    const params: { [key: string]: string } = {};

    if (searchName !== '') {
        params.name = searchName;
    }
    if (status !== '') {
        params.status = status;
    }
    if (race !== '') {
        params.species = race;
    }

    if (Object.keys(params).length === 0) {
        return [];
    }

    try {
        const response = await axios.get<CharactersData>(
            'https://rickandmortyapi.com/api/character/',
            {
                params: params,
            },
        );

        if (!response.data) {
            throw new Error();
        }
        localStorage.setItem(
            FILTERS_LOCALSTORAGE_KEY,
            JSON.stringify(response.data.results),
        );
        return response.data.results;
    } catch (e) {
        console.log(e);
        return rejectWithValue('Персонажи не найдены');
    }
});

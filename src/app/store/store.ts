import { characterDetailsReducer } from '@/pages/CharacterDetailedPage/components/model';
import { filtersReducer } from '@/pages/MainPage/components/model';
import { configureStore } from '@reduxjs/toolkit';
import localStorageMiddleware from './localStorageMiddleware';

export const store = configureStore({
    reducer: {
        filters: filtersReducer,
        characterDetailed: characterDetailsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

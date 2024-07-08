import { Middleware } from '@reduxjs/toolkit';
import { FILTERS_LOCALSTORAGE_KEY } from '@/utils/const/localStorage';
import { FiltersSchema } from '@/pages/MainPage/components/model';

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    
    const state = store.getState() as { filters: FiltersSchema };
    localStorage.setItem(FILTERS_LOCALSTORAGE_KEY, JSON.stringify(state.filters));

    return result;
};

export default localStorageMiddleware;

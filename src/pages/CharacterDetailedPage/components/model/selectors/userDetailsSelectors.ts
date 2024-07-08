import { RootState } from "@/app/store/store";

export const getCharacterDetailsData = (state: RootState) => state.characterDetailed.data;
export const getCharacterDetailsIsLoading = (state: RootState) => state.characterDetailed?.isLoading || false;
export const getCharacterDetailsError = (state: RootState) => state.characterDetailed?.error
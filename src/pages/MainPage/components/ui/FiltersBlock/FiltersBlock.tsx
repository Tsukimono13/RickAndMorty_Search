import { useAppDispatch } from '@/utils/hooks/useAppDispatch';
import { memo, useCallback } from 'react';
import { filtersActions } from '../../model/slices/filtersSlice';
import {
    fetchAllCharacters,
    fetchEpisodeById,
    getEpisodeNumber,
    getName,
    getRace,
    getStatus,
} from '../../model';
import { useAppSelector } from '@/utils/hooks/useAppSelectors';
import { useDebounce } from '@/utils/hooks/useDebounce';
import OrIcon from '@/assets/icons/or.svg';
import OrMobileIcon from '@/assets/icons/orMobile.svg';
import { useIsMobile } from '@/utils/hooks/useIsMobile';
import { RaceSelector } from '@/features/RaceSelector';
import { SearchEpisodeCharacters } from '@/features/SearchEpisodeCharacters';
import { SearchName } from '@/features/SearchName';
import { StatusSelector } from '@/features/StatusSelect';
import { Status, Race } from '@/pages/CharacterDetailedPage/components/model';

export const FiltersBlock = memo(() => {
    const dispatch = useAppDispatch();
    const isMobile = useIsMobile();
    const status = useAppSelector(getStatus);
    const race = useAppSelector(getRace);
    const searchName = useAppSelector(getName);
    const episodeNum = useAppSelector(getEpisodeNumber);

    const fetchData = useCallback(() => {
        dispatch(fetchAllCharacters());
    }, [dispatch]);

    const fetchEpisodeData = useCallback(() => {
        dispatch(fetchEpisodeById());
    }, [dispatch]);

    const debounceFetchCharacters = useDebounce(fetchData, 1000);
    const debounceFetchEpisode = useDebounce(fetchEpisodeData, 500);

    const onChangeName = useCallback(
        (name: string) => {
            dispatch(filtersActions.setSearchName(name));
            if (name === '') {
                dispatch(filtersActions.clearCharacters());
            }
            debounceFetchCharacters();
        },
        [debounceFetchCharacters, dispatch],
    );

    const onChangeStatus = useCallback(
        (newStatus: Status) => {
            dispatch(filtersActions.setSortStatus(newStatus));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeRace = useCallback(
        (newRace: Race) => {
            dispatch(filtersActions.setSortRace(newRace));
            fetchData();
        },
        [dispatch, fetchData],
    );

    const onChangeEpisode = useCallback(
        (newEpisode: string) => {
            dispatch(filtersActions.setEpisode(newEpisode));
            if (newEpisode === '') {
                dispatch(filtersActions.clearEpisode());
            } else {
                debounceFetchEpisode();
            }
        },
        [dispatch, debounceFetchEpisode],
    );

    return (
        <div className="pt-12 flex gap-7 max-md:flex-col max-md:items-center max-md:pt-10 ">
            <div className="flex gap-5 flex-col w-56 max-md:w-full">
                <SearchName name={searchName} onChangeName={onChangeName} />
                <StatusSelector
                    status={status}
                    onChangeStatus={onChangeStatus}
                />
                <RaceSelector race={race} onChangeRace={onChangeRace} />
            </div>
            {isMobile ? <OrMobileIcon /> : <OrIcon />}
            <div className="w-56 max-md:pb-11 max-md:w-full">
                <SearchEpisodeCharacters
                    episode={episodeNum}
                    onChangeEpisode={onChangeEpisode}
                />
            </div>
        </div>
    );
});

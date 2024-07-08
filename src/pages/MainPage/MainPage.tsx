import {
    EpisodeWithCharacters,
    getError,
    getIsLoading,
} from './components/model';
import { useAppSelector } from '@/utils/hooks/useAppSelectors';
import { Loader } from '@/ui/Loader/Loader';
import SadMortyIcon from '@/assets/img/sadMorty.png';
import { useMemo } from 'react';
import { LeftSide } from '@/features/LeftSide';
import {
    getData,
    getEpisodeData,
} from './components/model/selectors/filtersSelectors';
import { CharactersByEpisodeList } from './components/ui/CharactersByEpisodeList';
import { CharactersByFiltersList } from './components/ui/CharactersByFiltersList';

const MainPage = () => {
    const error = useAppSelector(getError);
    const isLoading = useAppSelector(getIsLoading);
    const searchList = useAppSelector(getData);
    const episode = useAppSelector(getEpisodeData) as EpisodeWithCharacters;

    const notFoundMessage = useMemo(
        () => (
            <div className="max-md:flex max-md:flex-col max-md:items-center pb-14">
                <h4 className="font-bold text-xl mb-2">Ничего не найдено</h4>
                <p className="text-sm font-bold mb-9">
                    Попробуйте изменить параметры поиска
                </p>
                <img
                    src={SadMortyIcon}
                    alt="Not found"
                    width={182}
                    height={202}
                />
            </div>
        ),
        [],
    );

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="w-full flex flex-col md:flex-row min-h-screen relative max-md:h-full">
            <LeftSide />
            <div className="w-1/2 pl-12 pt-10 pb-20 max-md:pt-7 max-md:px-4 max-md:w-full">
                <h2 className="font-bold text-2xl pb-6 max-md:text-center">
                    Результат поиска
                </h2>
                {error && notFoundMessage}
                <CharactersByFiltersList searchList={searchList} />
                {episode?.characterDetails.length > 0 && (
                    <>
                        <h2 className="font-bold text-2xl pb-6 pt-10 max-md:text-center">
                            По эпизоду
                        </h2>
                        <CharactersByEpisodeList episode={episode} />
                    </>
                )}
            </div>
        </div>
    );
};

export default MainPage;

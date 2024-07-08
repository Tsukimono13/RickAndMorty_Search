import { LeftSide } from '@/features/LeftSide';
import { Loader } from '@/ui/Loader/Loader';
import { useAppDispatch } from '@/utils/hooks/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    getCharacterDetailsData,
    getCharacterDetailsError,
    getCharacterDetailsIsLoading,
    fetchCharacterById,
} from './components/model';
import { CharacterDetailed } from './components/ui/CharacterDetailed';

const CharacterDetailedPage = () => {
    const dispatch = useAppDispatch();

    const { id } = useParams<{ id: string }>();

    const character = useSelector(getCharacterDetailsData);
    const error = useSelector(getCharacterDetailsError);
    const isLoading = useSelector(getCharacterDetailsIsLoading);

    useEffect(() => {
        dispatch(fetchCharacterById(id));
    }, [dispatch, id]);

    if (!id) {
        return <h3>Пользователь не найден</h3>;
    }

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <h3>Ошибка при загрузке пользователя</h3>;
    }

    if (!character) {
        return <h3>Пользователь не найден</h3>;
    }

    return (
        <div className="flex max-md:flex-col">
            <LeftSide />
            <CharacterDetailed character={character} />
        </div>
    );
};

export default CharacterDetailedPage;

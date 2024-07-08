import GoBackIcon from '@/assets/icons/arrowBack.svg';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../model';
import { memo } from 'react';

interface CharacterDetailedProps {
    character: Character;
}

export const CharacterDetailed = memo((props: CharacterDetailedProps) => {
    const { character } = props;
    const navigate = useNavigate();

    return (
        <div className="w-1/2 pt-10 pl-4 max-md:w-full max-md:h-full max-md:pb-60">
            <div className="flex gap-4 items-center pb-6">
                <button onClick={() => navigate(-1)}>
                    <GoBackIcon />
                </button>
                <h2 className="font-bold text-2xl">{character.name}</h2>
            </div>
            <div className="ml-8">
                <img
                    src={character.image}
                    alt={character.name}
                    className="size-72 rounded-xl mb-4"
                />
                <h4 className="text-[#92A4A6] font-bold text-base">
                    Жив ли персонаж:{' '}
                    <span className="text-[#043940]">{character.status}</span>
                </h4>
                <h4 className="text-[#92A4A6] font-bold text-base">
                    Раса:{' '}
                    <span className="text-[#043940]">{character.species}</span>
                </h4>
                <h4 className="text-[#92A4A6] font-bold text-base">
                    Пол:{' '}
                    <span className="text-[#043940]">{character.gender}</span>
                </h4>
            </div>
        </div>
    );
});

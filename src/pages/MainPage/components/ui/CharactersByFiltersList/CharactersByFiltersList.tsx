import { Character } from '@/pages/CharacterDetailedPage/components/model';
import { memo } from 'react';
import { FoundItemCard } from '../FoundItemCard';

interface CharactersByFiltersListProps {
    searchList: Character[];
}

export const CharactersByFiltersList = memo((props: CharactersByFiltersListProps) => {
        const { searchList } = props;
        return (
            <div className="flex flex-wrap gap-4 max-md:gap-2 max-md:justify-center">
                {searchList.map((item) => (
                    <FoundItemCard item={item} />
                ))}
            </div>
        );
    },
);

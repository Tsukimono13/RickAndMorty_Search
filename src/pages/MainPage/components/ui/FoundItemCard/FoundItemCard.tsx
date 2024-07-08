import { RoutePath } from '@/app/router/routeConfig/routeConfig';
import { Character } from '@/pages/CharacterDetailedPage/components/model';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface FoundItemCardProps {
    item: Character;
}

export const FoundItemCard = memo((props: FoundItemCardProps) => {
    const { item } = props;
    return (
        <Link to={RoutePath.character + item.id} key={item.id}>
            <div className="bg-[#ABD4E7] px-2 rounded-3xl h-full py-2 duration-100 hover:scale-105 max-md:w-[175px]">
                <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[184px] min-w-[159px] max-h-[176px] min-h-[176px] w-full h-full object-cover pb-2 rounded-2xl"
                />
                <h4 className="w-44 pb-6">{item.name}</h4>
            </div>
        </Link>
    );
});

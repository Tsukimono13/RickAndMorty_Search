import { Input } from '@/ui/Input/Input';
import { memo } from 'react';

interface SearchNameProps {
    name: string;
    onChangeName: (name: string) => void;
}

export const SearchName = memo((props: SearchNameProps) => {
    const { name, onChangeName } = props;
    return (
        <div>
            <label className="block mb-1 font-bold text-sm">
                Имя персонажа
            </label>
            <Input
                placeholder="Например, Rick"
                value={name}
                onChange={onChangeName}
            />
            <span className="mt-1 font-bold text-sm">
                Имена только на английском
            </span>
        </div>
    );
});

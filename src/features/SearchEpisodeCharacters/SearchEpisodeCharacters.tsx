import { Input } from '@/ui/Input/Input';
import { memo } from 'react';

interface SearchEpisodeCharactersProps {
    episode: string;
    onChangeEpisode: (episode: string) => void;
}

export const SearchEpisodeCharacters = memo((props: SearchEpisodeCharactersProps,
) => {
    const { episode, onChangeEpisode } = props;
    return (
        <div>
            <label className="block mb-0.5">Эпизод</label>
            <Input
                placeholder="28"
                value={episode}
                onChange={onChangeEpisode}
            />
        </div>
    );
});

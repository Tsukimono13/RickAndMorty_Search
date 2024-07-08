import { memo } from "react";
import { EpisodeWithCharacters } from "../../model";
import { FoundItemCard } from "../FoundItemCard";

interface CharactersByEpisodeListProps {
    episode: EpisodeWithCharacters;
}
export const CharactersByEpisodeList = memo((props: CharactersByEpisodeListProps) => {
    const { episode } = props;
    return (
        <div className="flex flex-wrap gap-4 max-md:gap-2 max-md:justify-center">
            {episode?.characterDetails.map((character) => (
                <FoundItemCard item={character} />
            ))}
        </div>
    );
});

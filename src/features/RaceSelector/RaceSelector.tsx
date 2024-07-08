import { Race } from '@/pages/CharacterDetailedPage/components/model';
import { SelectOption, Select } from '@/ui/Select/Select';
import { memo, useMemo } from 'react';

interface RaceSelectorProps {
    race: Race;
    onChangeRace: (race: Race) => void;
}

export const RaceSelector = memo((props: RaceSelectorProps) => {
    const { race, onChangeRace } = props;

    const raceOptions = useMemo<SelectOption<Race>[]>(() => {
        return [
            { value: Race.ALL, content: 'Все' },
            { value: Race.HUMAN, content: 'Человек' },
            { value: Race.ALIEN, content: 'Инопланетятин' },
            { value: Race.HUMANOID, content: 'Гуманоид' },
            { value: Race.UNKNOWN, content: 'Неизвестно' },
            { value: Race.POOPYBUTTHOLE, content: 'Жопосранчик' },
            { value: Race.MYTHOLOGICAL, content: 'Мифологическое существо' },
            { value: Race.ANIMAL, content: 'Животное' },
            { value: Race.ROBOT, content: 'Робот' },
            { value: Race.CRONENBERG, content: 'Кроненберг' },
            { value: Race.DISEASE, content: 'Болезнь' },
        ];
    }, []);

    return (
            <Select
                label="Раса"
                options={raceOptions}
                value={race}
                onChange={onChangeRace}
            />
    );
});

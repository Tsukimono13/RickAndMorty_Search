import { Status } from '@/pages/CharacterDetailedPage/components/model';
import { SelectOption, Select } from '@/ui/Select/Select';
import { memo, useMemo } from 'react';

interface StatusSelectorProps {
    status: Status;
    onChangeStatus: (status: Status) => void;
}

export const StatusSelector = memo((props: StatusSelectorProps) => {
    const { status, onChangeStatus } = props;

    const statusOptions = useMemo<SelectOption<Status>[]>(() => {
        return [
            { value: Status.ALL, content: 'Все' },
            { value: Status.ALIVE, content: 'Жив' },
            { value: Status.DEAD, content: 'Мертв' },
            { value: Status.UNKNOWN, content: 'Неизвестно' },
        ];
    }, []);

    return (
        <Select
            label="Жив ли персонаж"
            options={statusOptions}
            value={status}
            onChange={onChangeStatus}
        />
    );
});

import { ChangeEvent, useMemo } from 'react';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { label, options, onChange, value } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionList = useMemo(
        () =>
            options?.map((opt, index) => (
                <option
                    className={index !== 0 ? 'text-[#043940]' : ''}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    return (
        <div>
            {label && (
                <span className={'block mb-1 font-bold text-sm'}>{label}</span>
            )}
            <select
                className={`w-full rounded px-2 py-1.5 font-bold text-base focus:outline-none ${
                    value ? 'text-[#043940]' : 'text-[#92A4A6]'
                }`}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};

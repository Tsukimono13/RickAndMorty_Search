import React, { InputHTMLAttributes, memo } from 'react';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
    value?: string | number;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const {
        onChange,
        value,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChangeHandler}
            className={
                'border rounded w-full px-1.5 py-1 placeholder:text-[#92A4A6] font-bold text-base'
            }
            {...otherProps}
        />
    );
});

import {ChangeEvent, memo, useMemo, useState} from 'react';
import cls from './Select.module.scss';
import {classNames} from "lib/classNames";

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    setVal?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        value ,
        onChange,
        setVal,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    function onChangeHandler(e: ChangeEvent<HTMLSelectElement>) {
        if (onChange && setVal) {
            onChange(e.target.value);
            setVal(e.target.value)
        }
    }

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            <span className={cls.label}>
                {label}
            </span>
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});
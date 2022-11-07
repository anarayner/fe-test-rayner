import cls from './Button.module.scss'
import {classNames} from "lib/classNames";
import React, {ReactNode} from "react";

export const enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps {
    className?: string;
    size?: ButtonSize;
    children?: ReactNode;
    disabled?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        size = ButtonSize.M,
        children,
        disabled,
        onClick
    } = props

    return (
        <button
            type='button'
            className={classNames(cls.Button, {}, [className, cls[size]])}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
import { classNames } from 'lib/classNames';
import cls from './Navbar.module.scss'
import LogoImg from '../../assets/stackline_logo.svg'
import { memo } from 'react';


interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <LogoImg className={cls.logo}/>
        </div>
    );
});
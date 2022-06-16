import React from 'react';

// SYLE
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <h2 className={s.header__title}>Услуги</h2>
        </div>
    );
};

export default Header;
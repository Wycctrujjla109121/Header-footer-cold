import React from 'react';

// Style
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <h2 className={s.header__title}>Доставка и оплата</h2>
        </div>
    );
};

export default Header;
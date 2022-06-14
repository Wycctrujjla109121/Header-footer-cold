import React from 'react';

// IMG
import logo from '../../assets/header/logo.svg';
import person from '../../assets/header/person.svg';
import card from '../../assets/header/card.svg'

// STYLE
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <button className={s.header__burger}>
                <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.25" width="40" height="4" fill="#C4C4C4" />
                    <rect x="0.25" y="8" width="35" height="4" fill="#C4C4C4" />
                    <rect x="0.25" y="16" width="30" height="4" fill="#C4C4C4" />
                </svg>
            </button>
            <div className={s.header__logo}>
                <img src={logo} alt="Картинка" />
                <h2 className={s.header__title}>Air Conditioners</h2>
            </div>
            <div className={s.header__menu}>
                <a className={s.header__link} href='#'>Каталог</a>
                <a className={s.header__link} href='#'>Контакты</a>
                <a className={s.header__link} href='#'>Услуги</a>
                <a className={s.header__link} href='#'>Доставка</a>
                <a className={s.header__link} href='#'>FAQ</a>
            </div>
            <div className={s.header__info}>
                <div className={s.header__person}>
                    <img src={person} alt="Картинка" />
                    <h2 className={s.header__name}>Евгений</h2>
                </div>
                <div className={s.header__cost}>
                    <div className={s.header__card}>
                        <img className={s.header__card__img} src={card} alt="Картинка" />
                        <p className={s.header__card__text}>2</p>
                    </div>
                    <p className={s.header__text}>В корзине</p>
                    <p className={s.header__price}>13250р.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
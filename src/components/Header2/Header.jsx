import React from 'react';

// IMG
import logo from '../../assets/header/logo.svg'
import person from '../../assets/header/person.svg'
import cart from '../../assets/header/cart.svg'
// STYLE
import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.header__logo}>
                    <img className={s.header__logo__img} src={logo} alt="" />
                    <h2 className={s.header__title}>Air Conditioners</h2>
                </div>

                <button className={s.header__burger}>
                    <svg width="41" height="20" viewBox="0 0 41 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.25" width="40" height="4" fill="#C4C4C4" />
                        <rect x="0.25" y="8" width="35" height="4" fill="#C4C4C4" />
                        <rect x="0.25" y="16" width="30" height="4" fill="#C4C4C4" />
                    </svg>
                </button>

                <form className={s.header__form} action="#">
                    <div className={s.header__search}>
                        <input className={s.header__select__text} type="text" placeholder='Название товара' />
                        <select className={s.header__select}>
                            <option>Все категории</option>
                            <option>Что-то ещё</option>
                        </select>
                    </div>
                    <button className={s.header__submit}></button>
                </form>

                <div className={s.header__info}>
                    <div className={s.header__person}>
                        <img className={s.header__person__img} src={person} alt="" />
                        <p className={s.header__text}>Евгений</p>
                    </div>
                    <div className={s.header__card}>
                        <img className={s.header__card__img} src={cart} alt="" />
                        <p className={s.header__text}>Корзина</p>
                    </div>
                </div>
            </div>

            <div className={s.menu}>
                <div className={s.menu__list}>
                    <a className={s.menu__link} href="#">Каталог</a>
                    <a className={s.menu__link} href="#">Контакты</a>
                    <a className={s.menu__link} href="#">Услуги</a>
                    <a className={s.menu__link} href="#">Доставка и оплата</a>
                    <a className={s.menu__link} href="#">FAQ</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
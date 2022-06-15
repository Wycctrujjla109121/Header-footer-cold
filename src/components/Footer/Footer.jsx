import React from 'react';

// IMG
import logo from '../../assets/footer/logo.svg'
import facebook from '../../assets/footer/Facebook.svg'
import instagram from '../../assets/footer/Instagram.svg'
import twitter from '../../assets/footer/Twitter.svg'

//  STYLE
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footer__list}>
                <div className={s.footer__logo}>
                    <img className={s.footer__logo__img} src={logo} alt="" />
                    <h2 className={s.footer__title}>Air Conditioners</h2>
                </div>
                <div className={s.footer__menu}>
                    <a className={s.footer__link} href="#">Каталог</a>
                    <a className={s.footer__link} href="#">Контакты</a>
                    <a className={s.footer__link} href="#">Услуги</a>
                    <a className={s.footer__link} href="#">Доставка и оплата</a>
                    <a className={s.footer__link} href="#">FAQ</a>
                </div>
                <div className={s.footer__contact}>
                    <a href="#">
                        <img className={s.footer__icon} src={facebook} alt="" />
                    </a>
                    <a href="#">
                        <img className={s.footer__icon} src={twitter} alt="" />
                    </a>
                    <a href="#">
                        <img className={s.footer__icon} src={instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
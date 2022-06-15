import React from 'react';

// IMG
import staff from '../../assets/footer2/Staff.svg'
import montage from '../../assets/footer2/Montage.svg'
import mobility from '../../assets/footer2/Mobility.svg'
import cart from '../../assets/footer2/Cart.svg'
// Style
import s from './Footer.module.scss'

const Footer = () => {

    const item = [
        {
            img: `${staff}`,
            title: 'Опытные сотрудники',
            text: 'В нашей команде работают профессиональные специалисты, с опытом работы от 3-х лет'
        },
        {
            img: `${montage}`,
            title: 'Монтаж "под ключ"',
            text: 'Установка любой сложности. Полупромышленные: кассетные, колонные, канальные и промышленного кондиционирования.'
        },
        {
            img: `${mobility}`,
            title: 'Мобильность',
            text: 'Бесплатный выезд замерщика в день обращения в любое удобное для Вас время по Москве и МО'
        },
        {
            img: `${cart}`,
            title: 'Любые виды оплаты',
            text: 'Наличными Банковской картой Безналичным расчётом Электронными платёжными системами'
        },
    ]
    const resultInfo = item.map((current, index) => {
        return (
            <div className={s.item} key={index}>
                <img className={s.item__img} src={current.img} alt="" />
                <h2 className={s.item__title}>{current.title}</h2>
                <p className={s.item__text}>{current.text}</p>
            </div>
        )
    })

    return (
        <div className={s.footer}>
            {resultInfo}
        </div>
    );
};

export default Footer;
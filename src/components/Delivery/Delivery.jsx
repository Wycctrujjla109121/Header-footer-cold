import React from 'react';

// COMPONENTS
import Header from './Header/Header';
import Footer from '../Footer2/Footer';
// STYLE
import s from './Delivery.module.scss'

const Delivery = () => {
    return (
        <div className={s.delivery}>
            <Header />
            <div className={s.delivery__list}>
                <div className={s.delivery__item}>
                    <h2 className={s.delivery__title}>Условия доставки</h2>
                    <div className={s.delivery__info}>
                        <p className={s.delivery__text}>Доставка собственной транспортной службой по Москве и МО, в течении 1-3 дней.</p>
                        <p className={s.delivery__text}>Стоимость доставки в пределах МКАД: 700 руб.</p>
                        <p className={s.delivery__text}>Стоимость доставки за пределы МКАД: 700 руб. + 30 руб. за каждый км от МКАД</p>
                        <p className={s.delivery__text}>Доставка осуществляется по Москве и МО до подъезда. На некоторые группы товаров действует бесплатная доставка в пределах МКАД (уточняйте у менеджеров)</p>
                        <p className={s.delivery__text}>Оплата осуществляется наличными (при получении товара), банковской картой (при заказе через сайт) и безналичным расчётом (для ИП и организаций).</p>
                    </div>
                </div>
                <div className={s.delivery__item}>
                    <h2 className={s.delivery__title}>Самовывоз</h2>
                    <div className={s.delivery__info}>
                        <p className={s.delivery__text}>Вы можете забрать свой новый кондиционер с нашего склада в Москве, по будням, с 10 до 17 часов, по предварительной договорённости.</p>
                        <p className={s.delivery__text}>Оплата осуществляется наличными (при получении товара), банковской картой (при заказе через сайт) и безналичным расчётом (для ИП и организаций)..</p>
                    </div>
                </div>
                <div className={s.delivery__item}>
                    <h2 className={s.delivery__title}>Доставка по всей России</h2>
                    <div className={s.delivery__info}>
                        <p className={s.delivery__text}>Осуществим доставку в любую точку России, транспортной компанией наиболее подходящей нашему клиенту. По желанию заказчика груз может быть обрешечен для максимальной защиты при транспортировке. Стоимость доставки по тарифам выбранной Вами транспортной компании. Доставка до транспортной компании обговаривается индивидуально с менеджером, но не может превышать 700 рублей.</p>
                        <p className={s.delivery__text}>Оплата осуществляется наличными (при получении товара), банковской картой (при заказе через сайт) и безналичным расчётом (для ИП и организаций).</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Delivery;
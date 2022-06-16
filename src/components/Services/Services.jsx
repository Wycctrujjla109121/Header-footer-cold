import React from 'react';

// COMPONENTS
import Header from './Header/Header';
import Table from './Table/Table'
import Footer from '../Footer2/Footer'

// STYLE
import s from './Services.module.scss'

const Services = () => {
    return (
        <div className={s.services}>
            <Header />
            <div className={s.services__list}>
                <h2 className={s.services__title}>Стоимость работ на установку кондиционеров (сплит системы)</h2>
                <Table />
            </div>
            <div className={s.services__info}>
                <h2 className={s.services__title}>   Услуги по установке кондиционеров и сплит-систем.</h2>
                <p className={s.services__text}><span className={s.services__text__span}>Наша</span> компания Планета Техники занимается установкой(монтажом) кондиционеров на территории квартир, офисов и частных домов, обеспечивая клиентов первоклассным сервисом на весьма выгодных условиях. Мы устанавливаем кондиционеры и мульти сплит системы – вне зависимости от их типа и особенностей конструкции. Монтаж любых моделей такого оборудования проводится в кратчайшие сроки, а главное, с соблюдением актуальных нормативов и стандартов.</p>
                <p className={s.services__text}><span className={s.services__text__span}>Поэтому</span>, если вам нужна установка кондиционера по выгодной цене в Москве , то свяжитесь с нами. Мы поможем подобрать подходящую модель техники, ориентируясь на озвученные требования и предпочтения, а затем доставим кондиционер на объект и выполним грамотный монтаж. Услуга является комплексной и, при необходимости, выполняется «под ключ». Заказчикам нужно лишь предоставить доступ к помещению, а через некоторое время оценить результаты проведенных работ.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
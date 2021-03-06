import React from 'react';

const Info = () => {
    return (
        <div className={s.info}>
            <h2 className={s.info__title}>   Услуги по установке кондиционеров и сплит-систем.</h2>
            <div className={s.info__list}>
                <p className={s.info__text}>   Наша компания Планета Техники занимается установкой(монтажом) кондиционеров на территории квартир, офисов и частных домов, обеспечивая клиентов первоклассным сервисом на весьма выгодных условиях. Мы устанавливаем кондиционеры и мульти сплит системы – вне зависимости от их типа и особенностей конструкции. Монтаж любых моделей такого оборудования проводится в кратчайшие сроки, а главное, с соблюдением актуальных нормативов и стандартов.</p>
                <p className={s.info__text}>   Поэтому, если вам нужна установка кондиционера по выгодной цене в Москве , то свяжитесь с нами. Мы поможем подобрать подходящую модель техники, ориентируясь на озвученные требования и предпочтения, а затем доставим кондиционер на объект и выполним грамотный монтаж. Услуга является комплексной и, при необходимости, выполняется «под ключ». Заказчикам нужно лишь предоставить доступ к помещению, а через некоторое время оценить результаты проведенных работ.</p>
            </div>
        </div>
    );
};

export default Info;
import React from 'react';

// Style
import s from './Table.module.scss'

const Table = () => {
    return (
        <div>
            <div className={s.table}>
                <div className={s.table__installation}>
                    <h3 className={s.table__installation__title}>Услуги по установке</h3>
                    <p className={s.table__installation__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <p className={s.table__installation__text}>Установка кондиционера (сплит системы) 12 (3-3,5КВт)</p>
                    <p className={s.table__installation__text}>Установка кондиционера(сплит системы) 15 (4-4,5КВт)</p>
                    <p className={s.table__installation__text}>Установка канального кондиционера</p>
                    <p className={s.table__installation__text}>Установка кассетного кондиционера</p>
                    <p className={s.table__installation__text}>Установка напольно-потолочного кондиционера</p>
                    <p className={s.table__installation__text}>Установка мульти сплит-системы на две комнаты</p>
                    <p className={s.table__installation__text}>Установка мульти сплит-системы на три комнаты</p>
                    <p className={s.table__installation__text}>Установка мульти сплит-системы на четыре комнаты</p>
                    <p className={s.table__installation__text}>Установка внутреннего блока кондиционера</p>
                    <p className={s.table__installation__text}>Установка наружного блока кондиционера</p>
                </div>
                <div className={s.table__price}>
                    <h3 className={s.table__price__title}>Цена</h3>
                    <p className={s.table__price__text}>8500р</p>
                    <p className={s.table__price__text}>8500р</p>
                    <p className={s.table__price__text}>13500р</p>
                    <p className={s.table__price__text}>8500р</p>
                    <p className={s.table__price__text}>8500р</p>
                    <p className={s.table__price__text}>8500р</p>
                    <p className={s.table__price__text}>18500р</p>
                    <p className={s.table__price__text}>27000р</p>
                    <p className={s.table__price__text}>38800р</p>
                    <p className={s.table__price__text}>4500р</p>
                    <p className={s.table__price__text}>6500р</p>
                </div>
                <div className={s.table__discount}>
                    <h3 className={s.table__discount__title}>Цена со скидкой</h3>
                    <p className={s.table__discount__text}>6500р</p>
                    <p className={s.table__discount__text}>9500р</p>
                    <p className={s.table__discount__text}>-</p>
                    <p className={s.table__discount__text}>-</p>
                    <p className={s.table__discount__text}>-</p>
                    <p className={s.table__discount__text}>7500р</p>
                    <p className={s.table__discount__text}>-</p>
                    <p className={s.table__discount__text}>23000р</p>
                    <p className={s.table__discount__text}>35000р</p>
                    <p className={s.table__discount__text}>3500р</p>
                    <p className={s.table__discount__text}>4500р</p>
                </div>
            </div>

            <div className={s.table700}>
                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceOld}>8500р.</p>
                        <p className={s.table700__priceNew}>6500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceNew}>8500р..</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceNew}>8500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceOld}>8500р.</p>
                        <p className={s.table700__priceNew}>6500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceNew}>8500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceOld}>8500р.</p>
                        <p className={s.table700__priceNew}>6500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceOld}>8500р.</p>
                        <p className={s.table700__priceNew}>6500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceNew}>8500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceOld}>8500р.</p>
                        <p className={s.table700__priceNew}>6500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceNew}>8500р.</p>
                    </div>
                </div>

                <div className={s.table700__item}>
                    <p className={s.table700__text}>Установка кондиционера(сплит системы) 07-09 (2-2,5КВт)</p>
                    <div className={s.table700__price}>
                        <p className={s.table700__priceNew}>8500р.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Table;
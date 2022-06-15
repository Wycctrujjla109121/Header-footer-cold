import React from 'react';

// Style
import s from './Info.module.scss'

const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.info__item}>
                <h2 className={s.info__title}>Отдел продаж</h2>
                <div className={s.info__contact}>
                    <p className={s.info__text}>+7 (495) 777 22 33</p>
                    <p className={s.info__text}>climat@mail.ru</p>
                </div>
            </div>

            <div className={s.info__item}>
                <h2 className={s.info__title}>Отдел монтажа</h2>
                <div className={s.info__contact}>
                    <p className={s.info__text}>+7 (495) 777 22 33</p>
                    <p className={s.info__text}>climat@mail.ru</p>
                </div>
            </div>

            <div className={s.info__item}>
                <h2 className={s.info__title}>Сервисный центр</h2>
                <div className={s.info__contact}>
                    <p className={s.info__text}>+7 (495) 777 22 33</p>
                    <p className={s.info__text}>climat@mail.ru</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
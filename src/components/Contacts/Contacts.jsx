import React from 'react';

// Components
import Header from './Header/Header';
import Info from './Info/Info';
import Adress from './Adress/Adress';
import Footer2 from '../Footer2/Footer';
// Style
import s from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <Header />
            <Info />
            <Adress />
            <Footer2 />
        </div>
    );
};

export default Contacts;
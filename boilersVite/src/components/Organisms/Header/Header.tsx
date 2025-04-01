import React from 'react';
import styles from './Header.module.scss';

import logo from './../../../assets/images/svg/logotype.svg'
import HeaderInfo from "../../Molecules/HeaderInfo/HeaderInfo.tsx";
const Header: React.FC = () => {
    return (
        <header className={styles.header_container} >
            <div className="logotype_container">
                <img src={logo} alt=""/>
            </div>
           <HeaderInfo/>
        </header>
    );
};

export default Header;
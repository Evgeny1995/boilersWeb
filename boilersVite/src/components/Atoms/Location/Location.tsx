import React from 'react';
import styles from './Location.module.scss'
import locSvg from './../../../assets/images/svg/location.svg'
const Location: React.FC = () => {
    return (
        <div className={styles.location_container} >
            <img className={styles.location_icon} src={locSvg} alt=""/>
            <p className={styles.location_text}>г.Ростов-на-Дону</p>
        </div>
    );
};

export default Location;
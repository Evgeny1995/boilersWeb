import React from 'react';
import phoneIcon from './../../../assets/images/svg/phone.svg';
import styles from './phone.module.scss'
const Phone:React.FC = () => {
    return (
        <div className={styles.phone_container}>
            <img className={styles.phone_svg} src={phoneIcon} alt=""/>
            <p className={styles.phone_text}>+7(988) 949-80-73</p>
        </div>
    );
};

export default Phone;
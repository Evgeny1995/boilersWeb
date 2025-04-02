import React from 'react';
import styles from './Footer.module.scss'
import logoIcon from './../../../assets/images/svg/logotype.svg'
import Phone from "../../Atoms/phone/phone.tsx";
import Location from "../../Atoms/Location/Location.tsx";
import inst from './../../../assets/images/svg/inst.svg'
const Footer:React.FC = () => {
    return (
        <footer className={styles.footer_container}>
            <img className={styles.footer_logo} src={logoIcon} alt="Логотип"/>
            <div className={styles.footer_content}>
                 <ul className={styles.footer_list}>
                     <li className={styles.item}><Location/></li>
                     <li className={styles.item}>г.Батайск</li>
                     <li className={styles.item}>г.Аксай</li>
                 </ul>
                <div className={styles.footer_contacts}>
                    <Phone/>
                    <div className={styles.footer_inst}>
                        <img src={inst} alt=""/>
                        <a href='https://www.instagram.com/gazmaster761/' className={styles.footer_inst__text}>@gazmaster761</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import styles from './HeaderInfo.module.scss'
import Location from "../../Atoms/Location/Location.tsx";
import Phone from "../../Atoms/phone/phone.tsx";
const HeaderInfo:React.FC = () => {
    return (
        <div className={styles.header_info__container}>
            <Location/>
             <Phone/>

        </div>
    );
};

export default HeaderInfo;
import React from 'react';
import styles from './HeaderInfo.module.scss'
import Location from "../../Atoms/Location/Location.tsx";
const HeaderInfo:React.FC = () => {
    return (
        <div className={styles.header_info__container}>
            <Location/>

        </div>
    );
};

export default HeaderInfo;
import React from 'react';
import styles from './Location.module.scss'
const Location: React.FC = () => {
    return (
        <div className={styles.location_container} >
            <p className={styles.location_text}>г.Ростов-на-Дону</p>
        </div>
    );
};

export default Location;
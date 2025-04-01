import React from 'react';
import styles from "./СostСalculationBtn.module.scss";

const СostСalculationBtn:React.FC = () => {
    return (
        <div>
            <button className={styles.cost_calculation__btn}>РАССЧИТАТЬ СТОИМОСТЬ РЕМОНТА</button>
        </div>
    );
};

export default СostСalculationBtn;
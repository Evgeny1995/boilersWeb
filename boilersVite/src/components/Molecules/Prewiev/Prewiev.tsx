import React from 'react';
import styles from './Prewiev.module.scss'
import boilerPreviewBg from './../../../assets/images/png/mainBoilerBg.png'
import CostCalculation from './../../Atoms/СostСalculationBtn/СostСalculationBtn'
const Prewiev:React.FC = () => {
    return (
        <section className={styles.prewiev_container}>
            <div className={styles.prewiev_container__bg}>
                <div className={styles.prewiev_container__content}>
                    <h2 className={styles.prewiev_title__first}>
                        РЕМОНТ ГАЗОВЫХ КОТЛОВ В Г. РОСТОВЕ-НА-ДОНУ
                    </h2>
                    <p className={styles.prewiev_title__second}>с гарантией качества</p>
                    <ul className={styles.prewiev_list}>
                        <li className={styles.prewiev_item}>НИЗКИЕ ЦЕНЫ</li>
                        <li className={styles.prewiev_item}>СРОЧНЫЙ РЕМОНТ</li>
                        <li className={styles.prewiev_item}>ДЕТАЛИ ОТ ЗАВОДА ИЗГОТОВИТЕЛЯ</li>
                    </ul>
                    <CostCalculation/>
                </div>
                <img className={styles.prewiev_boilers__bg} src={boilerPreviewBg} alt=""/>
            </div>
        </section>
    );
};

export default Prewiev;
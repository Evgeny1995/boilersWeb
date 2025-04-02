import React from 'react';
import styles from './UrgentСall.module.scss'
import UrgentCallForm from "../UrgentCallForm/UrgentCallForm.tsx";
const UrgentСall:React.FC = () => {
    return (
        <section className={styles.urgent_call__container}>
            <h3 className={styles.urgent_call__title}>СРОЧНЫЙ ВЫЗОВ МАСТЕРА</h3>
            <UrgentCallForm/>
        </section>
    );
};

export default UrgentСall;
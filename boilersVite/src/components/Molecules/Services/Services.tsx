import React from 'react';
import styles from './Services.module.scss'
import ServicesList from "../ServicesList/ServicesList.tsx";
const Services:React.FC = () => {
    return (
        <section className={styles.services_container}>
            <h3 className={styles.services_title}>Услуги, которые мы предоставляем</h3>
            <ServicesList/>
        </section>
    );
};

export default Services;
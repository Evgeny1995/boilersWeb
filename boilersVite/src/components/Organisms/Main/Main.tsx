import React from 'react';
import styles from './Main.module.scss'
import Preview from "../../Molecules/Prewiev/Prewiev.tsx";
import Services from "../../Molecules/Services/Services.tsx";
import WhyWe from "../../Molecules/WhyWe/WhyWe.tsx";
import BoilersMakers from "../../Molecules/BoilersMakers/BoilersMakers.tsx";
const Main:React.FC = () => {
    return (
        <main className={styles.main_container}>
            <Preview/>
            <Services/>
            <WhyWe/>
            <BoilersMakers/>
        </main>
    );
};

export default Main;
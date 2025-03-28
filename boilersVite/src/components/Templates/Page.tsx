import React from 'react';
import Header from "../Organisms/Header/Header.tsx";
import styles from './Page.module.scss'

const Page: React.FC = () => {
    return (
        <div className={styles.page_container}>
            <Header/>
        </div>
    );
};

export default Page;
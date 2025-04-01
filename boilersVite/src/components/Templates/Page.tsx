import React from 'react';
import Header from "../Organisms/Header/Header.tsx";
import styles from './Page.module.scss'
import Main from "../Organisms/Main/Main.tsx";

const Page: React.FC = () => {
    return (
        <div className={styles.page_container}>
            <Header/>
            <Main/>
        </div>
    );
};

export default Page;
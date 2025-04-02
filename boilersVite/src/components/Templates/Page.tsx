import React from 'react';
import Header from "../Organisms/Header/Header.tsx";
import styles from './Page.module.scss'
import Main from "../Organisms/Main/Main.tsx";
import Footer from "../Organisms/Footer/Footer.tsx";

const Page: React.FC = () => {
    return (
        <div className={styles.page_container}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
};

export default Page;
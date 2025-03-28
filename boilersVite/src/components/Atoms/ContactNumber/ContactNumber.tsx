import React from 'react';
import styles from './ContactNumber.module.scss'

const ContactNumber:React.FC = () => {
    return (
        <div className={styles.number_container}>
            <p className={styles.number_text}>+7(988) 949-80-73</p>
        </div>
    );
};

export default ContactNumber ;
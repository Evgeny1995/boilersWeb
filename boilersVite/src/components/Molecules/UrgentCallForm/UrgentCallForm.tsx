import React from 'react';
import styles from './UrgentCallForm.module.scss'
const UrgentCallForm:React.FC = () => {
    return (
        <form className={styles.urgent_call__form}>
            <p className={styles.form_description}>Заполните заявку и мы свяжемся с Вами в ближайшее время!</p>
            <div className={styles.input_container}>
                <input className={styles.name} type="text" placeholder='Ваше имя'/>
                <input className={styles.phone} type="text" placeholder='Ваш телефон'/>
            </div>
            <div className={styles.checkbox_container}>
                <input   className={styles.checkbox} type="checkbox"/>
                <p className={styles.checkbox_description}>Нажимая на кнопку, вы даёте <span>согласие на обработку персональных данных</span></p>
            </div>
            <button className={styles.form_submit}>ОТПРАВИТЬ ЗАЯВКУ</button>
        </form>
    );
};

export default UrgentCallForm;
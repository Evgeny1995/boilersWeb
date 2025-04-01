import React from 'react';
import styles from './BoilersMakers.module.scss'
import img1 from "../../../assets/images/png/makersList/1.png";
import img2 from "../../../assets/images/png/makersList/2.png";
import img3 from "../../../assets/images/png/makersList/3.png";
import img4 from "../../../assets/images/png/makersList/4.png";
import img5 from "../../../assets/images/png/makersList/5.png";
import img6 from "../../../assets/images/png/makersList/6.png";
import img7 from "../../../assets/images/png/makersList/7.png";
import img8 from "../../../assets/images/png/makersList/8.png";
import img9 from "../../../assets/images/png/makersList/9.png";
 const BoilersMakers:React.FC = () => {
    const boilersMakersListData = [
        { img:img1, title: "Установка дымохода"},
        { img:img2, title: "Пусконаладка котла"},
        { img:img3, title: "Замена котла,АОГВ"},
        { img:img4, title: "Промывка теплообменика"},
        { img:img5, title: "Техническое обслуживание"},
        { img:img6, title: "Ремонт котла"},
        { img:img7, title: "Ремонт платы управления или замена"},
        { img:img8, title: "Чистка котла от сажи"},
        { img:img9, title: "Замена плиты"}
    ]
    return (
        <section className={styles.boilers_makers__container}>
            <h3 className={styles.boilers_makers__title}>С котлами каких производителяй мы работаем</h3>
            <ul className={styles.boilers_makers__list}>
                {boilersMakersListData.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <img className={styles.item_img} src={item.img} alt={item.title} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BoilersMakers;
import React from 'react';
import styles from './WhyWe.module.scss'
import img1 from "../../../assets/images/svg/whyWeList/1.svg";
import img2 from "../../../assets/images/svg/whyWeList/2.svg";
import img3 from "../../../assets/images/svg/whyWeList/3.svg";

const WhyWe:React.FC = () => {
    const whyWeListData = [
        { img:img1, title: "Низкие цены",text: 'Гарантируем самые низкие цены и высокое качество услуг.'},
        { img:img2, title: "Срочный ремонт",text: 'Мастер приезжает в день обращения и производит ремонт оборудования сразу.'},
        { img:img3, title: "Детали от заводы",text: 'Благодаря чему в наличии все запчасти, ремонтируем котлы даже в сложных случаях.'},
    ];
    return (
        <div className={styles.whyWe_container}>
            <h3 className={styles.whyWe_title}>Почему мы?</h3>
            <ul className={styles.whyWe_list}>
                {whyWeListData.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <div className={styles.item_title_position}>
                            <h4 className={styles.item_styles_title}>{item.title}</h4>
                            <img className={styles.item_img} src={item.img} alt={item.title} />
                        </div>
                        <p className={styles.item_text}>{item.text}</p>
                    </li>
                ))}


            </ul>
        </div>
    );
};

export default WhyWe;
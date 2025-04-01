import React from 'react';
import img1 from './../../../assets/images/png/servicesList/1.png'
import img2 from './../../../assets/images/png/servicesList/2.png'
import img3 from './../../../assets/images/png/servicesList/3.png'
import img4 from './../../../assets/images/png/servicesList/4.png'
import img5 from './../../../assets/images/png/servicesList/5.png'
import img6 from './../../../assets/images/png/servicesList/6.png'
import img7 from './../../../assets/images/png/servicesList/7.png'
import img8 from './../../../assets/images/png/servicesList/8.png'
import img9 from './../../../assets/images/png/servicesList/9.png'
import img10 from './../../../assets/images/png/servicesList/10.png'
import img11 from './../../../assets/images/png/servicesList/11.png'
import img12 from './../../../assets/images/png/servicesList/12.png'
import styles from './ServicesList.module.scss'
import CostCalculation from './../../Atoms/СostСalculationBtn/СostСalculationBtn'

const ServicesList:React.FC = () => {
    const servicesListData = [
        { img:img1, title: "Установка дымохода"},
        { img:img2, title: "Пусконаладка котла"},
        { img:img3, title: "Замена котла,АОГВ"},
        { img:img4, title: "Промывка теплообменика"},
        { img:img5, title: "Техническое обслуживание"},
        { img:img6, title: "Ремонт котла"},
        { img:img7, title: "Ремонт платы управления или замена"},
        { img:img8, title: "Чистка котла от сажи"},
        { img:img9, title: "Замена плиты"},
        { img:img10, title: "алмазное бурение"},
        { img:img11, title: "установка колонки"},
        { img:img12, title: "выезд и диагностика"},
    ];

    return (
        <div className={styles.services_list__container}>
            <ul className={styles.services_list}>
                {servicesListData.map((item, index) => (
                    <li className={styles.item} key={index}>
                        <img className={styles.item_img} src={item.img} alt={item.title} />
                        <p className={styles.item_text}>{item.title}</p>
                        <div className={styles.item_btn__position}>
                            <CostCalculation/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ServicesList;
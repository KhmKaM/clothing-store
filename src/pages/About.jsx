import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";

const About = () => {
    return (<div className="section-wrapper">
       <div className="btn-wrapper"><button><Link to="/" className="btn">Вернуться на главную</Link></button></div>
        <div className="wrapper">
            <h1 className="about">Про нас</h1>
            <p>В магазине одежды <b className="brand">Closing-Store</b> мы предлагаем широкий выбор актуальных трендов и модных новинок.</p>
            <p>Наша коллекция охватывает все популярные стили и размеры. Наши дизайнеры и производители постоянно предлагают нам новые идеи и модели, поэтому вы всегда найдете именно то, что ищете. Мы предлагаем отличный качество одежды по доступной цене, чтобы вы могли выглядеть красиво и элегантно. Наша цель - помочь вам представить свою индивидуальность и выразить свои чувства и мысли с помощью одежды. Мы стремимся предоставить вам лучший выбор одежды и помочь вам создать идеальный образ.</p>
            <p>Подписывайтесь на нашу группу в Facebook <a href="#"><FaFacebookSquare/></a>,
            чтобы не пропускать интересные статьи, а также обзоры полезных сервисов</p>
        </div>
        <div className="image-img"></div>
    </div>)
};

export default About;
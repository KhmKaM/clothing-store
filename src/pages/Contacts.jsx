import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaEnvelopeOpenText, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
    return (<div className="section-wrapper">
        <div className="btn-wrapper"><button><Link to="/" className="btn">Вернуться на главную</Link></button></div>
        <div className="wrapper">
        <h1>Контакты</h1>
            <div className="contacts">
                <p>Вы всегда можете обратиться к нам по телефону</p>
                <a className="mobile" href="tel:8999000000">
                <FaMobileAlt/> 8 (999) 00-00-00</a>
                <a href="#"><FaWhatsapp/> WHATSAPP </a>
                <p>или написать на электронную почту</p>
                <a className="mail" href="mailto:hordog.ru@gmail.com">
                <FaEnvelopeOpenText/> clothing-store.ru@gmail.com</a>
            </div>
            <div className="line-hr"></div>
            <h2>АДРЕСА ТОЧЕК ПРОДАЖ OFFLINE</h2>
            <div className="contact_city">
                <FaMapMarkerAlt/> МОСКВА
            </div>
            <div>
                <p>
                    <b>МАГАЗИН</b>
                    &nbsp;(ст. метро "Красные ворота")
                    <br/>Садовая-Спасская ул., 21/1
                    <br/>Пн-пт: 09.00 – 21.00
                    <br/>Сб-вс: 10.00 – 21.00
                </p>
            </div>
            <div className="contact_city">
                <FaMapMarkerAlt/> КАЗАНЬ
            </div>
            <div>
                <p>
                    <b>ТЦ Республика</b>
                    &nbsp;(ст. метро "Площадь Габдуллы Тукая")
                    <br/>Петербургская ул., 1
                    <br/>Пн-пт: 09.00 – 21.00
                    <br/>Сб-вс: 10.00 – 21.00
                </p>
            </div>
    </div>
    </div>
    )
};

export default Contacts;
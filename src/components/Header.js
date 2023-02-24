import React, { useState } from 'react';
import {FaShoppingCart} from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    let sum = 0;
    props.orders.forEach(el => sum += el.price)
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
        ))}
        <p className='sum'>Итого: {sum} ₽</p>
    </div>)
}

const showNoting = () => {
    return( <div className='empty'>
        <h2>Товаров нет</h2>
    </div>)
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);
    
    return (
        <header>
            <div>
                <span className='logo'>Clothing Store</span>
                <ul className='nav'>
                    <li><a href="/about">Про нас</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                    <li><a href="/profile">Кабинет</a></li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ?
                            showOrders(props) : showNoting()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    )
}

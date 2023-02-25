import React, { Component } from 'react'

export class CardItem extends Component {
    render() {
        return (
        <div className='full-item'>
            <div>
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onCardItem(this.props.item)}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price} ₽</b>
                <p className='description'>{this.props.item.desc}</p>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        </div>
        )
    }
}

export default CardItem
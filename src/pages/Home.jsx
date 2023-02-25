import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer";
import Items from "../components/Items";
import Categories from "../components/Categories";
import CardItem from "../components/CardItem";
import { data } from "../data";

class Home extends React.Component {
  constructor(props) {
    super(props)
    const cashedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    this.state = {
      orders: cashedOrders,
      currentItems: [],
      items: data,
      cardItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onCardItem = this.onCardItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onCardItem={this.onCardItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.cardItem && <CardItem onAdd={this.addToOrder} onCardItem={this.onCardItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
}

onCardItem(item) {
  this.setState({fullItem: item})
  this.setState({cardItem: !this.state.cardItem})
}

chooseCategory(category) {
  if (category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  const updateArray = this.state.orders.filter(el => el.id !== id);
  this.setState({orders: updateArray})
  localStorage.setItem('orders', JSON.stringify(updateArray));
}

addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true;
    })
    if (!isInArray)
      this.setState({orders: [...this.state.orders, item] })
      localStorage.setItem('orders', JSON.stringify([...this.state.orders, item]));
  }
}

export default Home;

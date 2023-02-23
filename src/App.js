import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import CardItem from "./components/CardItem";

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        orders: [],
        currentItems: [],
        items: [
          {
            id:1,
            title: 'test product',
            price: 2300,
            desc: 'lorem ipsum set',
            img: '1.jpg',
            category: 'outerwear'
          },
          {
            id:2,
            title: 'test product',
            price: 400,
            desc: 'lorem ipsum set',
            img: '2.jpg',
            category: 'singlet'
          },
          {
            id:3,
            title: 'test product',
            price: 500,
            desc: 'lorem ipsum set',
            img: '3.jpg',
            category: 'singlet'
          },
          {
            id:4,
            title: 'test product',
            price: 1300,
            desc: 'lorem ipsum set',
            img: '4.jpg',
            category: 'pants'
          },
          {
            id:5,
            title: 'test product',
            price: 1500,
            desc: 'lorem ipsum set',
            img: '5.jpg',
            category: 'pants'
          },
          {
            id:6,
            title: 'test product',
            price: 1000,
            desc: 'lorem ipsum set',
            img: '6.jpg',
            category: 'skirt'
          }
        ],
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
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
      let isInArray = false;
      this.state.orders.forEach(el => {
        if (el.id === item.id)
          isInArray = true;
      })
      if (!isInArray)
        this.setState({orders: [...this.state.orders, item] })
    }
}

export default App;

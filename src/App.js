import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [
          {
            id:1,
            title: 'test product',
            price: 2300,
            desc: 'lorem ipsum set',
            img: '1.jpg',
            category: 'cloth'
          },
          {
            id:2,
            title: 'test product',
            price: 400,
            desc: 'lorem ipsum set',
            img: '2.jpg',
            category: 'cloth'
          },
          {
            id:3,
            title: 'test product',
            price: 500,
            desc: 'lorem ipsum set',
            img: '3.jpg',
            category: 'cloth'
          },
          {
            id:4,
            title: 'test product',
            price: 1300,
            desc: 'lorem ipsum set',
            img: '4.jpg',
            category: 'cloth'
          },
          {
            id:5,
            title: 'test product',
            price: 1500,
            desc: 'lorem ipsum set',
            img: '5.jpg',
            category: 'cloth'
          }
        ]
      }
    }
    render() {
      return (
        <div className="wrapper">
          <Header/>
          <Items items={this.state.items}/>
          <Footer/>
        </div>
      );
  }
}

export default App;

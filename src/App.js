import React, { Component } from "react";
import "./App.css";
import { Homepage } from "./pages/homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Neolithic from "./pages/productpages/neolithic";
import Bronze from "./pages/productpages/bronze";
import { Route, BrowserRouter } from "react-router-dom";
import Iron from "./pages/productpages/iron";
import Roman from "./pages/productpages/roman";
import Medieval from "./pages/productpages/medieval";
import Renaissance from "./pages/productpages/Renaissance";
import Archery from "./pages/bigitempages/archery";
import Armor from "./pages/bigitempages/armor";
import Shields from "./pages/bigitempages/shields";
import Swords from "./pages/bigitempages/swords";
import Cart from "./pages/productpages/cart";
import Thing from "./pages/navbar";
import Form from "./pages/form";
import { Footer } from "./pages/footer";
import { About } from "./pages/about";

class App extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      cart: [],
      total: 0,
      newCart: []
    };
  }

  addToCart({ title, desc, price, image, id }) {
    this.setState({
      cart: [
        ...this.state.cart,

        {
          id,
          title,
          desc,
          price,
          image,
        },
      ],
      total: this.state.total + price,
    });
  }
  // the item id and price
  
   
 // the item id and price
 Removefromcart = ( id, price ) => {
 this.setState(state => ({
    cart: this.state.cart.filter(e => id !== id),

    total: state.total - price
  }));
};

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Thing cart={this.state.cart} />
          {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
          <Route exact path="/" component={Homepage} />
          <Route
            path="/Neolithic"
            render={(props) => (
              <Neolithic {...props} addToCart={this.addToCart} />
            )}
          />
          <Route
            path="/Bronze"
            render={(props) => <Bronze {...props} addToCart={this.addToCart} />}
          />
          <Route
            path="/Iron"
            render={(props) => <Iron {...props} addToCart={this.addToCart} />}
          />
          <Route
            path="/Roman"
            render={(props) => <Roman {...props} addToCart={this.addToCart} />}
          />
          <Route
            path="/Medieval"
            render={(props) => (
              <Medieval {...props} addToCart={this.addToCart} />
            )}
          />
          <Route
            path="/Renaissance"
            render={(props) => (
              <Renaissance {...props} addToCart={this.addToCart} />
            )}
          />

          <Route
            path="/Archery"
            render={(props) => (
              <Archery {...props} addToCart={this.addToCart} />
            )}
          />
          <Route
            path="/armor"
            render={(props) => <Armor {...props} addToCart={this.addToCart} />}
          />
          <Route
            path="/Shields"
            render={(props) => (
              <Shields {...props} addToCart={this.addToCart} />
            )}
          />
          <Route
            path="/Swords"
            render={(props) => <Swords {...props} addToCart={this.addToCart} />}
          />
          <Route
            path="/Cart"
            render={(props) => (
              <Cart
                {...props}
                cart={this.state.cart}
                Removefromcart={this.Removefromcart}
                total={this.state.total}
              />
            )}
          />
          <Route path="/Sell" component={Form} />
          <Route path="/About" component={About} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

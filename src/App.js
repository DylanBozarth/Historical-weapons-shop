import React, { Component } from 'react';
import './App.css';
import { Homepage } from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Neolithic from './pages/productpages/neolithic'
import Bronze from './pages/productpages/bronze'
import { Route, BrowserRouter } from "react-router-dom";
import Iron from './pages/productpages/iron';
import Roman from './pages/productpages/roman';
import Medieval from './pages/productpages/medieval';
import Renaissance from './pages/productpages/Renaissance';
import Archery from './pages/bigitempages/archery';
import Armor from './pages/bigitempages/armor';
import Shields from './pages/bigitempages/shields';
import Swords from './pages/bigitempages/swords';
import Cart from './pages/cart';
import Thing from './pages/navbar';
import Form from './pages/form';
import {Footer} from './pages/footer';
import { About } from './pages/about';



class App extends Component {
  state = { 
    cartAmount: 0,
    cart: [],
total: 0
   }
// serviceitems object, destructuring out the properties
addToCart({ title, desc, price, image }) {
  // using an updater function
  this.setState(state => ({
    cart: [
      ...this.state.cart,
      {
        title,
        desc,
        price,
        image
      }
    ],
    // item price + current state total
    total: state.total + price
  }));
  

}
   increasecart = () => {
    this.setState({cartAmount: this.state.cartAmount +1})
   }
  render() { 
    return ( <BrowserRouter>
      <div className="App">
        <Thing cartAmount={this.state.cartAmount} />
        {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
        <Route exact path="/" component={Homepage} />
        <Route
              path="/Neolithic"
              render={props => (
                <Neolithic
                  {...props}
                 cartAmount={this.state.cartAmount}
                 increasecart={this.increasecart}
                />
              )}
            />
        <Route path="/Bronze" component={Bronze} />
        <Route path="/Iron" component={Iron} />
        <Route path='/Roman' component={Roman} />
        <Route path='/Medieval' component={Medieval} /> 
        <Route path="/Renaissance" component={Renaissance} />
        <Route path="/archery" component={Archery} />
        <Route path="/armor" component={Armor} />
        <Route path="/shields" component={Shields} />
        <Route path="/swords" component={Swords} />
        <Route
              path="/Cart"
              render={props => (
                <Cart
                  {...props}
                 cartAmount={this.state.cartAmount}
                />
              )}
            />
        <Route path="/Sell" component={Form} />
        <Route path="/About" component={About} />
        <Footer />
       
      </div>
      </BrowserRouter> );
  }
}
 
export default App;
 

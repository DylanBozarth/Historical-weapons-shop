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
import {Thing} from './pages/navbar';


class App extends Component {
  state = { 
    cartAmount: 0
   }
  render() { 
    return ( <BrowserRouter>
      <div className="App">
        <Thing cart={this.state.cartAmount} />
        {/*<i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
        <Route exact path="/" component={Homepage} />
        <Route path="/Neolithic" component={Neolithic} />
        <Route path="/Bronze" component={Bronze} />
        <Route path="/Iron" component={Iron} />
        <Route path='/Roman' component={Roman} />
        <Route path='/Medieval' component={Medieval} /> 
        <Route path="/Renaissance" component={Renaissance} />
        <Route path="/archery" component={Archery} />
        <Route path="/armor" component={Armor} />
        <Route path="/shields" component={Shields} />
        <Route path="/swords" component={Swords} />
        <Route path="/Cart" component={Cart} />
      </div>
      </BrowserRouter> );
  }
}
 
export default App;
 

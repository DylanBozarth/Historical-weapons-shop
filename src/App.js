import React from 'react';
import './App.css';
import { Homepage } from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Neolithic} from './pages/productpages/neolithic'
import {Bronze} from './pages/productpages/bronze'
import { Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/Neolithic" component={Neolithic} />
      <Route path="/Bronze" component={Bronze} />
    </div>
    </BrowserRouter>
  );
}

export default App;

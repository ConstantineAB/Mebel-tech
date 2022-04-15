import React from 'react';
import Home from './pages/Home';
import {Route} from 'react-router-dom';
import Futter from './componets/Futter';
import Header from './componets/Header';

import './css/App.css';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';


function App() {
    
  return (
      <div className="wrapper"> 
        <Header />
            <Route path="/all" component={AllProducts} exact />
            <Route path="/" component={Home} exact />
            <Route path="/cart" component={Cart} exact />
        <Futter />
      </div>
  ); 
}

export default App;
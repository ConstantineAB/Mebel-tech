import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Futter from './componets/Futter';
import Header from './componets/Header';

import './css/App.css';
import AllProducts from './pages/AllProducts';
import { useDispatch } from 'react-redux';
import Cart from './pages/Cart';



const App = () => {
   
  

  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Routes> 
            <Route path='/' element={ <Home /> } />
            <Route path='/all' element={ <AllProducts /> } />
            <Route path='/cart' element={ <Cart /> } />
          </Routes>
        <Futter />
      </div>
    </Router>
  );
}

export default App;
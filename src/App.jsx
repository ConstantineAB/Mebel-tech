import React from 'react';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Futter from './componets/Futter';
import Header from './componets/Header';

import './css/App.css';
import AllProducts from './pages/AllProducts';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/actions/products';
import Cart from './pages/Cart';



const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3001/db.json').then(({ data }) => {
      dispatch(setProducts(data.products));
    })
  }, [])

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
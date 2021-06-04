import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import ItemDetailContainer from './container/ItemDetailContainer'
import ItemListContainer from './container/ItemListContainer';
import CartListContainer from './container/CartListContainer'
import Footer from './components/Footer'
import { ShoppingCart } from './context/cartContext'
import Contacto from './components/Contacto'
import { CheckOutContainer } from './container/CheckOutContainer'


function App() {
  return (
  <ShoppingCart>
    <BrowserRouter>
        <NavBar/>
      <Switch>
      <Route path="/category/:categoryId">
        <ItemListContainer/>
      </Route>
      <Route path='/item/:id'>
        <ItemDetailContainer/>
      </Route>
      <Route path='/contacto'>
        <Contacto/>
      </Route>
      <Route path='/carrito'>
        <CartListContainer/>
      </Route>
      <Route path='/'>
        <ItemListContainer/>
      </Route>
      <Route path='/CheckOutContainer'>
        <CheckOutContainer/>
      </Route>
      </Switch>
        <Footer/>
    </BrowserRouter>
  </ShoppingCart>
  );
}

export default App;

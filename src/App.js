import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer'
import Footer from './components/Footer'
import { CartProvider } from './context/cartContext'
import Cart from './components/Cart/Cart';
import Contacto from './components/Contacto'

function App() {
  return (
  <CartProvider>
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
      <Route exact path='/Cart'>
        <Cart/>
      </Route>
      <Route path='/'>
        <ItemListContainer/>
      </Route>
      </Switch>
        <Footer/>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;

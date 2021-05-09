import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './container/ItemDetailContainer'
import Footer from './container/Footer'

function App() {
  
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
      <Route path="/category/:categoryId">
          <ItemListContainer/>
        </Route>
        <Route path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
        <Route path='/'>
          <ItemListContainer/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer';
import  { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-Header">
        <NavBar/>
      </header>
      <Switch>
        <Route path='item/1'>
        </Route>
        <Route exact path='item/2'>
        </Route>
      <ItemListContainer/>
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

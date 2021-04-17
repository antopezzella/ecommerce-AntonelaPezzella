import logo from './logo.svg';
import './App.css';
import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import ItemListContainer from './container/ItemListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <NavBar/>
      </header>
      <ItemListContainer greeting="¡Bienvenidos!" />
    </div>
  );
}

export default App;

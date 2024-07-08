import React from 'react';
import './App.css'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget'; 
import Item from './components/Item'; 
import ItemCount from './components/ItemCount'; 
import ItemDetail from './components/ItemDetail'; 
import ItemDetailContainer from './components/ItemDetailContainer'; 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bem-vindo à DomChiQ!" />
    </div>
  );
}

export default App;

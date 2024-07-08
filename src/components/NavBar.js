import React from 'react';
import CartWidget from './CartWidget'; 

const NavBar = () => {
  return (
    <nav id="menu">
      <a><img id="logo" src="#" alt="Logo da loja"/></a>
      <div className="navigation">
        <ul>
          <li className="list ativo">
            <a href="#">
              <span className="icon"><i className="#"></i></span>
              <span className="text">Início</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon"><i className="#"></i></span>
              <span className="text">Camisetas</span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon"><i className="#"></i></span>
              <span className="text">Carrinho</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <input type="text" id="search-input" placeholder="Pesquisar..."/>
        <CartWidget /> 
      </div>
    </nav>
  );
};

export default NavBar;
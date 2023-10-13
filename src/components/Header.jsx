import React, { useState } from "react";
import {BsFillTrash3Fill} from "react-icons/bs";

export default function Header () {
  let[cartOpen,setCartOpen]=useState(false);

  return(
    <header className="header">
      <nav className="navigation">
        <div className="logo-div">
          <span className="logo">Logo</span>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item"><a href="#" className="list-item-link">О нас</a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link">Контакты</a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link">Кабинет</a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link">Скачать прайс</a></li>
        </ul>
        <BsFillTrash3Fill  onClick={()=>setCartOpen(cartOpen=!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        <div className="presentation"></div>
      </nav>
    </header>
  );
}
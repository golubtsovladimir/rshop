import React, { useState } from "react";
import {BsFillTrash3Fill} from "react-icons/bs";
import Order from "./Order";

const showOrders=(props)=> {
  let summa=0;
  props.orders.forEach(el =>summa +=Number.parseFloat(el.price));
  return(
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el}/>
      ))}
      <p className="summa">К оплате: <span className="price">{new Intl.NumberFormat()}</span></p>
    </div>
  );
}

const showNothing=()=> {
  return(
    <div className="empty">
      <p>В корзине товары отсутствуют</p>
    </div>
  );
}

export default function Header (props) {
  let[cartOpen,setCartOpen]=useState(false);

  return(
    <header className="header">
      <nav className="navigation">
        <div>
          <span className="logo">Logo</span>
          <ul className="nav-list">
            <li className="nav-list-item"><a href="#" className="list-item-link">О нас</a></li>
            <li className="nav-list-item"><a href="#" className="list-item-link">Контакты</a></li>
            <li className="nav-list-item"><a href="#" className="list-item-link">Кабинет</a></li>
            <li className="nav-list-item"><a href="#" className="list-item-link">Скачать прайс</a></li>
          </ul>
          <BsFillTrash3Fill  onClick={()=>setCartOpen(cartOpen=!cartOpen)} 
          className={`shop-cart-button ${cartOpen && 'active'}`}/> 
          
          {cartOpen && (
            <div className="shop-cart">
              {props.orders.length>0 ?
                showOrders(props) : showNothing()
              }         
            </div>
          )}
        </div>
        <div className="presentation"></div>
      </nav>
    </header>
  );
}
import React from "react";

export default function Header () {
  return(
    <header className="header">
      <nav className="navigation">
        <div className="logo-div">
          <span className="logo">Logo</span>
        </div>
        <ul className="nav-list">
          <li className="nav-list-item"><a href="#" className="list-item-link">Про нас</a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link">Контакты</a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link">Кабинет</a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link"></a></li>
          <li className="nav-list-item"><a href="#" className="list-item-link"></a></li>
        </ul>
        <div className="presentation">
          <img src="" alt="" />
        </div>
      </nav>
    </header>
  );
}
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="header __container __container__main">
          <div className="nav">
              <NavLink to="/">
                <div className="logo">Mebel-tech</div>
              </NavLink>
              <div className="top-nav nav__container">
                  <ul className="nav-list nav__container">
                  <NavLink to="/"><li className="nav-list_item">Главная</li></NavLink>
                      <li className="nav-list_item">О нас</li>
                      <li className="nav-list_item"><NavLink to="/all">Все товары</NavLink></li>
                      {/*<li className="nav-list_item">faqs</li>*/}
                      <li className="nav-list_item">Контакты</li>
                  </ul>
                  <div className="icon-nav nav__container">
                      <div className="basket">
                        <NavLink to="/cart"><div className="basket__number">2</div>
                        <img src="img/basket.svg" /></NavLink>
                      </div>
                      <div>
                          <img src="img/person.svg" />
                      </div>
                  </div>
              </div>
          </div>
        </header>
    </div>
  )
}

export default Header
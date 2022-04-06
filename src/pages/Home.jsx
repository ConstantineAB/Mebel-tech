import React from 'react';
import ProductСard from '../componets/ProductСard/ProductСard';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'



const Home = () => {
    const { items } = useSelector(({ products, filters }) => {
        return {
          items: products.items
        }
    });
    
return (
    <div>
        <header className="header__content __container">
              <div className="header__text-content">
                <p className="header__text-content__title">
                    Магазин Mebel-tech<br />
                    Современная мебель
                </p>

                  <p className="header__text-content__text">
                      
                      <p>Качественная мебель от производителей для вас и ваших<br />
                      близких с доставкой по всей Нижегородской области</p>
                    </p>

                  <p className="header__text-content__text">
                    Сервис для поиска и сравнения мебели. На нашем<br />
                    сайте Вы выбираете товары из числа практически<br />
                    всех российских производителей мебели.

                  </p>
                  <NavLink to="/all"><button className="header__text-content-1">Все товары</button></NavLink>
                  <a href="#categories"><button className="header__text-content-2">Категории</button></a>
              </div>
      </header>

      <section className="section__clients __container__main">
          <div className="section__clients-container">
              <p className="section__clients-container__title">Mebel-tech это</p>
              <div className="section__clients-container__images">
                  <p>Быстрая доставка</p>
                  <p>Гарантия качества</p>
                  <p>Более 11-ти лет опыта на рынке</p>

              </div>
          </div>
      </section>

      <section className="section__categories __container__main">
              <div className="furniture__collection__1__container">
                  <div className="furniture__collection__1-text__container">
                      <div className="furniture__collection__1-title">
                          <p>Модная<br />
                          мебель</p>
                      </div>
                  </div>
                  <div className="furniture__collection__1-img">
                  </div>
              </div>
              <div className="furniture__collection__2__container">
                  <div className="furniture__collection__2-text__container">
                      <div className="furniture__collection__2-title">
                            <p>Больничная<br />
                            мебель</p>
                        </div>
                    </div>
                    <div className="furniture__collection__2-img">
                    </div>
                </div>
        </section>

        <section className="section__products __container">
            <div className="section__products__container">
                <div className="section__products__nav">
                    <div className="section__products__nav__top">
                        <span className="section__products__nav__top__left">
                            <span className="section__products__nav__top__left-title">Категории</span>
                        </span>
                        <span className="section__products__nav__top__see-all">
                            <NavLink to="/all">
                                <span>Посмотреть все</span>
                                <img src="img/Arrow.svg" />
                            </NavLink>
                        </span>
                    </div>
                </div>

                <a name="categories"></a>
                <div className="section__products__cards__container">
                    {items.map((obj) => (
                        <ProductСard key={obj.id} {...obj} />
                    ))}
                </div>
                 
          </div>
      </section>
    </div>
  );
}




export default Home;
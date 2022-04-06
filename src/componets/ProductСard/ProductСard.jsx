import React from 'react';
import './ProductСard.css'

const ProductСard = ({name, price, imageUrl}) => {

  return ( 
       <div className="section__products__cards">
          <div className="section__products__cards__button">
              <p>В корзину</p>
              <div className="section__products__cards__basket-img" >
                  <img src="img/basket.svg" />
              </div>
          </div>
          <div className="section__products__cards__title">
              <p>{name}</p>
          </div>
          <div className="section__products__cards__price">
              <span>{price}р</span>
          </div>
          <div className="section__products__cards__img">
              <img src={imageUrl} />
          </div>
      </div>
  )
}

export default ProductСard;
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../Button';
import classNames from 'classnames';
import { convertCompilerOptionsFromJson } from 'typescript';
        

const ProductBlock = ({ id, name, price, imageUrl, types, sizes, onClickAddProducts, addedCount }) => {

const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];
  
const [activeType, setActiveType] = React.useState(types[0]);
const [activeSize, setActiveSize] = React.useState(0);
  
const onSelectType = (index) => {
    setActiveType(index);
};
  
const onSelectSize = (index) => {
    setActiveSize(index);
};
  
const onAddProduct = () => {
    const obj = {
        id,
        name,
        imageUrl,
        price,
        size: availableSizes[activeSize],
        type: availableTypes[activeType],
    };
    onClickAddProducts(obj);
};
    return ( 
            <div className="section__products__cards">
                <div className="pizza-block__selector">
                <ul>
                {availableTypes.map((type, index) => (
                    <li
                    key={type}
                    onClick={() => onSelectType(index)}
                    className={classNames({
                        active: activeType === index,
                        disabled: !types.includes(index),
                    })}>
                    {type}
                    </li>
                ))}
                </ul>
                <ul>
                {availableSizes.map((size, index) => (
                    <li
                    key={size}
                    onClick={() => onSelectSize(index)}
                    className={classNames({
                        active: activeSize === index,
                        disabled: !sizes.includes(size),
                    })}>
                    {size} см.
                    </li>
                ))}
                </ul>
            </div>
          <Button onClick={onAddProduct} className="section__products__cards__button" outline>
              <p>В корзину</p>
              <div className="section__products__cards__basket-img" >
                {addedCount && <i>{addedCount}</i>}
              </div>
          </Button>
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

ProductBlock.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    onAddProduct: PropTypes.func,
    addedCount: PropTypes.number
};
  
ProductBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
};

export default ProductBlock;
import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
      setActiveItem(index);
      onClickItem(index);
    }

  console.log('RERENDER')

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'activeItem' : ''} onClick={() => onSelectItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'activeItem' : ''}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};

/*Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };*/

export default Categories;
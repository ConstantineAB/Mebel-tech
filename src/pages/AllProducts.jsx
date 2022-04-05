import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SortPopup from '../componets/SortPopup';
import Categories from '../componets/Categories';
import ProductСard from '../componets/ProductСard/ProductСard';

import { setCategory } from '../store/actions/filters';
console.log(setCategory)

const AllProducts = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ products }) => products.items);

    const onSelectCategory = index => {
        dispatch(setCategory(index));
    }

    return (
        <section className="section__products __container">
            <div className="section__products__container">
                <div className="section__products__nav">
                    <div className="section__products__nav__top">
                        <span className="section__products__nav__top__left">
                            <span className="section__products__nav__top__left-title">PRODUCTS</span>
                            <span className="section__products__nav__top__left-selling">
                                <span>Best Selling</span>
                                <span>Most Popular</span>
                            </span>
                        </span>
                        <span className="section__products__nav__top__see-all">
                            {<SortPopup 
                                items={[
                                    { name: 'популярности', type: 'popular' },
                                    { name: 'цене', type: 'price' },
                                    { name: 'алфавит', type: 'alphabet' },
                                ]}
                            />}
                        </span>
                    </div>
                        <Categories 
                            onClickItem={onSelectCategory}
                            items={['All', 'Bed', 'Sofa', 'Chair', 'Light']}
                        />
                </div>

                <div className="section__products__cards__container">
                    {items.map((obj) => (
                        <ProductСard key={obj.id} {...obj} />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default AllProducts;
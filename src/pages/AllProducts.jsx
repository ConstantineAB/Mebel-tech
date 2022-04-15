import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SortPopup from '../componets/SortPopup';
import Categories from '../componets/Categories';
import ProductBlock from '../componets/ProductBlock';
import LoadingBlock from '../componets/ProductBlock/LoadingBlock';

import { setCategory, setSortBy } from '../store/actions/filters';
import { fetchProducts } from '../store/actions/products';

const categories = ['Кровати', 'Кресла', 'Стулья', 'Освещение'];

const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
]

const AllProducts = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ products }) => products.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchProducts(sortBy, category));
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, [])

    const handleAddProductToCart = (obj) => {
        dispatch({
            type: 'ADD_PRODUCT_CART',
            payload: obj,
        })
    }

    return (
        <section className="section__products __container">
            <div className="section__products__container">
                <div className="section__products__nav">
                    <div className="section__products__nav__top">
                        <span className="section__products__nav__top__left">
                            <span className="section__products__nav__top__left-title">ВСЕ ТОВАРЫ</span>
                        </span>
                        <span className="section__products__nav__top__see-all">
                            {<SortPopup
                                activeSortType={sortBy.type}
                                items={sortItems}
                                onClickSortType={onSelectSortType}
                            />}
                        </span>
                    </div>
                        <Categories 
                            activeCategory={category}
                            onClickCategory={onSelectCategory}
                            items={categories}
                        />
                </div>

                <div className="section__products__cards__container">
                    {isLoaded 
                        ? items.map((obj) => 
                            <ProductBlock 
                                onClickAddProducts={handleAddProductToCart}
                                key={obj.id}
                                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                                {...obj} 
                            />) 
                        : Array(10)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index} />)}
                </div>

            </div>
        </section>
    );
}

export default AllProducts;
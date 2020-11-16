import React, { useState } from 'react';
import PageProducts2 from '../PageProducts2/pageProducts2';
import ShowButtons from '../ShowButtons/showButtons';
import FilterTitle from '../filterTitle/FilterTitle';
import './products.css';

const Products = ({ limit, products, setProducts, currentPage, setCurrentPage, totalPages, requestPageProduct, requestedPages, deletedProducts, dropDownOptions }) => {

    const [titleOption, setTitleOption] = useState('');
    console.log('titleOption', titleOption);

    const changePage = (num) => {
        setCurrentPage(num);

        if (requestedPages[num-1] === false) {

        let offset = (num -1) * limit;
        offset = offset -deletedProducts;
        requestPageProduct(limit, offset, num-1, '');
        } else {
            console.log('GOTTENNNNNNNNNNN')
        }
    }

    console.log('currentPage', currentPage);

    return (
        <div className="main">
            <h3>products</h3>
            <FilterTitle dropDownOptions={dropDownOptions} setTitleOption={setTitleOption} />
            <PageProducts2 products={products} currentPage={currentPage} limit={limit} />
            <ShowButtons totalPages={totalPages} products={products} changePage={changePage} />
        </div>
    )
}



export default Products;
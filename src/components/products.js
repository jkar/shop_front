import React from 'react';
import PageProducts from './pageProducts';
import ShowButtons from './showButtons';

const Products = ({ products, setProducts, currentPage, setCurrentPage, totalPages }) => {

    const changePage = (num) => {
        setCurrentPage(num);
    }

    console.log('currentPage', currentPage);

    return (
        <div>
            <p>products</p>
            <PageProducts products={products} />
            <ShowButtons totalPages={totalPages} products={products} changePage={changePage} />
        </div>
    )
}



export default Products;
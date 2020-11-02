import React from 'react';
import PageProducts2 from '../PageProducts2/pageProducts2';
import ShowButtons from '../ShowButtons/showButtons';
import './products.css';

const Products = ({ limit, products, setProducts, currentPage, setCurrentPage, totalPages, requestPageProduct, requestedPages, deletedProducts }) => {

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
            <PageProducts2 products={products} currentPage={currentPage} limit={limit} />
            <ShowButtons totalPages={totalPages} products={products} changePage={changePage} />
        </div>
    )
}



export default Products;
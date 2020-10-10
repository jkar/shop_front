import React from 'react';
import Products from '../products';
import FormProduct from '../formProduct';
import Header from '../Header/Header';

const Main = ({ products, setProducts, currentPage, setCurrentPage, limit, totalPages, requestPageProduct, requestedPages }) => {

    return (
        <div>
            <Header />
            <Products products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} />
            <FormProduct />
        </div>
    )
}

export default Main;
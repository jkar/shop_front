import React from 'react';
import Products from '../Products/products'
import Header from '../Header/Header';

const Main = ({ products, setProducts, currentPage, setCurrentPage, limit, totalPages, requestPageProduct, requestedPages, user, deletedProducts }) => {

    return (
        <div>
            <Header user={user} />
            <Products products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} deletedProducts={deletedProducts} />
        </div>
    )
}

export default Main;
import React from 'react';
import ProductsForEditDeletion from '../ProductsForEditDeletion/productsForEditDeletion';
import Header from '../Header/Header';

const EditDeleteProduct = ({ products, setProducts, currentPage, setCurrentPage, limit, totalPages, requestPageProduct, requestedPages, user }) => {

    return (
        <>
            <Header user={user} />
            <ProductsForEditDeletion products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} user={user} />
        </>
    )
};

export default EditDeleteProduct;
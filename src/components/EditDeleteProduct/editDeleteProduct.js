import React from 'react';
import ProductsForEditDeletion from '../ProductsForEditDeletion/productsForEditDeletion';
import Header from '../Header/Header';

const EditDeleteProduct = ({ logOut, products, setProducts, currentPage, setCurrentPage, limit, totalPages, requestPageProduct, requestedPages, user, errorSuccessMessage, setErrorSuccessMessage, setDeletedProducts, deletedProducts }) => {

    return (
        <>
            <Header user={user} logOut={logOut} />
            <ProductsForEditDeletion products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} user={user} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage} setDeletedProducts={setDeletedProducts} deletedProducts={deletedProducts} />
        </>
    )
};

export default EditDeleteProduct;
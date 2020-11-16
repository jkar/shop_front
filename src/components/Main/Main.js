import React from 'react';
import './Main.css';
import Products from '../Products/products'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = ({ products, setProducts, currentPage, setCurrentPage, limit, totalPages, requestPageProduct, requestedPages, user, deletedProducts, dropDownOptions }) => {


    return (
        <div className="mainPage">
            <Header user={user} />
            <Products products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} deletedProducts={deletedProducts} dropDownOptions={dropDownOptions} />
            <Footer />
        </div>
    )
}

export default Main;
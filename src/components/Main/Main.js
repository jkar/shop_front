import React from 'react';
import './Main.css';
import Products from '../Products/products'
import FilteredProducts from '../FilterProducts/FilterProducts';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main = ({ products, setProducts, currentPage, setCurrentPage, limit, totalPages, requestPageProduct, requestedPages, user, deletedProducts, dropDownOptions, requestFilteredPageProduct, filter, setFilter, filteredProducts, setFilteredProducts, requestedFilterdPages, setRequestedFilteredPages, filterCurrentPage, setFilterCurrentPage, filterTotalPages, setFilterTotalPages, titleOption, setTitleOption }) => {


    return (
        <div className="mainPage">
            <Header user={user} />
            { filter ?
            <FilteredProducts user={user} deletedProducts={deletedProducts} dropDownOptions={dropDownOptions} limit={limit} requestFilteredPageProduct={requestFilteredPageProduct} filter={filter} setFilter={setFilter} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} requestedFilterdPages={requestedFilterdPages} setRequestedFilteredPages={setRequestedFilteredPages} filterCurrentPage={filterCurrentPage} setFilterCurrentPage={setFilterCurrentPage} filterTotalPages={filterTotalPages} setFilterTotalPages={setFilterTotalPages} titleOption={titleOption} setTitleOption={setTitleOption} />
            :
            <Products products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} deletedProducts={deletedProducts} dropDownOptions={dropDownOptions} setFilter={setFilter} filter={filter} titleOption={titleOption} setTitleOption={setTitleOption} />
            }
            <Footer />
        </div>
    )
}

export default Main;
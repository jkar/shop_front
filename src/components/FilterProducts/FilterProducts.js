import React, { useState, useEffect } from 'react';
import PageProducts2 from '../PageProducts2/pageProducts2';
import FilterPageProducts from '../FilterPageProducts/FilterPageProducts';
import ShowButtons from '../ShowButtons/showButtons';
import FilterTitle from '../filterTitle/FilterTitle';
import './FilterProducts.css';

const FilterProducts = ({ user, deletedProducts, dropDownOptions, limit, requestFilteredPageProduct, filter, setFilter, filteredProducts, setFilteredProducts, requestedFilterdPages, setRequestedFilteredPages, filterCurrentPage, setFilterCurrentPage, filterTotalPages, setFilterTotalPages, titleOption, setTitleOption }) => {

    const changePage = (num) => {
        setFilterCurrentPage(num);
        

        if (requestedFilterdPages[num-1] === false) {
            

        let offset = (num -1) * limit;
        offset = offset -deletedProducts;
        requestFilteredPageProduct(limit, offset, num-1);
        
        } else {
            console.log('GOTTENNNNNNNNNNN')
        }
    }

    const putFilteredTitle = (titles) => {
        requestFilteredPageProduct(limit, 0, 1, titles, true);
    }

    console.log('filterCurrentPage', filterCurrentPage);
    console.log('titleOption', titleOption);
    

    return (
        <div className="main">
            <h3>Filtered products</h3>
            <FilterTitle dropDownOptions={dropDownOptions} titleOption={titleOption} setTitleOption={setTitleOption} filter={filter} setFilter={setFilter} putFilteredTitle={putFilteredTitle} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts} />
            <FilterPageProducts filteredProducts={filteredProducts} filterCurrentPage={filterCurrentPage} limit={limit} />
            <ShowButtons filterTotalPages={filterTotalPages} filteredProducts={filteredProducts} changePage={changePage} />
        </div>
    )
}



export default FilterProducts;
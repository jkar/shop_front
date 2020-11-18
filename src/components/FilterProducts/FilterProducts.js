import React, { useState } from 'react';
import PageProducts2 from '../PageProducts2/pageProducts2';
import FilterPageProducts from '../FilterPageProducts/FilterPageProducts';
import ShowButtons from '../ShowButtons/showButtons';
import FilterTitle from '../filterTitle/FilterTitle';
import './FilterProducts.css';

const FilterProducts = ({ user, deletedProducts, dropDownOptions, limit, requestFilteredPageProduct, filter, setFilter, filteredProducts, setFilteredProducts, requestedFilterdPages, setRequestedFilteredPages, filterCurrentPage, setFilterCurrentPage, filterTotalPages, setFilterTotalPages }) => {

    const [titleOption, setTitleOption] = useState('');

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

    console.log('filterCurrentPage', filterCurrentPage);
    

    return (
        <div className="main">
            <h3>Filtered products</h3>
            <FilterTitle dropDownOptions={dropDownOptions} setTitleOption={setTitleOption} />
            <FilterPageProducts filteredProducts={filteredProducts} filterCurrentPage={filterCurrentPage} limit={limit} />
            <ShowButtons filterTotalPages={filterTotalPages} filteredProducts={filteredProducts} changePage={changePage} />
        </div>
    )
}



export default FilterProducts;
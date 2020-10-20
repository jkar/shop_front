import React from 'react';
import PageProductsForEditDeletion from '../PageProductsForEditDeletion/pageProductsForEditDeletion';
import ShowButtons from '../ShowButtons/showButtons';

const ProductsForEditDeletion = ({ user, limit, products, setProducts, currentPage, setCurrentPage, totalPages, requestPageProduct, requestedPages, errorSuccessMessage, setErrorSuccessMessage }) => {

    const changePage = (num) => {
        setCurrentPage(num);

        if (requestedPages[num-1] === false) {

        let offset = (num -1) * limit;
        requestPageProduct(limit, offset, num-1, '');
        } else {
            console.log('GOTTENNNNNNNNNNN')
        }
    }

    console.log('currentPage', currentPage);

    return (
        <div>
            <p>products</p>
            <PageProductsForEditDeletion user={user} products={products} setProducts={setProducts} currentPage={currentPage} limit={limit} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage} />
            <ShowButtons totalPages={totalPages} products={products} changePage={changePage} />
        </div>
    )
}



export default ProductsForEditDeletion;
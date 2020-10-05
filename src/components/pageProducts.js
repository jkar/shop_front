import React from 'react';

const PageProducts = ({ products, currentPage, limit }) => {



    let startingIndex = (currentPage -1) * limit;
    let endingIndex = startingIndex + limit;
    console.log('startingIndex', startingIndex);
    console.log('endingIndex', endingIndex);
    let ProductsToShow = [];

    // if (products === [] || products.length < endingIndex) {
        if (products === [] || products.length <= startingIndex) {

        return (
            <p>Loading...</p>
        )
    } else {
        ProductsToShow = products.slice(startingIndex, endingIndex);
        return (
            <div>
                {ProductsToShow.map( (product, index) => {
                    return (
                    <div key={index}>
                        <p>{product.title}</p>
                     </div>
                    )   
                })}
            </div>
        )
    }



}

export default PageProducts;
import React, { useState } from 'react';

const PageProducts = ({ products, currentPage, limit }) => {

    const [oldProducts, setOldProducts] = useState([]);

    let startingIndex = (currentPage -1) * limit;
    let endingIndex = startingIndex + limit;
    console.log('startingIndex', startingIndex);
    console.log('endingIndex', endingIndex);
    let ProductsToShow = [];

    // console.log('PRODDDDDDDDDD', products)
    // console.log('OLDDDD', oldProducts)
    // if (products === [] || products.length < endingIndex) {
        // if (products === [] || products.length <= startingIndex) {
    if (products === [] ) {
        return (
            <p>Loading...</p>
        )
    } else {
        //setOldProducts(products);
        ProductsToShow = products.slice(startingIndex, endingIndex);
        return (
            <div>
                {ProductsToShow.map( (product, index) => {
                    return (
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>{product.number}</p>
                        {product.imagePath ? <img src={`http://localhost:3001/${product.imagePath}`} /> : null }
                     </div>
                    )   
                })}
            </div>
        )
    }



}

export default PageProducts;
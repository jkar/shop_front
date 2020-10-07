import React, { useState } from 'react';

const PageProducts = ({ products, currentPage, limit }) => {

    let prods = products[currentPage-1];

    if (prods === undefined) {
        return (
            <p>Loading...</p>
        )
    } else {
            console.log('SHOWW', prods);
        return (
            <div>
                {prods.map( (product, index) => {
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
import React, { useState } from 'react';

const PageProducts = ({ products, currentPage, limit }) => {

    let prods = products[currentPage-1];
    console.log('CurrentProd', prods)

    if (prods === undefined || prods.length === 0) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <div>
                {prods.map( (product, index) => {
                    return (
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>{product.number}</p>
                        {product.imagePath ? <img src={`http://localhost:3001/${product.imagePath}`} width='100px' height='100px' /> : null }
                     </div>
                    )   
                })}
            </div>
        )
        }
}

export default PageProducts;
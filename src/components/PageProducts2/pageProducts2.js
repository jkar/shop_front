import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './pageProducts2.css';

const PageProducts = ({ products, currentPage, limit }) => {

    let prods = products[currentPage-1];
    console.log('CurrentProd', prods)

    if (prods === undefined || prods.length === 0) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <div className="pageProducts">
                {prods.map( (product, index) => {
                    
                    return (
                    <div className="productCard" key={index}>
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p>{product.number}</p>
                        {product.imagePath ? <img src={`http://localhost:3001/${product.imagePath}`} width='100px' height='100px' /> : null }
                        <Link to={`/products/${product._id}`}>Details</Link>
                     </div>
                    )   
                })}
            </div>
        )
        }
}

export default PageProducts;
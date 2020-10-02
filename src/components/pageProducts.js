import React from 'react';

const PageProducts = ({ products }) => {

    return (
        <div>
            {products.map( (product, index) => {
                return (
                <div key={index}>
                    <p>{product.title}</p>
                 </div>
                )   
            })}
        </div>
    )

}

export default PageProducts;
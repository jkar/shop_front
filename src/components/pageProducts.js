import React from 'react';

const PageProducts = ({ products }) => {

    return (
        <div>
            {products.map( (product, index) => {
                return (
                <div>
                    <p>{product.title}</p>
                 </div>
                )   
            })}
        </div>
    )

}

export default PageProducts;
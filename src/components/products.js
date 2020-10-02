import React from 'react';
import PageProducts from './pageProducts';

const Products = ({ products, setProducts }) => {
    return (
        <div>
            <p>products</p>
            <PageProducts products={products} />
        </div>
    )
}

export default Products;
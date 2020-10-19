import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../Header/Header';

const Product = ({ products, currentPage, user }) => {

    const id = useParams().id;
    const prods = products[currentPage-1];
    const product = prods.find(p => p._id == id);

    return (
        <>
            <Header user={user} />
            <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.number}</p>
                {product.imagePath ? <img src={`http://localhost:3001/${product.imagePath}`} width='100px' height='100px' /> : null }
            </div>
        </>
    )
}

export default Product;
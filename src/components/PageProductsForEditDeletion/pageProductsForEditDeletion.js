import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const pageProductsForEditDeletion = ({ products, currentPage, limit, user }) => {

    let prods = products[currentPage-1];
    console.log('CurrentProd', prods)

    const setToken = newToken => {
        return `Bearer ${newToken}`
      }

    const deleteProduct = async (id) => {

        try {
            const config = {
                headers: { Authorization: setToken(user.data.token) },
              }
            //   console.log('DIDDDDDDDDDDDD', id)
            //   console.log('USERRRR', user.data.token)
              const res = await axios.delete(`http://localhost:3001/api/products/${id}`, config);
        } catch (err) {
            console.log(err.response.data.msg);
        }
    };

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
                        <Link to={`/products/${product._id}`}>Details</Link>
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                     </div>
                    )   
                })}
            </div>
        )
        }
}

export default pageProductsForEditDeletion;
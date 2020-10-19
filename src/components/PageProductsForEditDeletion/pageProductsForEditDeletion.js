import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const pageProductsForEditDeletion = ({ products, setProducts, currentPage, limit, user, errorSuccessMessage, setErrorSuccessMessage }) => {

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
              const res = await axios.delete(`http://localhost:3001/api/products/${id}`, config);
              let p = [...prods];
              p = p.filter(pr => {
                  console.log('prid', pr._id)
                  console.log('prid2', id)

                  return pr._id !== id
                });

                let pr = [...products];
                pr[currentPage-1] = p;
                setErrorSuccessMessage('product is successfully deleted');
                setTimeout(() => {
                    setErrorSuccessMessage('')
                }, 1000);
                setProducts(pr);
        } catch (err) {
            console.log(err.response.data.msg);
            setErrorSuccessMessage('product is not deleted..');
            setTimeout(() => {
                setErrorSuccessMessage('')
            }, 1000);
        }
    };

    if (prods === undefined || prods.length === 0) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <div>
                { errorSuccessMessage !== '' ? <p>{errorSuccessMessage}</p> : null }
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
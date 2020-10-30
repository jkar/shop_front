import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const pageProductsForEditDeletion = ({ products, setProducts, currentPage, limit, user, errorSuccessMessage, setErrorSuccessMessage, setDeletedProducts, deletedProducts }) => {

    let prods = products[currentPage-1];
    console.log('CurrentProd', prods)

    const setToken = newToken => {
        return `Bearer ${newToken}`
      }

    const deleteProduct = async (id, imgPath) => {
        try {
            const config = {
                headers: { Authorization: setToken(user.data.token) },
              }
              const res = await axios.delete(`http://localhost:3001/api/products/${id}`, config);
              const res2 = await axios.post(`http://localhost:3001/api/products/img`, { img : imgPath } , config)
              let p = [...prods];
              p = p.filter(pr => {
                  console.log('prid', pr._id)
                  console.log('prid2', id)

                  return pr._id !== id
                });

                let pr = [...products];
                pr[currentPage-1] = p;
                setDeletedProducts(deletedProducts+1);
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
                        <Link to={`/product/${product._id}`}>Edit</Link>
                        <button onClick={() => deleteProduct(product._id, product.imagePath)}>Delete</button>
                     </div>
                    )   
                })}
            </div>
        )
        }
}

export default pageProductsForEditDeletion;
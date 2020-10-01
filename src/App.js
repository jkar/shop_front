import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './components/products';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState(4);

  console.log('totalPages', totalPages);
  console.log('products', products);

  const requestPageProduct = (lmt, ofst) => {
    console.log('ofs', ofst)
    const params = {
      limit : parseInt(lmt),
      offset : parseInt(ofst)
    }
    const request = axios.get('http://localhost:3001/api/products', { params : params } );
    request.then( res => {
      setProducts(res.data);
    });
  };

  const requestTotalPages = (l) => {
    const params = {
      limit : limit
    }
    const request = axios.get('http://localhost:3001/api/products/count', { params: params });
    request.then( res => {
      requestPageProduct(limit, 0);
      setTotalPages(res.data.numberOfPages);
    })
  };

  useEffect(() => {
    requestTotalPages(limit);
  }, []);

  return (
    <div className="App">
        <Products />
    </div>
  );
}

export default App;

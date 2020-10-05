import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './components/products';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestedPages, setRequestedPages] = useState([]);

  // console.log('totalPages', totalPages);
  // console.log('products', products);
  // console.log('requestedPages', requestedPages);

  const requestPageProduct = (lmt, ofst, pg, frst) => {
    console.log('OOOOFFFFFFSSSSSSSS', ofst)
    const params = {
      limit : parseInt(lmt),
      offset : parseInt(ofst)
    }
    const request = axios.get('http://localhost:3001/api/products', { params : params } );
    request.then( res => {
      console.log('DATAAAAAAA', res.data)
      let prod = [...products].concat(res.data);

      setProducts(prod);

      if (frst !== '' ) {
        let rp = [true];
        for (var x = 1; x < frst; x++) {
          rp.push(false);
        }
        setRequestedPages(rp);
      } else {
        let rp = [...requestedPages];
        rp[pg] = true;
        setRequestedPages(rp);
      }
    });
  };

  const requestTotalPages = (l) => {
    const params = {
      limit : limit
    }
    const request = axios.get('http://localhost:3001/api/products/count', { params: params });
    request.then( res => {
      requestPageProduct(limit, 0, 0, parseInt(res.data.numberOfPages));
      setTotalPages(parseInt(res.data.numberOfPages));
    })
  };

  useEffect(() => {
    requestTotalPages(limit);
  }, []);

  return (
    <div className="App">
        <Products products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages}/>
    </div>
  );
}

export default App;

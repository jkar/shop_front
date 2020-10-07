import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Products from './components/products';
import FormProduct from './components/formProduct';
import Header from './components/Header';
import About from './components/About';
import Main from './components/Main';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestedPages, setRequestedPages] = useState([]);

  // console.log('totalPages', totalPages);
  console.log('products', products);
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
      //let prod = [...products].concat(res.data);

      //setProducts(prod);

      if (frst !== '' ) {
        let rp = [true];
        let prod = [res.data];
        for (var x = 1; x < frst; x++) {
          rp.push(false);
          prod.push([]);
        }
        setProducts(prod);
        setRequestedPages(rp);
      } else {
        let rp = [...requestedPages];
        rp[pg] = true;
        let prod = [...products];
        prod[pg] = res.data;

        setProducts(prod);
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

    let arr = [];
    arr.splice(3, 0, 'item')
    console.log('arrrrrrr', arr)


  }, []);

  return (
    <div className="App">
        {/* <Header /> */}
        {/* <Main products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} /> */}
        {/* <Products products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages}/> */}
        {/* <FormProduct /> */}
        <Switch>
          <Route path="/" component={() => <Main products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} /> } exact />
          <Route path="/about" component={About} />
          <Route component={Error} />
        </Switch>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
// import Products from './components/Products/products';
// import FormProduct from './components/FormProduct/formProduct';
import FormProduct from './components/FormProduct/formProduct2';

import Header from './components/Header/Header';
import About from './components/About/About';
import Main from './components/Main/Main';
import axios from 'axios';
import LogIn from './components/LogIn/logIn';
import SignUp from './components/SignUp/signUp';
import Product from './components/Product/product';
import EditDeleteProduct from './components/EditDeleteProduct/editDeleteProduct';
import EditProduct from './components/EditProduct/editProduct';



function App() {

  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [limit, setLimit] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [requestedPages, setRequestedPages] = useState([]);
  const [errorSuccessMessage, setErrorSuccessMessage ] = useState('');
  const [deletedProducts, setDeletedProducts] =  useState(0);

  const history = useHistory();

  // console.log('totalPages', totalPages);
  console.log('products', products);
  // console.log('requestedPages', requestedPages);
  console.log('user', user);
  console.log('OFFSET', deletedProducts)

  const requestPageProduct = (lmt, ofst, pg, frst) => {
    console.log('OOOOFFFFFFSSSSSSSS', ofst)
    const params = {
      limit : parseInt(lmt),
      offset : parseInt(ofst)
    }
    const request = axios.get('http://localhost:3001/api/products', { params : params } );
    request.then( res => {
      console.log('DATAAAAAAA', res.data)

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
  }, []);

  useEffect(() => {
    
    const loggedUserJSON = window.localStorage.getItem('loggedUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, [])

  const logOut = () => {
    window.localStorage.removeItem('loggedUser');
    setUser(null);
  };

  return (
    <div className="App">
        { errorSuccessMessage !== '' ? <p>{errorSuccessMessage}</p> : null }
        { user === null ? null : <p>{user.data.name} is logged in</p>}
        { user === null ? null : <button onClick={logOut}>Log Out</button> }
        <Switch>
          <Route path="/" component={() => <Main products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} user={user} setDeletedProducts={setDeletedProducts} deletedProducts={deletedProducts} /> } exact />
          <Route path="/about" component={() => <About user={user} /> } />
          <Route path="/login" component={() => <LogIn user={user} setUser={setUser} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage}  history={history} /> } />
          <Route path="/signup" component={() => <SignUp user={user} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage} history={history} /> } />
          <Route path="/formProduct" component={() => <FormProduct user={user} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage} products={products} setProducts={setProducts} totalPages={totalPages} setTotalPages={setTotalPages} limit={limit} />} />
          <Route path="/editeDeleteProduct" component={() => <EditDeleteProduct products={products} setProducts={setProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} limit={limit} totalPages={totalPages} requestPageProduct={requestPageProduct} requestedPages={requestedPages} user={user} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage} setDeletedProducts={setDeletedProducts} deletedProducts={deletedProducts} />}></Route>
          <Route path="/products/:id"><Product products={products} currentPage={currentPage} user={user} /></Route>
          <Route path="/product/:id"><EditProduct products={products} currentPage={currentPage} user={user} errorSuccessMessage={errorSuccessMessage} setErrorSuccessMessage={setErrorSuccessMessage} setProducts={setProducts} /></Route>
          <Route component={Error} />
        </Switch>
    </div>
  );
}

export default App;

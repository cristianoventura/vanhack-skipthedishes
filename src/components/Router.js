import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from './Header';

import Login from '../pages/Login';
import Cousines from '../pages/Cousines';
import Stores from '../pages/Stores';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

const Router = () => (
    <BrowserRouter>
        <div>
            <Header />

            {/* <Route exact path="/" component={Login} /> */}
            <Route exact path="/" component={Cousines} />
            <Route path="/stores/:cousineId" component={Stores} />
            <Route path="/products/:storeId" component={Products} />
            <Route path="/cart" component={Cart} />
        </div>
    </BrowserRouter>
);

export default Router;
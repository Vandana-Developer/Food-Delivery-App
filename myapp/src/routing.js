import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './footer';
import Header from './header';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home} />
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;
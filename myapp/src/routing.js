import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './footer';
import Header from './header';
import Listing from './component/Listing/ListingApi';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/listing/:mealId' component ={Listing}/>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;
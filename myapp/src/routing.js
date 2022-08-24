import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Footer from './footer';
import Header from './header';
import Listing from './component/Listing/ListingApi';
import Details from './component/Details/RestDetails';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/listing/:mealId' component ={Listing}/>
            <Route path='/details' component ={Details}/>
            <Footer />
        </BrowserRouter>
    )
}
export default Routing;

import React from 'react';
import './header.css'

const Header=()=>{
    return(
        <header>
        <div id="brand">
            Developer Funnel
        </div>
        <div id="social">
            <a href="www.facebook.com">
                <img src="https://i.ibb.co/GRZx3D5/facebook.png" alt="fb"
                className="socialImg"/>
            </a>
            <a href="www.facebook.com">
                <img src="https://i.ibb.co/19H5LvT/insta.png" alt="fb"
                className="socialImg"/>
            </a>
            <a href="www.facebook.com">
                <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fb"
                className="socialImg"/>
            </a>
        </div>
    </header>
    )

}

export default Header;

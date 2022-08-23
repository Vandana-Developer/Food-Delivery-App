
import React from 'react';
import './Search.css';

class Search extends React.Component {
    render() {
        return (
            <div id="search">
                <div className="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select>
                        <option>----SELECT LOCATION----</option>
                        <option>Delhi</option>
                        <option>Mumbai</option>
                    </select>
                    <select id="restSelect">
                        <option>----SELECT Restaurants----</option>
                        <option>KFC</option>
                        <option>WOW Momos</option>
                    </select>
                </div>
            </div>
        )
    }

}

export default Search;

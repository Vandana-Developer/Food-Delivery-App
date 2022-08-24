
import React from 'react';
import { Link } from 'react-router-dom';
import './Listing.css';


const ListingDisplay = (props) => {
    const renderList = ({ restaurantList }) => {
        console.log('restaurantList', restaurantList)
        if (restaurantList) {
            return restaurantList.length ? restaurantList.map((item) => {
                return (
                    <div className='item' key={item.restaurant_id}>
                        <div className="row">
                            <div className='col-md-5'>
                                <img src={item.restaurant_thumb} alt={item.restaurant_name} className='Image' />
                            </div>
                            <div className='col-md-7'>
                                <div className='hotel_name'>
                                    <Link to={`/details?restId=${item.restaurant_id}`} > {item.restaurant_name}</Link>
                                </div>
                                <div className='city_name'>
                                    {item.address}
                                </div>
                                <div className='city_name'>
                                    {item.average_rating}
                                </div>
                                <div className='city_name'>
                                    Rs.{item.cost}
                                </div>
                                <div className="labelDiv">
                                    {item.mealTypes.map(item => <>
                                        <span className="label label-success">
                                            {item.mealtype_name}
                                        </span>  &nbsp;
                                    </>)}
                                </div>
                                <div className="labelDiv">
                                    {item.cuisines.map(item => <>
                                        <span className="label label-danger">
                                            {item.cuisine_name}
                                        </span>  &nbsp;
                                    </>)}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : <h2>No data as per filter</h2>
        }
        else {
            return (
                <div>
                    <h2>Loading...</h2>
                    <img src='/images/loader.gif' />
                </div>)
        }
    }

    return (
        <div id="content">
            {renderList(props)}


        </div>
    )
}

export default ListingDisplay;

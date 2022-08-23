
import React from 'react';



const ListingDisplay = (props) => {
    const renderList = ({ restaurantList }) => {

        console.log('restaurantList', restaurantList)
        if (restaurantList) {
           return restaurantList.length ? restaurantList.map((item)=>{
                return (
                    <div key={item.restaurant_id}>
                        {item.restaurant_name}
                        {item.address}
                        {item.cost}
                        {/* <img src={item.image_gallery} alt='hi'/> */}

                        {item.average_rating}

                    </div>
                )
            }) : <h2>No data as per filter</h2>

        }
        else {
            return (
                <div>
                    <h2>Loading...</h2>
                    <img src='/images/loader.gif'/>
                </div>)
        }

    }

    return (
        <>
            {renderList(props)}


        </>
    )
}

export default ListingDisplay;

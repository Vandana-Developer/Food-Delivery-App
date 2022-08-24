
import React from 'react';
import axios from 'axios';
import MenuDetails from './MenuDetails';
import './Details.css'


const url = 'http://zomatoajulypi.herokuapp.com/details';
const menuUrl = 'https://zomatoajulypi.herokuapp.com/menu';

class Details extends React.Component {
    constructor(props) {
        super();
        this.state = {
            resData: '',
            menuData: ''
        }
    }

    render() {
        console.log('props', this.props)
        const { resData, menuData } = this.state

        return (
            <>
                <div className='main'>
                    <div className='tileImage'>
                        <div className="imageClass">
                            <img src={resData.restaurant_thumb} alt={resData.restaurant_name} />
                        </div>
                    </div>
                    <div>
                        <div className='tileContent'>
                            <div className='content'>
                                <h1>{resData.restaurant_name}</h1>
                                <span id='cfeedback'>231 Customers Rating Average</span>
                                <h3>Old Price:
                                    <del> Rs. 450</del></h3>
                                <h3>Offer Price:
                                    Rs.{resData.cost}</h3>
                                <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                <div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" />
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>

                <MenuDetails menuData={menuData} />

            </>
        )

    }

    async componentDidMount() {
        const restaurantId = this.props.location.search.split('=')[1]
        console.log('id..', restaurantId)
        let response = await axios.get(`${url}/${restaurantId}`)
        let menuResponse = await axios.get(`${menuUrl}/${restaurantId}`)
        this.setState({ resData: response.data[0], menuData: menuResponse.data })
        console.log('response', response, menuResponse)

    }

}

export default Details;

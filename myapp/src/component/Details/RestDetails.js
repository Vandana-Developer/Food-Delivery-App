
import React from 'react';
import axios from 'axios';
import MenuDetails from './MenuDetails';
import './Details.css';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const url = 'http://zomatoajulypi.herokuapp.com/details';
const menuUrl = 'https://zomatoajulypi.herokuapp.com/menu';

class Details extends React.Component {
    constructor(props) {
        super();
        this.state = {
            resData: '',
            menuData: '',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1
        }
    }

    render() {
        console.log('props', this.props)
        const { resData, menuData, mealId} = this.state

        return (
            <>
                <div className='main'>
                    <div className='tileImage'>
                        <div className="imageClass">
                            <img src={resData.restaurant_thumb} alt={resData.restaurant_name} />
                        </div>
                    </div>
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
                        <Tabs>
                            <TabList>
                                <Tab>About</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>{resData.restaurant_name}</h2>
                                <p> {resData.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen </p>
                            </TabPanel>
                            <TabPanel>
                            <h3>{resData.address}</h3>
                            {resData.contact_number&& <h3>Phone Number: {resData.contact_number}</h3>}
                            </TabPanel>
                        </Tabs>
                        <Link to={`listing/${mealId}`}><button className='btn btn-danger'>Back</button></Link>
                        &nbsp;
                        <Link ><button className='btn btn-success'>Proceed</button></Link>
                    </div>
                    <div className='col-md-12'>
                       <center> <h2>Menu</h2></center>
                       <MenuDetails menuData={menuData} />



                    </div>
                </div> 


            </>
        )

    }

    async componentDidMount() {
        const restaurantId = this.props.location.search.split('=')[1]
        console.log('id..', restaurantId)
        let response = await axios.get(`${url}/${restaurantId}`)
        let menuResponse = await axios.get(`${menuUrl}/${restaurantId}`);
        console.log('menuResponse',menuResponse)

        this.setState({ resData: response.data[0], menuData: menuResponse.data })
        console.log('response', response, menuResponse)

    }

}

export default Details;

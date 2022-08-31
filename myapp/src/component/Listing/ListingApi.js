
import React from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay';

const url = 'https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id='
class Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantList: ''
        }
    }

    render() {
        console.log('this.state', this.state)

        return (
            <div className='row'>
                <div id='mainListing'>
                    <div id='filter'>

                    </div>

                    <ListingDisplay restaurantList={this.state.restaurantList}/>

                </div>


            </div>
        )

    }

    componentDidMount() {
        console.log('this.props', this.props.match.params.mealId);
        const mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
            .then(res => this.setState({ restaurantList: res.data }));

    }
}

export default Listing;

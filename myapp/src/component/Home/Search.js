
import React from 'react';
import './Search.css';

const lUrl = 'https://zomatoajulypi.herokuapp.com/location';
const resUrl = 'https://zomatoajulypi.herokuapp.com/restaurant';

class Search extends React.Component {

    constructor() {
        super();
        this.state = {
            locationData: '',
            resData: ''
        }
    }

     renderCity=(data)=>{
        return data.map(val=>(
            <option value={val.state_id} key={val.state_id}>{val.state}</option>
        ))
    }

    renderRestaurants=(data)=>{
        console.log('data..',data)
        return(
            data.map((item=>{
            return  <option value={item.restaurant_id} key={item._id} >{item.restaurant_name}, {item.address}</option>  

            }))
        )                
    }

    handleChange=(e)=>{
        const stateId= e.target.value
        fetch(`${resUrl}?stateId=${stateId}`,{method:'GET'})
        .then(res=>res.json())
        .then(res=>this.setState({resData:res}))


    }

    render() {
        console.log('state', this.state)
        const { locationData, resData } = this.state
        return (
            <div id="search">
                <div className="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleChange}>
                        <option>----SELECT LOCATION----</option>
                        {locationData && this.renderCity(locationData)}
                    </select>
                    <select id="restSelect">
                        <option>----SELECT Restaurants----</option>
                        {resData && this.renderRestaurants(resData)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch(lUrl, { method: 'GET' })
            .then((res) => res.json())
            .then(data => this.setState({ locationData: data }))
            .catch((err) => alert('Something went wrong'));
    }

}

export default Search;

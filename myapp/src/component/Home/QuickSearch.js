
import React from 'react';
import QuickDisplay from './QuickDisplay'
import './QuickSearch.css';


let quickUrl = 'https://zomatoajulypi.herokuapp.com/quicksearch'
class QuickSearch extends React.Component {
    constructor() {
        super()
        this.state = {
            mealType: ''
        }

    }

    render() {

        console.log('this.state quick', this.state)
        const { mealType } = this.state
        return (
            <div id="quickSearch">
                <span id="QuickHeading">
                    Quick Search
                </span>
                <span id="QuickSubHeading">
                    Find Restaurants By Meal Type
                </span>

                {mealType && <QuickDisplay mealTypeData={mealType} />}

            </div>
        )

    }
    componentDidMount() {
        fetch(quickUrl, { method: 'GET' })
            .then(res => res.json())
            .then(res => this.setState({ mealType: res }))
    }

}
export default QuickSearch;

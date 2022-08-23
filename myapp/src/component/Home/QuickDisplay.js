
import React from 'react';
import { Link } from 'react-router-dom';
import './QuickSearch.css';


const QuickDisplay = ({ mealTypeData }) => {
    console.log('mealType', mealTypeData)

    const listMeal = (data) => {
        return data.map(val => (
            <Link to='/' key={val._id}>
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src={val.meal_image} alt={val.mealtype} />
                    </div>
                    <div className="tileComponent2">
                        <div className="componentHeading">
                            <span>{val.mealtype}</span>
                        </div>
                        <div className="componentSubHeading">
                            {val.content}
                        </div>
                    </div>
                </div>
            </Link>

        ))
    }
    return (
        <>
            {listMeal(mealTypeData)}
        </>
    )
}

export default QuickDisplay;

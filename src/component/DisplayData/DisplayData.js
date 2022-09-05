import React from 'react';
import './DisplayData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const DisplayData = (props) => {
    // console.log(props.meal)
    const { strMealThumb, strMeal } = props.meal;
    return (
        <div className='displayData'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <button className='button' onClick={() => props.eventHandler(props.meal)}>
                <p>Details</p>
                <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default DisplayData;
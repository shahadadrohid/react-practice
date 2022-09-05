import React from 'react';
import './MealCart.css'

const MealCart = (props) => {
    console.log(props.mealCart)
    const { strMealThumb, strMeal, strInstructions, strYoutube } = props.mealCart;
    return (
        <div className='mealCart'>
            <h1>Meal Cart</h1>
            <h4>{strMeal}</h4>
            <a href={strYoutube}></a>
        </div>
    );
};

export default MealCart;
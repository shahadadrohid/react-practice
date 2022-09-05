import React, { useEffect, useState } from 'react';
import DisplayData from '../DisplayData/DisplayData';
import MealCart from '../MealCart/MealCart';
import './LoadData.css'

const LoadData = () => {
    const [meals, setMeals] = useState([])
    const [mealCart, setMealCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const displayMealCart = (meal) => {
        setMealCart(meal)
    }
    return (
        <div className='loadData'>
            <div className='loadmeals'>
                {
                    meals.map(meal => <DisplayData meal={meal} key={meal.idMeal} eventHandler={displayMealCart}></DisplayData>)
                }
            </div>
            <MealCart mealCart={mealCart} ></MealCart>
        </div>
    );
};

export default LoadData;
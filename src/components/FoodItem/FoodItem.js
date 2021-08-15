import React from 'react';
import './FoodItem.scss';

const FoodItem = ({ food }) => {
    return (
        <div className="food">
            <img src={food.images[0]} alt={food.name} />
            <p className="foodName">{food.name}</p>
            <p className="desc">{food.shortDescription}</p>
            <h5 className="price">${food.price}</h5>
        </div>
    );
};

export default FoodItem;
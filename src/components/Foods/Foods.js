import React from 'react';
// import { Link } from 'react-router-dom';
import './Foods.scss'
import FoodItem from '../FoodItem/FoodItem';
import { useState } from 'react';
import { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
const Foods = (props) => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState("Breakfast");
    const [preloaderVisibility, setPreloaderVisibility] = useState("block");

    useEffect(() => {
        fetch('http://localhost:4000/foods')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
                setPreloaderVisibility("none");
            })
            .catch(err => console.log(err))
    }, [foods.length])

    const selectedFoods = foods.filter(food => food.type === selectedFoodType)

    return (
        <section className="foods-area">
            <div className="container">
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedFoodType("Breakfast")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "Breakfast" ? "active nav-link" : "nav-link"}>Breakfast</span>
                        </li>
                        <li onClick={() => setSelectedFoodType("Lunch")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "Lunch" ? "active nav-link" : "nav-link"}>Lunch</span>
                        </li>
                        <li onClick={() => setSelectedFoodType("Dinner")} className="nav-item">
                            <span to="breakfast" className={selectedFoodType === "Dinner" ? "active nav-link" : "nav-link"}>Dinner</span>
                        </li>
                    </ul>
                </nav>

                <div className="foods my-3">
                    <Preloader display={preloaderVisibility} />
                    {
                        selectedFoods.map(food => <FoodItem key={food.id} food={food} />)
                    }
                </div>
                <div className="text-center">
                    <button className="checkoutBtn">Check Out Your Food</button>
                </div>
            </div>
        </section>
    );
};

export default Foods;
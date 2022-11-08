import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-food-ordering-app-5bf1f-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            if (loadedMeals.length > 0) {
                setIsLoaded(true);
            }
            setMeals(loadedMeals);
        }
        fetchMeals();

    }, [])

    const MealsList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />));

    return (
        <section className={classes.meals}>
            <Card>
                {isLoaded ? MealsList : <p>Loading...</p>}
            </Card>
        </section>
    );

}
export default AvailableMeals;
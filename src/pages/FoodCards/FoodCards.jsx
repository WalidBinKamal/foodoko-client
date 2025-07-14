import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodCard from '../FoodCard/FoodCard';

const FoodCards = () => {
    const foods = useLoaderData()
    return (
        <div className='mt-7'>
            <h2 className='text-center font-bold text-3xl'>Food Items</h2>
            <h4 className='font-semibold text-xl'>Total Item {foods.length}</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {
                    foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodCards;
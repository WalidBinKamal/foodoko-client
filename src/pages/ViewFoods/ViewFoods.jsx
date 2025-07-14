import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewFoods = () => {
    const food = useLoaderData()
    console.log(food.length)
    return (
        <div>
            ViewFoods
        </div>
    );
};

export default ViewFoods;
import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const FoodCard = ({ food }) => {
    const { _id, foodName, category, quantity, description, foodImage, price } = food
    const { user } = useAuth()
    const handleCart = () => {
        const email = user.email
        const foodId = _id
        axios.post('http://localhost:5000/cart', {
            foodId, email
        })
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl h-full">
                <figure>
                    <img
                        className='w-full max-h-36 object-cover'
                        src={foodImage}
                    />
                </figure>
                <div className="card-body">
                    <div className='grid grid-cols-3 items-center'>
                        <h2 className="card-title col-span-2 text-left">{foodName}</h2>
                        <p className='text-left'>({category})</p>
                    </div>
                    <p className='text-left'>{description}</p>
                    <div className='flex justify-between'>
                        <p className='text-sm'>Available: {quantity}</p>
                        <p className='text-sm'>Price: ${price}</p>

                    </div>
                    <button onClick={handleCart} className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
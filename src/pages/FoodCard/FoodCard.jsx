import React from 'react';

const FoodCard = ({ food }) => {
    const { foodName, category, quantity, description, foodImage } = food
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
                    <p className='text-sm'>Available: {quantity}</p>
                    <button className="btn">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Cart = () => {
    const { user } = useAuth()
    const [cartItems, setCartItems] = useState([])

    if (user?.email) {
        axios.get(`http://localhost:5000/cart/${user.email}`)
            .then(() =>{} )
    }

    return (
        <div>
            Cart is Under Development
        </div>
    );
};

export default Cart;
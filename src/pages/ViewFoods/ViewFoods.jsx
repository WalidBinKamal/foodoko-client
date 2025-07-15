import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewFoods = () => {
    const foods = useLoaderData()
    const handleDelete = id => {
        axios.delete(`http://localhost:5000/foods/${id}`)
            .then((res) => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
            )
    }
    return (
        <div>
            {
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            foods.map((food, index) =>
                                <tbody key={food._id}>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{food.foodName}</td>
                                        <td>{food.category}</td>
                                        <td>{food.quantity}</td>
                                        <td><button onClick={() => handleDelete(food._id)} className="btn">X</button></td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </table>
                </div>
            }
        </div>
    );
};

export default ViewFoods;
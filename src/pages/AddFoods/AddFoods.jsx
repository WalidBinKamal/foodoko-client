import React from 'react';

const AddFoods = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const foods = Object.fromEntries(formData.entries())
        console.log(foods)

    }
    return (
        <div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Add a Food Item</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md">
                    <input
                        type="text"
                        name="foodName"
                        className="input input-bordered w-full col-span-2"
                        placeholder="Enter food name"
                        required
                    />

                    <input
                        type="number"
                        name="quantity"
                        className="input input-bordered w-full"
                        placeholder="Quantity"
                        min="1"
                        required
                    />

                    <select
                        name="category"
                        className="select select-bordered w-full"
                        required
                    >
                        <option value="" disabled selected>Select Category</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Beverage">Beverage</option>
                    </select>


                    <textarea
                        name="description"
                        className="textarea textarea-bordered w-full md:col-span-2"
                        placeholder="Description (optional)"
                        rows={3}
                    ></textarea>

                    <div className="md:col-span-2">
                        <input
                            type="url"
                            name="foodImage"
                            placeholder="Provide Food's Image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full md:col-span-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddFoods;
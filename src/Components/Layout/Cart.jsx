import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const loaded = useLoaderData();
    console.log(loaded)
    // const {_id, imageUrl, name, brandName, productType, price, rating, short_desc} = loaded;
    const handleDelete = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/cart/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.deletedCount > 0) {
                //     const remaining = storedUsers.filter(user => _id !== user._id)
                // }
            })
    }
    let serial = 0;
    return (
        <div className='w-[85%] m-auto'>
            <div className="overflow-x-auto">
                <table className="table w-[100%] m-auto">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden md:table-cell"></th>
                            <th className="table-cell">Name</th>
                            <th className="table-cell">Brand</th>
                            <th className="table-cell">Image</th>
                            <th className="table-cell">Price</th>
                            <th className="table-cell">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loaded?.map((cartItems, index) => (
                            <tr key={cartItems._id}>
                                <td className="hidden md:table-cell">{index + 1}</td>
                                <td className="table-cell">{cartItems.name}</td>
                                <td className="table-cell">{cartItems.brandName}</td>
                                <td className="table-cell"><img className='lg:w-[17%]' src={cartItems.imageUrl} alt="" /></td>
                                <td className="table-cell">{cartItems.price}</td>
                                <td className="table-cell"><button onClick={() => handleDelete(cartItems._id)} className='btn btn-sm btn-error'>X</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;
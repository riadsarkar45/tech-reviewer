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
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loaded?.map(cartItems =>
                                <tr key={cartItems._id}>
                                    <th>{++serial}</th>
                                    <td>{cartItems.name}</td>
                                    <td>{cartItems.brandName}</td>
                                    <td><img className='w-[17%]' src={cartItems.imageUrl} alt="" /></td>
                                    <td>{cartItems.price}</td>
                                    <td><button onClick={() => handleDelete(cartItems._id)} className='btn btn-sm btn-error'>X</button></td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;
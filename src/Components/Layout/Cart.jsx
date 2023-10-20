import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthContexts } from '../AuthContext/AuthContext';
const Cart = () => {
    const { user } = useContext(AuthContexts)
    const loaded = useLoaderData();
    const [loadData, setLoadData] = useState(loaded, [])
    console.log(loaded)
    const userCartItems = loadData?.filter(cartItem => cartItem.email === user.email);
    console.log(userCartItems)
    // const {_id, imageUrl, name, brandName, productType, price, rating, short_desc} = loaded;
    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        if (data.deletedCount > 0) {
                            const remaining = userCartItems.filter(product => _id !== product._id)
                            setLoadData(remaining);
                        }
                    })
            }
        })

    }
    let serial = 0;
    return (
        <div className='w-[85%] m-auto mt-5'>
            <div className="overflow-x-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                {
                    userCartItems?.map((cartItems) => (

                        <div className="hero justify-start bg-red-50">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={cartItems.imageUrl} className="w-[5rem] h-[5rem] rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-2xl font-bold">{cartItems.name}</h1>
                                    <div className='flex justify-start mt-2'>
                                        <button onClick={() => handleDelete(cartItems._id)} className="btn btn-error btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Cart;
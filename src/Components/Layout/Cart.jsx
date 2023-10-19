import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Cart = () => {

    const loaded = useLoaderData();
    const [loadData, setLoadData] = useState(loaded)
    console.log(loaded)
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
                fetch(`https://assignment-10-server-5tdyve1cu-riad-sarkars-projects.vercel.app/cart/${_id}`, {
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
                            const remaining = loadData.filter(product => _id !== product._id)
                            setLoadData(remaining);
                        }
                    })
            }
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
                        {loadData?.map((cartItems, index) => (
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
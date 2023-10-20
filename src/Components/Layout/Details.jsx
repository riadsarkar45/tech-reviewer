import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FaBeer, FaStar } from 'react-icons/fa'
import { useContext } from "react";
import { AuthContexts } from "../AuthContext/AuthContext";
const Details = () => {
    const { user } = useContext(AuthContexts)
    console.log(user.email)
    const loaded = useLoaderData();
    const { _id, imageUrl, name, brandName, productType, price, rating, short_desc } = loaded;
    // const data =  loaded.map(prod => console.log("map data", prod))
    const handleAddCart = loaded => {
        const dataToSend = {
            name: name,
            brandName: brandName,
            productType: productType,
            price: price,
            rating: rating,
            imageUrl: imageUrl,
            email: user.email
        }
        fetch('https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Item added to the cart',
                    showConfirmButton: false,
                    timer: 1500
                })
                console.log(data)
            })

    }
    return (
        <div>
            <div className="w-[85%] m-auto mt-4 p-4 bg-gray-100 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">

                <div className="w-[100%]">
                    <img className="w-full" src={imageUrl} alt="" />
                </div>
                <div className=" w-[100%] p-3">
                    <h2 className="text-xl"> {name} </h2>
                    <h2 className="text-xl">Brand : {brandName}</h2>
                    <h2 className="text-xl">Price : {price}</h2>
                    <h2 className="text-xl">Type : {productType}</h2>
                    <Rating className="text-orange-300"
                        initialRating={rating}
                        emptySymbol={<FaStar></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    />
                    <div className="justify-end mt-1 flex">
                        <button onClick={() => handleAddCart(loaded)} className="btn btn-success">Add to cart</button>
                    </div>

                    <p className="mt-3">{short_desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
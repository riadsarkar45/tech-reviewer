import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FaBeer, FaStar } from 'react-icons/fa'
const Details = () => {
    const loaded = useLoaderData();
    const { _id, imageUrl, name, brandName, productType, price, rating, short_desc } = loaded;

    const handleAddCart = loaded => {
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loaded)
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
                    <h2 className="text-xl">{name}</h2>
                    <h2 className="text-xl">Brand : {brandName}</h2>
                    <h2 className="text-xl">Price : {price}</h2>
                    <h2 className="text-xl">Type : {productType}</h2>
                    <Rating className="text-orange-300"
                        initialRating={rating}
                        emptySymbol={ <FaStar></FaStar> }
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
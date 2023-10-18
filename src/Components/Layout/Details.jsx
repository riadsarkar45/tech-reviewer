import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const Details = () => {
    const loaded = useLoaderData();
    const { _id, imageUrl, name, brandName, productType, price, rating, short_desc } = loaded;

    const handleAddCart = loaded =>{
        console.log(loaded)
        fetch('http://localhost:5000/cart', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(loaded)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
        <div>
            <div className="w-[85%] m-auto bg-red-500 h-[26rem] grid grid-cols-2 gap-1">

                <div className="bg-black h-[26rem] w-[100%]">
                    <img className="w-full h-[26rem]" src={imageUrl} alt="" />
                </div>
                <div className="bg-pink-800 h-[26rem] w-[100%] p-3">
                    <h2 className="text-xl">{name}</h2>
                    <h2 className="text-xl">Brand : {brandName}</h2>
                    <h2 className="text-xl">Price : {price}</h2>
                    <h2 className="text-xl">Type : {productType}</h2>
                    <h2 className="text-xl">{rating}</h2>

                    <div className="justify-end mt-1 flex">
                        <button onClick={() =>handleAddCart(loaded)} className="btn btn-success">Add to cart</button>
                    </div>

                    <p className="mt-3">{short_desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
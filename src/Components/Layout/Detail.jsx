import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBeer, FaStar } from 'react-icons/fa'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Rating from "react-rating";
const Detail = () => {

    const products = useLoaderData();
    const [product] = useState(products, []);
    console.log(product.length)
    if (product.length < 1) {
        Swal.fire({
            title: 'No product added in this brand',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }

    const imageStyle1 = {
        backgroundImage: `url(https://i.ibb.co/Gkn2G8W/add-1.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '20rem',
        width: '100%'
    };

    const imageStyle2 = {
        backgroundImage: `url(https://i.ibb.co/z5m8hpr/add-3.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '20rem',
        width: '100%'
    };

    const imageStyle3 = {
        backgroundImage: `url(https://i.ibb.co/hWkHvDy/add-2.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '20rem',
        width: '100%'
    };



    return (
        <div className="w-[85%] m-auto">
            <div className="carousel w-[100%] m-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <div style={imageStyle1} className="flex justify-center items-center">
                        <div className="text-center">

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div style={imageStyle2} className="flex justify-center items-center">
                        <div className="text-center">

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div style={imageStyle3} className="flex justify-center items-center">
                        <div className="text-center">

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>





            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-4">
                {
                    product?.map(product =>

                        <div key={product._id} className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                            <figure className="h-[16rem]"><img src={product.imageUrl} alt="Shoes" /></figure>
                            <div className="grid grid-cols-2 w-[78%] m-auto mt-3">
                                <h2>Name : {product.name}</h2>
                                <h2 className="">Brand : {product.brandName}</h2>
                                <h2 className="mt-2">Price : {product.price}</h2>
                                <h2 className="mt-2">Type : {product.productType}</h2>
                                <Rating className="text-orange-300"
                                    initialRating={product.rating}
                                    emptySymbol={<FaStar></FaStar>}
                                    fullSymbol={<FaStar></FaStar>}
                                />
                            </div>
                            <div className="card-body">
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${product._id}`}><button className="btn btn-outline btn-info btn-sm">See Dtails</button></Link>
                                    <Link to={`/update/${product._id}`}><button className="btn btn-outline btn-info btn-sm">Update</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Detail;

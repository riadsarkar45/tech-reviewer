import { Link, useLoaderData } from "react-router-dom";

const Detail = () => {

    const product = useLoaderData();
    console.log(product.length)
    if(product.length < 1){
        confirm("No product availlabel in this brand")
    }

    const imageStyle = {
        backgroundImage: `url(https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '20rem',
        width: '100%'
    };

    return (
        <div className="w-[85%] m-auto">
            <div className="carousel">
                <div id="slide1" className="carousel-item relative w-full">
                    <div style={imageStyle} className="flex justify-center items-center">
                        <div className="text-center">
                            <h2 className="text-3xl text-red-300">Unleash Tomorrow's Promise: Exploring the Boundless Horizons of Technology</h2>
                            <p className="w-[50%] m-auto text-xl text-red-300">
                                Celebrating the boundless creativity of humanity, technology is the canvas on which we paint the future, weaving innovation into the fabric of our lives, one line of code at a time.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div style={imageStyle} className="flex justify-center items-center">
                        <div className="text-center">
                            <h2 className="text-3xl text-red-300">Unleash Tomorrow's Promise: Exploring the Boundless Horizons of Technology</h2>
                            <p className="w-[50%] m-auto text-xl text-red-300">
                                Celebrating the boundless creativity of humanity, technology is the canvas on which we paint the future, weaving innovation into the fabric of our lives, one line of code at a time.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div style={imageStyle} className="flex justify-center items-center">
                        <div className="text-center">
                            <h2 className="text-3xl text-red-300">Unleash Tomorrow's Promise: Exploring the Boundless Horizons of Technology</h2>
                            <p className="w-[50%] m-auto text-xl text-red-300">
                                Celebrating the boundless creativity of humanity, technology is the canvas on which we paint the future, weaving innovation into the fabric of our lives, one line of code at a time.
                            </p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-4">
                {
                    product?.map(product =>
                        
                        <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                            <figure className="h-[16rem]"><img src={product.imageUrl} alt="Shoes" /></figure>
                            <div className="grid grid-cols-2 w-[78%] m-auto mt-3">
                                <h2>Name : {product.name}</h2>
                                <h2 className="">Brand : {product.brandName}</h2>
                                <h2 className="mt-2">Price : {product.price}</h2>
                                <h2 className="mt-2">Type : {product.productType}</h2>
                                <h2 className="mt-2">Rating : {product.rating}</h2>
                            </div>
                            <div className="card-body">
                                <div className="card-actions justify-center">
                                    <button className="btn btn-outline btn-info btn-sm">See Dtails</button>
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

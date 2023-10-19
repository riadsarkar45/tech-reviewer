import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const BrandCards = () => {
    const [brands, setBrands] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])

  
    return (
        <div className="mt-4">
            <Banner></Banner>
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 w-[85%] m-auto gap-3 mt-4">
                {
                    brands?.map(brand =>
                        <Link key={brand._id} to={`/detail/${brand.name}`}>
                            <div className="card card-compact h-[85%] w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                                <figure><img src={brand.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <div className="card-actions justify-center">
                                        <h2 className="text-xl">{brand.name}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
            <div className="w-[85%] m-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 bg-gray-100 p-4 lg:gap-[27rem] md:gap-[27rem]">
                <div>
                    <h2>
                        <span className="text-red-400 text-4xl">Find Your Trusted</span>
                        <br />
                        <p className="text-3xl lg:w-[50rem]">
                            Software Development Partner with Techreviewer
                            Only proven information about tech companies and their expertise.
                        </p>
                    </h2>
                    <div>
                        <p className="">
                            Only proven information about tech companies and their expertise.
                        </p>
                    </div>
                    <button className="btn btn-success mt-4 p-4">Top Brand Companies</button>
                </div>
                <div className="">
                    <img className="h-[19rem] w-full" src="https://i.ibb.co/nM0Hp9g/26432755-freelance-set-4.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BrandCards;
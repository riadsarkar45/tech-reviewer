import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const BrandCards = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
            })
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 w-[85%] m-auto gap-3 mt-4">
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
        </div>
    );
};

export default BrandCards;
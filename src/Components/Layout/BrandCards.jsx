import { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";

const BrandCards = () => {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-10-server-5tdyve1cu-riad-sarkars-projects.vercel.app/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
                setIsLoading(false)
            })
    }, [])

    if(isLoading){
        return "Loading..."
    }
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

            <div className="w-[85%] m-auto mt-4">
                <div className="text-center">
                    <h2 className="text-3xl">Top IT Companies Ratings</h2>
                    <p className="lg:md:w-[50%] m-auto mt-3 text-xl">We selected and sorted the best companies from all over the world specializing in different technologies and solutions.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8">
                    <div>
                        <h2 className="text-3xl">Software Development</h2>
                        <div className="mt-4">
                            <p>Top Software Development Companies</p>
                            <p> Top Software Development Companies for Startups </p>
                            <p> Top Software Development Companies in USA </p>
                            <p>  Top Python and Django Developers</p>
                            <p> Top .NET Developers </p>
                            <p> Top Java Developers </p>
                            <p> Top Unity Developers </p></div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Web Development</h2>
                        <div className="mt-4">
                            <p> Top Web Development Companies </p>
                            <p> Top Ruby on Rails Companies </p>
                            <p> Top Node.js Development Companies </p>
                            <p> Top PHP Developers </p>
                            <p>  Top AngularJS Developers</p>
                            <p> Top WordPress Developers </p>
                            <p> Top Drupal Developers </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl">Mobile Development</h2>
                        <div className="mt-4">
                            <p>Top Mobile Development Companies</p>
                            <p>Top iOS App Development Companies</p>
                            <p>Top Android App Development Companies</p>
                            <p>Top Cross Platform App Developers</p>
                            <p>Top React Native Developers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCards;
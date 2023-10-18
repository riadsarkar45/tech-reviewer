import Banner from "./Banner";

const BrandCards = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-3 w-[85%] m-auto gap-3 mt-4">
                <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <h2 className="text-xl">Samsung</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <h2 className="text-xl">Sony</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <h2 className="text-xl">Apple</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <h2 className="text-xl">Google</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <h2 className="text-xl">Intel</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[100%] m-auto bg-base-100 shadow-xl rounded-none">
                    <figure><img src="https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-center">
                            <h2 className="text-xl">Microsoft</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandCards;
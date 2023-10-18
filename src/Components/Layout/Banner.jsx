import { useEffect, useState } from "react";

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imageUrls = [
        'https://i.ibb.co/rb28cXk/giu-vicente-FMArg2k3q-OU-unsplash.jpg',
        'https://i.ibb.co/9cYjTYf/felix-besombes-Ezr-HLVd83h0-unsplash.jpg',
        'https://i.ibb.co/7JM0qVz/nasa-Q1p7bh3-SHj8-unsplash.jpg',
        'https://i.ibb.co/Vj4SV1B/martin-shreder-5-Xwaj9ga-R0g-unsplash.jpg',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % imageUrls.length
            );
        }, 5000); // Change the image every 3 seconds (adjust as needed)

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const currentImage = imageUrls[currentImageIndex];

    const imageStyle = {
        backgroundImage: `url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="w-[85%] m-auto">
            <div style={imageStyle} className="h-[100vh] flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-3xl text-red-300">Unleash Tomorrow's Promise: Exploring the Boundless Horizons of Technology</h2>
                    <p className="w-[50%] m-auto text-xl text-red-300">
                        Celebrating the boundless creativity of humanity, technology is the canvas on which we paint the future, weaving innovation into the fabric of our lives, one line of code at a time.                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
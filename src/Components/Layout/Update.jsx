import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const loadedData = useLoaderData();
    const {_id, imageUrl, name, brandName, productType, price, rating, short_desc} = loadedData;
    console.log(loadedData)
    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageUrl = form.imageUrl.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_desc = form.short_description.value;
        const product = {name, imageUrl, brandName, productType, price, rating, short_desc}
        console.log(product)
        fetch(`https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/products/prod/${_id}`, {
            method: "PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            toast.success("Update Successfull")
        })
    }
    return (
        <div className="p-4">
            <div className="w-[85%] m-auto shadow-md">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold mb-4">Update Product</h2>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                id="name"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                placeholder="Enter your product name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Image Url</label>
                            <input
                                type="text"
                                id="email"
                                name="imageUrl"
                                defaultValue={imageUrl}
                                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                placeholder="Enter your image url"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Brand Name</label>
                            <input
                                type="text"
                                id="email"
                                name="brandName"
                                defaultValue={brandName}
                                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                placeholder="Enter your image url"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Product Type</label>
                            <input
                                type="text"
                                id="email"
                                name="productType"
                                defaultValue={productType}
                                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                placeholder="Enter your product type"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Price</label>
                            <input
                                type="text"
                                id="email"
                                name="price"
                                defaultValue={price}
                                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                placeholder="Enter your product price"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Rating</label>
                            <input
                                type="text"
                                id="email"
                                defaultValue={rating}
                                name="rating"
                                className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                placeholder="Enter your product rating"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Short Description</label>

                            <textarea defaultValue={short_desc} className="w-full px-3 py-2 border rounded-lg text-gray-700" placeholder="Product short description" name="short_description" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
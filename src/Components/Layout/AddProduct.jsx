
import { useContext } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imageUrl = form.imageUrl.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_desc = form.short_description.value;

        const product = { name, imageUrl, brandName, productType, price, rating, short_desc }
        console.log(product)
        fetch("https://assignment-10-server-8egwkdvkz-riad-sarkars-projects.vercel.app/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Product Uploaed',
                    showConfirmButton: false,
                    timer: 1500
                })
                e.target.reset()
            })
    }
    return (
        <div>
            <div className="p-4">
                <div className="w-[85%] m-auto shadow-md">
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
                        <form onSubmit={handleAddProduct}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
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
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                    placeholder="Enter product brand"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Product Type</label>
                                <select name="productType" className="w-full px-3 py-2 border rounded-lg text-gray-700" id="">
                                    <option value="HeadPhone">HeadPhone</option>
                                    <option value="Computer">Computer</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Phone">Phone</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Price</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="price"
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                    placeholder="Enter your product price"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Rating</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="rating"
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                    placeholder="Enter your product rating"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Short Description</label>

                                <textarea className="w-full px-3 py-2 border rounded-lg text-gray-700" placeholder="Product short description" name="short_description" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
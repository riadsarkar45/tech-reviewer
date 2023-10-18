
const AddProduct = () => {
    return (
        <div>
            <div className="p-4">
                <div className="max-w-md mx-auto rounded-lg shadow-md">
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-4">Beautiful Form</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 border rounded-lg text-gray-700"
                                    placeholder="Enter your email"
                                />
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
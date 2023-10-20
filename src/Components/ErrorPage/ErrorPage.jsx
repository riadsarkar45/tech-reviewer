import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
                <h1 className="text-6xl text-gray-800 font-bold mb-4">404</h1>
                <p className="text-xl text-gray-600">Page Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;
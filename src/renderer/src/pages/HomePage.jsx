import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="text-center mt-10 mx-16">
            <h1 className="text-4xl font-bold uppercase mb-4 text-green-600">CoconutDB</h1>
            <p className="text-lg mb-6 text-gray-700">
                Welcome to CoconutDB – a blazing-fast, developer-friendly NoSQL document database designed from scratch using Node.js.
            </p>
            <div className="space-x-4">
                <Link
                    to="/about"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition"
                >
                    Learn More
                </Link>
                <Link
                    to="/docs"
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition"
                >
                    View Docs
                </Link>
            </div>
        </div>
    );
};

export default HomePage;

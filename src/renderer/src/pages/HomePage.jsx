import React from 'react';
import { Link } from 'react-router-dom';
import { DatabaseZap, BookOpenCheck, Info } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 px-6">
            <div className="text-center">
                {/* ICON */}
                <div className="mb-4 bg-green-200 rounded-full p-4 shadow-lg animate-pulse">
                    <DatabaseZap className="h-12 w-12 text-green-700" />
                </div>

                {/* TITLE */}
                <h1 className="text-5xl font-extrabold text-green-700 uppercase tracking-widest">
                    CoconutDB
                </h1>

                {/* TAGLINE */}
                <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
                    A fast, custom-built NoSQL database engine written in Node.js — inspired by innovation, designed for speed.
                </p>

                {/* ACTION BUTTONS */}
                <div className="mt-8 space-x-4">
                    <Link
                        to="/about"
                        className="inline-flex items-center px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition"
                    >
                        <Info className="w-4 h-4 mr-2" /> Learn More
                    </Link>

                    <button
                        disabled
                        className="inline-flex items-center px-5 py-2.5 bg-gray-300 text-gray-500 border border-gray-400 rounded-full shadow-md cursor-not-allowed"
                    >
                        <BookOpenCheck className="w-4 h-4 mr-2" /> Start CoconutDB
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

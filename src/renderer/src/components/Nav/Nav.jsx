import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-500 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo or Title */}
                <div className="text-white text-xl font-bold tracking-wide">
                    🌴 CoconutDB
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                    <Link to={'/'}>
                        <button className="text-white hover:bg-white hover:text-emerald-600 px-4 py-2 rounded-xl transition-all duration-300">
                            Home
                        </button>
                    </Link>
                    <button className="text-white hover:bg-white hover:text-emerald-600 px-4 py-2 rounded-xl transition-all duration-300">
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;

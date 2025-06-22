import React from 'react';
import { Database } from 'lucide-react';

const LearnMore = () => {
    return (
        <div className="min-h-screen px-8 py-12 bg-white text-center">
            {/* ICON */}
            <div className="mb-6 flex justify-center">
                <div className="bg-green-100 p-4 rounded-full shadow-lg">
                    <Database className="h-10 w-10 text-green-700" />
                </div>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-green-700 uppercase mb-4">
                Learn More About CoconutDB
            </h1>

            {/* INTRO */}
            <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
                CoconutDB is a lightweight, blazing-fast, document-oriented NoSQL database engine built entirely with Node.js.
                It's designed for developers who demand simplicity, performance, and full control over their data layer.
            </p>

            {/* INSTRUCTIONS */}
            <div className="mt-12 text-left max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">🚀 How to Start CoconutDB</h2>

                <ol className="list-decimal list-inside space-y-4 text-gray-700 text-base">
                    <li>
                        <strong>Download CoconutDB</strong> from the official GitHub or releases page.
                    </li>
                    <li>
                        Unzip the package and open a terminal in the CoconutDB folder.
                    </li>
                    <li>
                        Run the server using:
                        <pre className="bg-gray-100 p-3 rounded mt-2 text-sm overflow-x-auto text-green-700 font-mono">
                            ./coconutdb&nbsp;&nbsp;&nbsp;// for Linux or MacOS<br />
                            coconutdb.exe&nbsp;&nbsp;&nbsp;// for Windows
                        </pre>
                    </li>
                    <li>
                        CoconutDB will now be running on <strong>localhost:27017</strong>
                    </li>
                    <li>
                        You can interact with it using your custom CoconutDB client or socket API.
                    </li>
                </ol>
            </div>

            {/* FOOTER */}
            <p className="mt-16 text-sm text-gray-500 italic">
                "Built not just to compete — but to define what’s next."
            </p>
        </div>
    );
};

export default LearnMore;

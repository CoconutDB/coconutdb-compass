import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CompassEnv = () => {
    const [alljsons, setalljsons] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_API + '/jsons/alljsons')
        .then(res => setalljsons(res.data.files))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="mt-8 px-4">
            <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
                Welcome to CoconutDB Compass
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
                {alljsons.map((file, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-green-50 border border-green-200 rounded-xl p-5 shadow hover:shadow-lg hover:scale-[1.02] transition duration-300"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-green-900">
                                        {file.name}
                                    </h2>
                                    <p className="text-green-700">
                                        Records: <span className="font-medium">{file.count}</span>
                                    </p>
                                </div>
                                <span className="text-green-800 bg-green-100 px-3 py-1 rounded-full text-sm">
                                    {file.sizeKB} KB
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CompassEnv

import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='text-center mt-4 mx-16'>
            <h1 className="uppercase">HomePage</h1>
                <Link to={'/about'}>
                    ajsdhakjs
                </Link>
        </div>
    )
}

export default HomePage
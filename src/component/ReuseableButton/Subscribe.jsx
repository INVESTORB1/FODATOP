import React from 'react'
import { Link } from 'react-router-dom'


const Subscribe = () => {
  return (
    <div>
        <div className='flex justify-center'>   
         <Link to={'/contact'} className='bg-blue-900 p-3 px-8 m-5 rounded-md text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out'><h3>Subscribe</h3></Link>
        </div>
    </div>
  )
}

export default Subscribe
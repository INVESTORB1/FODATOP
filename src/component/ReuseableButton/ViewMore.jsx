import React from 'react'
import { Link } from 'react-router-dom'

const ViewMore = () => {
  return (
    <div>
        <div className='flex justify-center'>   
         <Link to={'/gallery'} className='px-3  bg-blue-900 p-3 px-5 m-5 text-white hover:bg-blue-500 transition-colors duration-300 ease-in-out'><h3>View More</h3></Link>
        </div>
    </div>
  )
}

export default ViewMore
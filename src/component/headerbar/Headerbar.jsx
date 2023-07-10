import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from './Logo'




const Headerbar = () => {
  return (
    <div>
        <div className='flex justify-center gap-x-3  items-center gap-x-20 bg-blue-900 h-32 '>
           <Logo/>
            <div className='school-intro md:mr-20 text-white  pr-5 '>
                <p className='md:text-5xl text-xl font-serif items-center '>FODATOP GROUP OF SCHOOL</p>
                <h4>The home of Quality Education</h4>
            </div>
        </div>
    </div>
  )
}

export default Headerbar
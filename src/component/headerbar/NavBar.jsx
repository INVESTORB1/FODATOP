import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <div>
            <div className='flex text-black justify-between'>
                <div className='skul-name py-2 text-2xl text-blue-800 font-serif px-10'>
                    <p>FODATOP SCHOOL</p>
                </div>
                <div className='nav-bar flex '>
                    <ul className=' flex-row py-2 hidden sm:flex   '>
                    <Link to={'/'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out' >HOME</li></Link>
                    <Link to={'/about'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>ABOUT</li></Link>  
                    <Link to={'/admission'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>ADMISSION</li></Link>  
                    <Link to={'/fodatop'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>FODATOP SCHOOL</li></Link>  
                    <Link to={'/gallery'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>GALLERY</li></Link>  
                    <Link to={'/contact'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>CONTACT</li></Link>  
                    </ul>
                </div>

            </div>
        </div>

    </div>
  )
}

export default NavBar
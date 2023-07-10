import React from 'react'
import skullogo from '../image/logo.png.png'

const Logo = () => {
  return (
    <div>
         <div className='school-logo  w-[150px]  md:w-[160px] '>    
               <img  src={skullogo} alt="skul-logo" />
            </div>
    </div>
  )
}

export default Logo
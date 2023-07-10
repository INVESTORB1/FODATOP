import React from 'react'
import { Link } from 'react-router-dom'

const FooterTwo = () => {
  return (
    <div>
        <div className=''>
            <div className='flex flex-row bg-green-400 text-black justify-around text-justify text-lg w-full'>
                <div className='m-3'> 
                    <div>
                        <h2>USEFUL LINKS</h2>
                    </div>
                    <div className='useful-link'>
                        <ul className=' flex-col py-2'>
                            <Link to={'/home'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out' >HOME</li></Link>
                            <Link to={'/about'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>ABOUT US</li></Link>  
                            <Link to={'/admission'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>ADMISSION</li></Link>    
                            <Link to={'/gallery'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>GALLERY</li></Link>  
                        </ul>
                    </div>
                </div>
                <div className='m-3'>
                    <div><h2>INNER LINKS</h2></div>
                <ul className=' flex-col py-2'>
                        <Link to={'/home'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out' >HOME</li></Link>
                        <Link to={'/about'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>ABOUT US</li></Link>  
                        <Link to={'/admission'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>ADMISSION</li></Link>    
                        <Link to={'/gallery'}><li className='px-3 hover:bg-blue-900 transition-colors duration-300 ease-in-out'>GALLERY</li></Link>  
                    </ul>
                </div>
                <div className='flex flex-col m-3'>
                    <div><h3>CONTACT US</h3></div>
                    <div className='break-words'>
                        <h3>
                            Fodatop Schools is located in Lagos,<br /> Lagos State.
                            Dapo Atanda Street, Lagos, Nigeria <br />
                            Phone: +234 7030803037, +234 9097757758
                        </h3>
                        <h3>
                            Email: Pbank0001@gmail.com
                        </h3>
                    </div>
                </div>
                <div className='m-3'>
                    <div className='mb-3'><h3>ABOUT US</h3></div>
                    <div className='mb-3'>
                        <h3>Welcome to Fodatop School,<br />where academic excellence and personal growth converge!</h3>
                    </div>
                    <div className='flex flex-row mr text-blue-900'>
                        <div className='pr-3'><ion-icon name="logo-facebook"></ion-icon></div>
                        <div className='pr-3'><ion-icon name="logo-instagram"></ion-icon></div>
                        <div className='pr-3'><ion-icon name="logo-linkedin"></ion-icon></div>
                        <div className='pr-3'><ion-icon name="logo-twitter"></ion-icon></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterTwo
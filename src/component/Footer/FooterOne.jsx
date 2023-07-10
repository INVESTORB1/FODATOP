import React from 'react'
import Subscribe from '../ReuseableButton/Subscribe'

const FooterOne = () => {
  return (
    <div className='bg-gray-400 mt-10'>
        <div className='flex flex-col text-black justify-center'>
            <div className=' m-3 text-xl font-bold'>
                <h3 className=''>SUBSCRIBE TO OUR NEWSLETTER</h3>
            </div>
            <div className=''>
            <input type="email" placeholder='Enter your email' className="border  border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[400px]"/>
            </div>
            <div>
                <Subscribe/>
            </div>
            <div>
                <h3>Subscribe to our newsletter to get latest update from the school</h3>
            </div>
        </div>
    </div>
  )
}

export default FooterOne
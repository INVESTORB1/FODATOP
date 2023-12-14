import React from 'react'

const Prop = (props) => {
  return (
    <div>
        <div className='text-blue-700 bg-gray-200 flex flex-col gap-y-4 w-[250px] h-[320px] shadow-3xl rounded-lg mx-4 px-6 py-4 text-justify' >
           <div className='text-5xl text-blue-900'>{props.icon}</div>
           <div className='font-bold'>{props.aim}</div>
           <div className='text-gray-600'>{props.content}</div>
        </div>
    </div>
  )
}

export default Prop
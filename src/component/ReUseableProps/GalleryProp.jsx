import React from 'react'

const GalleryProp = (props) => {
  return (
    <div>
        <div>
           <div>
           <div className='font-bold'>{props.pic1}</div>
           <div className='font-bold'>{props.pic2}</div>
           <div className='font-bold'>{props.pic3}</div>
           </div>
        </div>
    </div>
  )
}

export default GalleryProp
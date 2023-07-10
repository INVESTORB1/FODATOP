import React from 'react'
import Prop from '../Prop'

const Admision = () => {
  return (
    <div>
         <div> 
            <Prop
                icon={<ion-icon name="calendar-outline"></ion-icon>}
                aim= 'ADMISSION'
                content='The admission process at Tunmise is designed to be seamless and transparent. We welcome students from diverse backgrounds and offer equal opportunities for all. To apply, simply fill out our online application form, provide the required documents, and schedule an admission assessment.'
             />
          </div>
    </div>
  )
}

export default Admision
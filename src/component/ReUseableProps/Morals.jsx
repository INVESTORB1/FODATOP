import React from 'react'
import Prop from '../Props/Prop'

const Morals = () => {
  return (
    <div className='flex flex-row justify-center m-4 '>
        <div>
            <Prop
                icon={<ion-icon name="medal-outline"></ion-icon>}
                aim= 'FEAR OF GOD'
                content='Embracing the fear of God nurtures moral values, guiding students towards integrity, compassion, and righteousness.'
             />
        </div>
        <div>
            <Prop
                icon={<ion-icon name="medal-outline"></ion-icon>}
                aim= 'PUNCTUALITY'
                content='Punctuality instills discipline, respect, and efficiency, fostering a culture of reliability and maximizing productivity in schools.'
             />
        </div>
        <div>
            <Prop
                icon={<ion-icon name="medal-outline"></ion-icon>}
                aim= 'ORDERLINESS'
                content='Orderliness cultivates an environment of structure, discipline, and harmony, promoting focus, productivity, and a sense of responsibility in schools.'
             />
        </div>
    </div>
  )
}

export default Morals
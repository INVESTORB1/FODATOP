import React from 'react'
import Skulpic from '../image/Skulpic'
import Vision from '../Props/Vision/Vision'
import Mission from '../Props/Mission/Mission'
import Admision from '../Props/Admission/Admision'
import About from './About'
import GalleryProp from '../ReUseableProps/GalleryProp'
import schoolpic from '../image/skul1.jpeg'
import schoolpic2 from '../image/skul3.jpg'
import ViewMore from '../ReuseableButton/ViewMore'
import Morals from '../ReUseableProps/Morals'


const Home = () => {
  return (
    <div className='m-3'>
        <div className='flex justify-center'>
          <Skulpic/>
        </div>
        <div>
            <div className='flex flex-row justify-center m-4 '>
                <Vision/>
                <Mission/>
                <Admision/>
            </div>
        </div>

        <div>
            <About/>
        </div>
        <div>
            <div className=' flex justify-center font-bold text-black text-5xl'>
                    <h2 className='mt-10'>GALLERY</h2>
            </div>

             <div className='flex flex-row m-3 p-5 shadow-lg gap-x-5 '>
                 <GalleryProp
                      pic1= {<img src={schoolpic} alt="schoolpic"/>}
                />
                 <GalleryProp
                      pic2={<img src={schoolpic2} alt="schoolpic"/>}
                 />
                 <GalleryProp
                      pic3={<img src={schoolpic2} alt="schoolpic" />}
                 />
             </div>
             <div>
                <ViewMore/>
             </div>
             <div>
                <Morals/>
             </div>
        </div>
    </div>
  )
}

export default Home
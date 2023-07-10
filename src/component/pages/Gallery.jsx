import React from 'react'
import schoolpic from '../image/skul1.jpeg'
import schoolpic2 from '../image/skul3.jpg'
import GalleryProp from '../ReUseableProps/GalleryProp'

const Gallery = () => {
  return (
    <div>
        <div>
            <div className='flex flex-col'>

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

               
            </div>
        </div>
    </div>
  )
}

export default Gallery
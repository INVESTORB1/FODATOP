import React from 'react'
import Skul from '../image/skul.jpg'


const About = () => {
  return (
    <div>
        <div className='flex justify-center  gap-x-8 '>
            <div className='m-4 py-8 w-[400px]  '>
            <img src={Skul} alt="" />
            </div>
            <div className='w-[450px] text-black py-10 text-justify'>
                <h3 className='flex-grow'>"Welcome to Fodatop School, where academic excellence and personal growth converge!</h3>
                <h3 className='flex-grow'>At Fodatop, we are committed to providing a dynamic and nurturing learning environment that empowers students to reach their full potential. Our dedicated faculty and staff foster a love for learning and inspire students to become critical thinkers, problem solvers, and compassionate individuals.</h3>
                <h3 className='flex-grow'>We believe in a holistic approach to education, where students' intellectual, emotional, and physical development is equally valued. Our comprehensive curriculum combines rigorous academics with a wide range of extracurricular activities, allowing students to explore their passions and develop well-rounded skills.</h3>
            </div>
        </div>
    </div>
  )
}

export default About
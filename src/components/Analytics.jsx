import React from 'react';
import lap from '../assets/images/comp.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img className='w-[500px] mx-auto my-4' src={lap} alt="/" />
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analyitcs Centrally </h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus error, qui fugiat totam quisquam consequuntur unde, non labore illo dolorem nesciunt at nam fugit facilis nihil earum in magni esse?</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;
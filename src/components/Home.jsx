import React from 'react'
import FeedbackComponent from './FeedBackComponent'
import Header from './Header'

const Home = () => {
  return (
    <div>
         <Header/>
      <h1 className='text-6xl font-bold text-customFont mt-20'>Please rate today's service</h1>
      <FeedbackComponent/>
      <button className='border px-20 py-2 rounded-xl mt-9  bg-customBorder text-white font-medium'>Confirm</button>

    </div>
  )
}

export default Home
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Homepage = () => {
  
    return (
    <div className='max-w-screen-2xl mx-auto'> 
    <Nav />
    <h1 className='text-blue-950 font-bebas text-9xl text-center'>Dayton Swish</h1>
    <h1 className='text-blue-950 font-bebas text-6xl text-center'>Youth Basketball</h1>
    <br></br>
    <br></br>
    <div className='grid grid-cols-2'>
      <div className='col-start-2'>
    <h1 className='font-bebas text-blue-950 text-3xl mx-auto bg-blue-300 w-4/6 text-center roounded'>Upcoming Events</h1>
    <img src="/src/img/xmas clinic final.jpeg" className='rounded mx-auto h-auto w-4/6' />
    {/* <div className='flex justify-end'>
    <div className='flex border-2 border-blue-950 justify-center rounded w-1/5 h-96 bg-white'>
      <div  className='border-blue-950 w-full h-10 bg-blue-300'>
      <h3 className='font-bebas text-white text-4xl text-center'>Announcements</h3>
      </div>
    </div>
    </div> */}
    </div>
    </div>
    <br></br>
    <br></br>
    <Footer />
    </div>
  )
}

export default Homepage

import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Registration = () => {
  return (
    
      <div className='max-w-screen-2xl mx-auto'> 
        <Nav/>
        
        <img src="/src/img/logo.JPG" className='h-auto max-w-[200px] mx-auto'/>
        <br></br>
        <h1 className='font-bebas text-blue-950 text-3xl text-center'>Upcoming Events for the 2023/2024 Season</h1>
        <Footer/>
    </div>
  )
}

export default Registration
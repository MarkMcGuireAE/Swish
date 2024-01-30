import React from 'react'
import Nav from '../components/Nav'

const ContactUs = () => {
  return (
    
      <div className='max-w-screen-2xl mx-auto'> 
        <Nav/>
        
        <img src="/src/img/logo.JPG" className='h-auto max-w-[200px] mx-auto'/>
        <br></br>
        <h1 className='font-bebas text-blue-950 text-3xl text-center'>Upcoming Events for the 2023/2024 Season</h1>

        <form className='font-bebas text-blue-950 text-2xl text-center'>
          <label>Name: </label>
          <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' type="text" name="user_name" />
          <br></br>
          <label>Email: </label>
          <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' type="email" name="user_name" />
          <br></br>
          <label>Subject: </label>
          <input className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' type="subject" name="user_name" />
          <br></br>
          <label>Message: </label>
          <textarea className='rounded font-bebas bg-gray-200 border-2 border-blue-950 text-blue-950 focus:bg-blue-300 text-3xl mx-auto' name="message" />
          <br></br>
          <br></br>
          <button className="rounded bg-blue-950 text-blue-300 px-7 py-1 ">Send Email </button>
        </form>
    </div>
  )
}

export default ContactUs
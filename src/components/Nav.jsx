import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div class="bg-blue-300">
        <div class="w-3/5 flex justify-around items-center font-bebas text-white text-3xl">
 <Link  to="/">
 <img src="/src/img/logo.png" className='h-auto max-w-[100px]'/>
        </Link>


        <Link  className="nav-item"  to="/">
            <h1>Home</h1>
        </Link>
        <Link  className="nav-item" to="/pages/Schedule">
            <h1>Schedule</h1>
        </Link>
        <Link className="nav-item" to="/pages/Registration">
            <h1>2024 Try Outs</h1>
        </Link>
        <Link   className="nav-item"  to="/pages/ContactUs">
            <h1>Contact Us</h1>
        </Link>
        <Link  className="nav-item"  to="https://www.daytonmetro.org/">
            <h1>Dayton Metro League</h1>
        </Link>

      </div>


    </div>
  )
}

export default Nav
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo  from "../assets/shared/logo.svg"

const Navbar = () => {
  return (
    <>
        <nav className='navbar flex items-center justify-between pl-12 mt-10 h-full'>
            <div className="nav_logo basis-1/12">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav_line basis-4/12">
                <div className="line"></div>
            </div>
            <div className="nav_links pl-12 basis-7/12 pr-20 h-full">
                <ul className="flex text-white items-center justify-evenly gap-x-1.5">
                    <li className='py-10'><NavLink to="/"><span className='font-bold mr-2'>00</span> HOME</NavLink></li>
                    <li className='py-10'><NavLink to="/destination"><span className='font-bold mr-2'>01</span> DESTINATION</NavLink></li>
                    <li className='py-10'><NavLink to="/crew"><span className='font-bold mr-2'>02</span> CREW</NavLink></li>
                    <li className='py-10'><NavLink to="/technology"><span className='font-bold mr-2'>03</span> TECHNOLOGY</NavLink></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
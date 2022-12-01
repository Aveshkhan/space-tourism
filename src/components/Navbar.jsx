import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Squash as Hamburger } from 'hamburger-react'
import logo from "../assets/shared/logo.svg"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false)

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

            <nav className='mobileNav flex items-center justify-between p-8'>
                <div className="nav_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="menu">
                    <Hamburger color="#ffffff" toggled={isOpen} toggle={setOpen} />
                </div>
                <div className="mSideNav">
                    <div className="sideNavLink">
                    <ul className="flex flex-col text-white items-start justify-evenly gap-x-1.5">
                        <li className='py-10'><NavLink to="/"><span className='font-bold mr-2'>00</span> HOME</NavLink></li>
                        <li className='py-10'><NavLink to="/destination"><span className='font-bold mr-2'>01</span> DESTINATION</NavLink></li>
                        <li className='py-10'><NavLink to="/crew"><span className='font-bold mr-2'>02</span> CREW</NavLink></li>
                        <li className='py-10'><NavLink to="/technology"><span className='font-bold mr-2'>03</span> TECHNOLOGY</NavLink></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
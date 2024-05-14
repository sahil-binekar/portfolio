import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="grid grid-flow-col bg-base-100">
        <div className="flex-1">
            <a className="text-3xl text-white font-mono font-bold">sahil.binekar</a>
        </div>
        <div className="flex justify-end">
            <ul className="px-1 flex space-x-8">
            <li>
                <NavLink key="Home"
                    to="/home"
                    className="text-white text-xl font-mono font-bold hover:underline hover:text-cyan-200 focus:underline"
                >Home</NavLink>
            </li>
            <li>
                <NavLink key="About"
                    to="/about"
                    className='text-white text-xl font-mono font-bold hover:underline hover:text-cyan-200 focus:underline'
                >About</NavLink>
            </li>
            <li>
                <NavLink key="Skills"
                    to="/skills"
                    className='text-white text-xl font-mono font-bold hover:underline hover:text-cyan-200 focus:underline'
                >Skills</NavLink>
            </li>
            <li>
                <NavLink key="Projects"
                    to="/projects"
                    className='text-white text-xl font-mono font-bold hover:underline hover:text-cyan-200 focus:underline'
                >Projects</NavLink>
            </li>
            <li>
                <NavLink key="Contact"
                    to="/contact"
                    className='text-white text-xl font-mono font-bold hover:underline hover:text-cyan-200 focus:underline'
                >Contact</NavLink>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar

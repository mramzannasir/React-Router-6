import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <nav className='flex justify-between items-center p-2 bg-slate-700 '>
        <div className='logo text-2xl font-semibold text-white'>
          <Link to="business" >Nasir's News App</Link>
          </div>
        <div className=''>
          <ul className='flex space-x-4 text-gray-400'>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/" >Home</Link>
              </li>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/business" >Business</Link>
              </li>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/entertainment" >Entertainment</Link>
            </li>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/health" >Health</Link>
              </li>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/science" >Science</Link>
              </li>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/sports" >Sports</Link>
              </li>
            <li className='cursor-pointer transition hover:text-gray-100 duration-200' >
              <Link to="/technology" >Technology</Link>
              </li>
          </ul>
        </div>
      </nav>
    )
  }
}

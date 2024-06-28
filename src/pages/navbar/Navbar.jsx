import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div class="navbar">
    <div class="active">Home</div>
    <Link to="/blog/create"><div>Add Blog</div></Link>

  </div>

    </>
  )
}

export default Navbar
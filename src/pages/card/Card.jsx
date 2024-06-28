import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'

const Card = ({blog}) => {
  
  return (
    <>
    <Link to={`/blog/singlepage/${blog._id}`}>
    <div className="card-container">
    <div class="card">
        <img src="https://via.placeholder.com/250x150" alt="Image 1"/>
        <h2>{blog.title}</h2>
        <h3>{blog.subTitle}</h3>
        <p>{blog.description}</p>
      </div>
    </div>
    
    </Link>
    </>
  )
}

export default Card
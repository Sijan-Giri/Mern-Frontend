import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Card from '../card/Card'
import "./Home.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../../../store/blogSlice'

const Home = () => {

  const dispatch = useDispatch();
  const {blogs} = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs());
  },[])

  return (
    <>
    <Navbar />
    <div className="container">
    {
      blogs.length > 0 && blogs.map((blog) => {
        return (
          <Card blog={blog}/> 
        )
      })
    }
    
    </div>
    
    </>
  )
}

export default Home
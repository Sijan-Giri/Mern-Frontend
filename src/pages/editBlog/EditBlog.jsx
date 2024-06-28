import React, { useState } from 'react'
import "./EditBlog.css"
import { useDispatch } from 'react-redux'
import { editBlog } from '../../../store/blogSlice';
import { useParams } from 'react-router-dom';
const EditBlog = () => {

  const dispatch = useDispatch();
  const {id} = useParams();

  const [data,setData] = useState({
    title : '',
    subtitle : '',
    description : ''
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBlog(data,id));
  }

  return (
    <>
    <div className="container">
    <h1>Edit Blog</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" onChange={handleChange} required />

      <label htmlFor="subtitle">Subtitle</label>
      <input type="text" id="subtitle" name="subtitle" onChange={handleChange} required />

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" onChange={handleChange} required></textarea>

      <button type="submit">Create Blog</button>
    </form>
  </div>
    </>
  )
}

export default EditBlog
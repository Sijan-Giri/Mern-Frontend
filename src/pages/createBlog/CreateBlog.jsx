import React, { useState } from 'react'
import "./CreateBlog.css"
import { useDispatch, useSelector } from 'react-redux';
import { STATUSES, createBlog, setStatus } from '../../../store/blogSlice';
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {status} = useSelector((state) => state.blog);

  const [data,setData] = useState({
    title : '',
    subtitle : '',
    description : ''
  });

  const handleChange = (e) => {
    const {name , value} = e.target;
    setData({
      ...data,
      [name] : value
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog(data));
  }

  if(status === STATUSES.SUCCESS) {
    navigate('/');
    dispatch(setStatus(null))
  } 

  return (
    <>
    <div class="container">
    <h1>Create Blog</h1>
    <form onSubmit={handleSubmit}>
      <label for="title">Title</label>
      <input type="text" id="title" name="title" onChange={handleChange} required />

      <label for="subtitle">Subtitle</label>
      <input type="text" id="subtitle" name="subtitle" onChange={handleChange} required />

      <label for="description">Description</label>
      <textarea id="description" name="description" onChange={handleChange} required></textarea>

      <button type="submit">Create Blog</button>
    </form>
  </div>
    </>
  )
}

export default CreateBlog
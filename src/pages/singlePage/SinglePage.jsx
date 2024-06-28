import React, { useEffect } from 'react'
import "./SinglePage.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { STATUSES, deleteBlog, fetchSingleBlog } from '../../../store/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
const SinglePage = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const {singleBlog, status} = useSelector((state) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleBlog(id));
  },[])

  const handleDelete = () => {
    dispatch(deleteBlog(id));
    if(status === STATUSES.SUCCESS) {
      navigate('/');
    }
  }

  return (
    <>
     <div class="container">
    <div class="image-container">
      <img src="https://via.placeholder.com/1200x800" alt="Full Width Image"/>
    </div>
    <div class="content">
      <h2>{singleBlog.title}</h2>
      <h4>{singleBlog.subTitle}</h4>
      <p>{singleBlog.description}</p>
      <div class="buttons">
        <Link to={`/blog/edit/${id}`}><button class="edit">Edit</button></Link>
        <button class="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default SinglePage
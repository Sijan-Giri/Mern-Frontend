import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = {
    LOADING :  'loading',
    SUCCESS : 'success',
    ERROR : 'error'
}

const blogSlice = createSlice({
    name : 'blog',
    initialState : {
        status : null,
        blogs : [],
        singleBlog : []
    },
    reducers : {
        setStatus(state,action) {
            state.status = action.payload
        },
        setBlogs(state,action) {
            state.blogs = action.payload
        },
        setSingleBlog(state,action) {
            state.singleBlog = action.payload
        }
    }
})

export const {setStatus , setBlogs , setSingleBlog} = blogSlice.actions;
export default blogSlice.reducer;

export function fetchBlogs() {
    return async function fetchBlogsThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await axios.get("http://localhost:3000/blogs");
        try {
            if(response.status === 200) {
                dispatch(setBlogs(response.data.data));
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR));
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
}

export function fetchSingleBlog(id) {
    return async function fetchSingleBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await axios.get(`http://localhost:3000/blogs/${id}`);
        try {
            if(response.status === 200) {
                dispatch(setSingleBlog(response.data.data));
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function createBlog(data) {
    return async function createBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await axios.post("http://localhost:3000/createBlog",data);
        try {
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS));
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function deleteBlog(id) {
    return async function deleteBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await axios.delete(`http://localhost:3000/blogs/${id}`)
        try {
            if(response.status === 200) {
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

export function editBlog(data,id) {
    return async function editBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING));
        const response = await axios.patch(`http://localhost:3000/blogs/${id}`,data);
        if(response.status === 200) {
            dispatch(setStatus(STATUSES.SUCCESS));
        }
        else {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import SinglePage from './pages/singlePage/SinglePage'
import EditBlog from './pages/editBlog/EditBlog'
import CreateBlog from './pages/createBlog/CreateBlog'
import { Provider } from 'react-redux'
import store from '../store/store'
import { Suspense } from 'react'

function App() {


  return (
    <>
      <Suspense fallback={<h1>Loading....</h1>}>
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/singlepage/:id' element={<SinglePage/> }/>
        <Route path='/blog/edit/:id' element={<EditBlog/> }/>
        <Route path='/blog/create' element={<CreateBlog/> }/>
      </Routes>
      </BrowserRouter>
      </Provider>
      </Suspense>
    </>
  )
}

export default App

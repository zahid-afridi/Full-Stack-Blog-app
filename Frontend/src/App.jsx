import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'

import UserLayout from './Layout/UserLayout'
import Admin from './Pages/Admin/Admin'
import Adminlayout from './Layout/Adminlayout'
import AddPost from './Pages/Admin/AddPost'
import User from './Pages/Admin/User'
import AllPost from './Pages/AllPost'

export default function App() {
  return (
  <>
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<UserLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='blog' element={<Blog/>}></Route>
    </Route>
        <Route path='/dashboard' element={<Adminlayout/>}>
        <Route index element={<Admin/>}/>
        <Route path='addpost' element={<AddPost/>}/>
        <Route path='users' element={<User/>}/>
        <Route path='allposts' element={<AllPost/>}/>
        </Route>
   </Routes>
   </BrowserRouter>
  </>
  )
}

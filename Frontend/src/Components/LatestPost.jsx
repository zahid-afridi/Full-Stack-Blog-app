import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {  BaseUrl, get } from '../services/Endpoint'

export default function LatestPost() {
    const navigation = useNavigate()
    
    const handleBlog = (id) => {
       navigation(`/blog/${id}`)
    }
    const [blogs,setBlogs]=useState([])
  useEffect(()=>{
    const blogs=async()=>{
          try {
            const request= await get('/blog/GetPosts')
          const resposne= request.data
          setBlogs(resposne.posts)
          console.log('blogs',resposne)
          } catch (error) {
            console.log(error)
          }
    }
    blogs()
  },[])

    return (
        <>
            <div className="container">
                <div className='mb-5 text-center'>
                    <h2 className="fw-bold fs-1 text-white">Recent Posts</h2>
                </div>
                <div className="row">
                    {blogs && blogs.map((elem)=>{
                        return(
                            <div className="col-md-4 mb-4">
                            <div className="card border-success" style={{ borderWidth: "2px", backgroundColor: "#2b2b2b", borderRadius: "10px", overflow: "hidden" }}>
                                <img 
                                    src={`${BaseUrl}/images/${elem.image}`}
                                    className="card-img-top img-fluid" 
                                    alt="Blog Post 1" 
                                    style={{ height: "200px", objectFit: "cover" }} 
                                />
                                <div className="card-body bg-dark text-white">
                                    <h5 className="card-title">{elem.title}</h5>
                                    <p className="card-text">{elem.desc}</p>
                                    <a href="" className="btn btn-primary w-100 mt-3" onClick={()=>handleBlog(elem._id)}>Read Article</a>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                    
                    
                </div>
            </div>
        </>
    )
}

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BaseUrl, get } from '../services/Endpoint';

export default function Blog() {
  const { postId } = useParams(); // Assuming you're passing the post ID in the route
  console.log('postid',postId)
  const [post,setPost]=useState()

  useEffect(()=>{
    const SinglePost=async()=>{
      try {
        const request= await get(`/public/Singlepost/${postId}`)
        const resposne= request.data
        setPost(resposne.Post)
        console.log(resposne)
        
      } catch (error) {
        console.log(error)
      }
    }
    SinglePost()
  },)
  return (
    <div className="container text-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fw-bold text-white mb-4 display-4">{post && post.title}</h1>
          <img 
            src={post && `${BaseUrl}/images/${post.image}`} 
            alt="Exploring the Art of Writing" 
            className="img-fluid mb-4" 
            style={{ borderRadius: "10px", maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
          
          <p className="mb-5">{post && post.desc}</p>

          {/* <div className="bg-dark p-4 rounded mb-5">
            <h2 className="text-white mb-4">Big Dedication</h2>
            <p className="mb-0">Dedication is key to mastering the art of writing. As with any craft, the more you practice, the better you become. This article encourages you to write daily, seek feedback, and never stop learning. Your dedication to improving your writing skills will be rewarded with clearer, more compelling communication.</p>
          </div> */}

          <hr />

          <h3 className="mt-5 mb-4">Leave a Comment</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea className="form-control" id="comment" rows="4" placeholder="Write your comment here" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Comment</button>
          </form>

          <hr />

          <h3 className="mt-5 mb-4">Comments</h3>
         {post && post.comments && post.comments.map((elem)=>{
          return(
            <div className="bg-secondary p-3 rounded mb-3 d-flex">
            <img 
             src={`${BaseUrl}/images/${elem.userId.profile}`}
              alt="John Doe" 
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h5 className="mb-1">{elem.userId.FullName}</h5>
              <p className="mb-0">{elem.comment}</p>
            </div>
          </div>
          )
         })}
       
      
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom';

export default function Blog() {
  const { postId } = useParams(); // Assuming you're passing the post ID in the route

  return (
    <div className="container text-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="fw-bold text-white mb-4 display-4">Exploring the Art of Writing</h1>
          <img 
            src="https://img.freepik.com/free-photo/young-woman-working-laptop-cafe_1303-15868.jpg" 
            alt="Exploring the Art of Writing" 
            className="img-fluid mb-4" 
            style={{ borderRadius: "10px", maxHeight: "500px", objectFit: "cover", width: "100%" }}
          />
          <p className="lead mb-4">In this article, we dive deep into the world of writing, exploring various techniques and strategies to enhance your writing skills...</p>
          <p className="mb-5">Writing is an art form that allows us to communicate our thoughts and ideas in a clear and effective manner. Whether you’re writing for an audience of millions or just for yourself, the ability to craft a well-structured, engaging piece of writing is a skill worth developing...</p>

          <div className="bg-dark p-4 rounded mb-5">
            <h2 className="text-white mb-4">Big Dedication</h2>
            <p className="mb-0">Dedication is key to mastering the art of writing. As with any craft, the more you practice, the better you become. This article encourages you to write daily, seek feedback, and never stop learning. Your dedication to improving your writing skills will be rewarded with clearer, more compelling communication.</p>
          </div>

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
          <div className="bg-secondary p-3 rounded mb-3 d-flex">
            <img 
             src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1723659916~exp=1723663516~hmac=64f83d6a70ff1d7e4a4082cbdb9b41ff4bef9fe6bd87526b7151c448fbef2083&w=826" 
              alt="John Doe" 
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h5 className="mb-1">John Doe</h5>
              <p className="mb-0">This article really resonated with me. The tips on improving writing skills are spot on!</p>
            </div>
          </div>
          <div className="bg-secondary p-3 rounded mb-3 d-flex">
            <img 
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1723659916~exp=1723663516~hmac=64f83d6a70ff1d7e4a4082cbdb9b41ff4bef9fe6bd87526b7151c448fbef2083&w=826" 
              alt="Jane Smith" 
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h5 className="mb-1">Jane Smith</h5>
              <p className="mb-0">Great article! I especially liked the section on daily writing habits.</p>
            </div>
          </div>
          <div className="bg-secondary p-3 rounded d-flex">
            <img 
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1723659916~exp=1723663516~hmac=64f83d6a70ff1d7e4a4082cbdb9b41ff4bef9fe6bd87526b7151c448fbef2083&w=826" 
              alt="Michael Brown" 
              className="rounded-circle me-3"
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            <div>
              <h5 className="mb-1">Michael Brown</h5>
              <p className="mb-0">Thanks for the insights! I’m definitely going to apply these techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

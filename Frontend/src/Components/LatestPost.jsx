import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LatestPost() {
    const navigation = useNavigate()
    
    const handleBlog = () => {
       navigation('/blog')
    }

    return (
        <>
            <div className="container">
                <div className='mb-5 text-center'>
                    <h2 className="fw-bold fs-1 text-white">Recent Posts</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card border-success" style={{ borderWidth: "2px", backgroundColor: "#2b2b2b", borderRadius: "10px", overflow: "hidden" }}>
                            <img 
                                src="https://img.freepik.com/free-photo/young-woman-working-laptop-cafe_1303-15868.jpg" 
                                className="card-img-top img-fluid" 
                                alt="Blog Post 1" 
                                style={{ height: "200px", objectFit: "cover" }} 
                            />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title">Exploring the Art of Writing</h5>
                                <p className="card-text">Discover techniques to enhance your writing skills and express your thoughts clearly.</p>
                                <a href="" className="btn btn-primary w-100 mt-3" onClick={handleBlog}>Read Article</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [islogin,setIslogin]=useState(false)
  return (
    <nav className="navbar d-flex justify-content-between   align-items-center p-3">
      <Link to={'/'}><h1 className="mx-5 text-white fs-2 fw-bold">CodeByZahid</h1></Link>
      <div className="d-flex align-items-center">
        {!islogin ? <Link to={'/login'}><button className="btn_sign mx-3">Sign in</button></Link> : (
            <div className="dropdown">
            <div className="avatar-container pointer rounded-circle overflow-hidden bg-info" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: '40px', height: '40px', cursor: "pointer" }}>
              <img 
                className="img-fluid h-100 w-100" 
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1723659916~exp=1723663516~hmac=64f83d6a70ff1d7e4a4082cbdb9b41ff4bef9fe6bd87526b7151c448fbef2083&w=826" 
                alt="Profile"
                style={{objectFit:"cover"}}
              />
            </div>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/dashboard">Dashboard</Link></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Sign Out</a></li>
            </ul>
          </div>
        )}
        
        
      </div>
    </nav>
  );
}

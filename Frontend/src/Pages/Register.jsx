import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [value,setValue]=useState({
        email:"",
        password:""
    })
  return (
    <>
      <section className="bg-light">
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
          <a href="#" className="mb-4 text-dark text-decoration-none d-flex align-items-center">
            <img className="me-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" width="32" height="32"/>
            <Link to={'/'}> <span className="h4 mb-0 fw-bold">CodeByZahid</span></Link> 

          </a>
          <div className="card shadow-sm w-100" style={{ maxWidth: '400px' }}>
            <div className="card-body p-4">
              <h1 className="h5 mb-4 fw-bold text-dark">Create an account</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="fullName" placeholder="John Doe" required  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="name@company.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="••••••••" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign up</button>
              </form>
              <p className="mt-3 mb-0 text-muted">
                Already have an account? <Link to="/login" className="text-primary">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

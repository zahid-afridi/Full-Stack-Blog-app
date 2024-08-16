import React from 'react';

export default function AddPost() {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">Add New Post</h2>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="postImage" className="form-label">Upload Image</label>
                  <input type="file" className="form-control" id="postImage" />
                </div>
                <div className="mb-4">
                  <label htmlFor="postTitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="postTitle" placeholder="Enter post title" />
                </div>
                <div className="mb-4">
                  <label htmlFor="postDescription" className="form-label">Description</label>
                  <textarea className="form-control" id="postDescription" rows="6" placeholder="Write your post description here"></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Submit Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

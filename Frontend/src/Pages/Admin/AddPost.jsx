import React, { useState } from 'react';
import { post } from '../../services/Endpoint';
import toast from 'react-hot-toast';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  console.log('image',image)

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (image) {
        formData.append('postimg', image);
      }
      formData.append('title', title);
      formData.append('desc', description);
      
  
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
      
      const response = await post('/blog/create', formData);
      const data = response.data;
      if (data.success) {
        toast.success(data.message)
        setTitle('')
        setImage(null)
        setDescription('')
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">Add New Post</h2>
            </div>
            <div className="card-body p-4">
              <div   method='post' encType='multipart/form-data'>
                <div className="mb-4">
                  <label htmlFor="postImage" className="form-label">Upload Image</label>
                  <input 
  type="file" 
  className="form-control" 
  id="image" 
  onChange={(e) => setImage(e.target.files[0])} 
/>

                </div>
                <div className="mb-4">
                  <label htmlFor="postTitle" className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="postTitle" 
                    placeholder="Enter post title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="postDescription" className="form-label">Description</label>
                  <textarea 
                    className="form-control" 
                    id="postDescription" 
                    rows="6" 
                    placeholder="Write your post description here" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg" onClick={handleSumbit}>Submit Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

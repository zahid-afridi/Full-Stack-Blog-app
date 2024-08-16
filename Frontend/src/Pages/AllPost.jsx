import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

export default function AllPost() {
  const posts = [
    {
      id: 1,
      title: 'Exploring the JavaScript Universe',
      description: 'A deep dive into modern JavaScript features and best practices.',
      image: 'https://img.freepik.com/free-photo/young-woman-working-laptop-cafe_1303-15868.jpg', // Replace with your actual image URL
    },
    {
      id: 2,
      title: 'The Future of React',
      description: 'Understanding React 18 and its new features.',
      image: 'https://img.freepik.com/free-photo/young-woman-working-laptop-cafe_1303-15868.jpg',
    },
    {
      id: 3,
      title: 'Styling in the Modern Web',
      description: 'CSS techniques and frameworks that are taking the web by storm.',
      image: 'https://img.freepik.com/free-photo/young-woman-working-laptop-cafe_1303-15868.jpg',
    },
    // Add more posts as needed
  ];

  const handleDelete = (postId) => {
    // Implement the delete functionality here
    console.log(`Post with ID ${postId} deleted.`);
  };

  const handleUpdate = (postId) => {
    // Implement the update functionality here
    console.log(`Post with ID ${postId} updated.`);
  };

  return (
    <div className="container ">
      <h1 className="text-center mb-4 text-white">All Posts</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-4" key={post.id}>
            <div className="card h-100">
              <img src={post.image} className="card-img-top" alt={post.title} />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                  <FaTrashAlt /> Delete
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleUpdate(post.id)}
                >
                  <FaEdit /> Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

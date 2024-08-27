import React, { useEffect, useState } from 'react';
import { FaUser, FaLock, FaCamera } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { BaseUrl, patch } from '../services/Endpoint';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { setUser } from '../redux/AuthSlice';


export default function Profile() {
  const { userId } = useParams(); // Assuming you're passing the post ID in the route
  const dispatch=useDispatch()
  

  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const user=useSelector((state)=>state.auth.user)

  useEffect(()=>{
      if (user) {
setName(user.FullName)
        
      }
  },[])
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleUpdateProfile =async (e) => {
    e.preventDefault();
    const formData= new FormData();
    formData.append('FullName',name)
    formData.append('oldpassword',oldPassword)
    formData.append('newpassword',newPassword)
    if (profileImage) {
        formData.append('profile',profileImage)
        

    }
    try {
        const resposne= await patch(`auth/profile/${userId}`,formData)
        const data=resposne.data
        console.log(data)
        if (resposne.status==200) {
            toast.success(data.message)
            dispatch(setUser(data.user));
        }
    } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
          // setError(error.response.data.message); // Set error message from server response
          toast.error(error.response.data.message)
      } else {
          toast.error("An unexpected error occurred. Please try again.");
      }
    }
       
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Update Profile</h1>
      <form className="profile-form" onSubmit={handleUpdateProfile}>
        <div className="profile-image-section">
          <label htmlFor="profileImage" className="profile-image-label">
            {profileImage ? (
              <img src={URL.createObjectURL(profileImage)} alt="Avatar" className="profile-image" />
            ) : (
              <div className="profile-placeholder">
                {/* <FaUser className="profile-icon" /> */}
                <img src={`${BaseUrl}/images/${user.profile}`} alt='Avatar'  className="profile-image" />
              </div>
            )}
            <FaCamera className="profile-camera-icon" />
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="profile-image-input"
          />
        </div>

        <div className="input-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Update Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="profile-input"
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="profile-input"
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="profile-input"
          />
        </div>

        <button type="submit" className="profile-button">Update Profile</button>
      </form>
    </div>
  );
}

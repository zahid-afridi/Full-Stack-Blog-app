import fs from 'fs';
import jwt from 'jsonwebtoken'

import { FileUploadeToColoudinary } from '../libs/Cloudinary.js';
import UserModal from '../models/User.js';
import bcrypt from 'bcryptjs'

const Register = async (req, res) => {
    try {
        const {FullName,email,password}=req.body
        // Upload the image to Cloudinary
        const imagePath = req.file.filename;
        // const cloudinaryResult = await FileUploadeToColoudinary(imagePath, 'user_profiles');
          console.log(imagePath)
        // Create a new user with the uploaded image URL
        const existUser= await UserModal.findOne({email})
        if (existUser) {
            return res.status(301).json({success:false,message:"User Already Exist Please Login"})
        }
        const hasePassword= await bcrypt.hashSync(password,10)
        const newUser = new UserModal({
            FullName: FullName,
            email: email,
            password: hasePassword,
            profile: imagePath,
        });

        // Save the user to the database
        await newUser.save();

        // // Remove the image from the local directory after uploading to Cloudinary
        // fs.unlinkSync(imagePath);

        res.status(201).json({success:true, message: 'User registered successfully',user:newUser});
    } catch (error) {
        console.error('Error during registration', error);
        res.status(500).json({ error: 'Error during registration' });
    }
}



const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        const FindUser = await UserModal.findOne({ email });
        if (!FindUser) {
            return res.status(404).json({ success: false, message: "Account not found. Please register." });
        }
        const comparePassword = await bcrypt.compare(password, FindUser.password);
        if (!comparePassword) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ userId: FindUser._id }, process.env.JWT_SECRET);
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
        });
        
        return res.status(200).json({ success: true, message: "Login successfully", user: FindUser, token });
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const Logout=async(req,res)=>{
    try {
        // Clear the token cookie
        res.clearCookie('token');

        // Return success message
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        // Handle error
        console.error("Error logging out:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateProfile=async(req,res)=>{
    try {
        const userId = req.params.id;
        const {FullName,oldpassword,newpassword}=req.body

        const ExistUser= await UserModal.findById(userId)
        if (!ExistUser) {
            return res.status(404).json({ success: false, message: "Account not found. Please register." });
        }
        const comparePassword = await bcrypt.compare(oldpassword, ExistUser.password);
        
        if (oldpassword && ! newpassword) {
            return res.status(404).json({ success: false, message: "Please Enter New Password" });
        
        }

       if (!comparePassword) {
        return res.status(404).json({ success: false, message: "Please Enter Coorect Password" });

       }
     
       

        if (FullName) ExistUser.FullName = FullName;
       
        if (req.file) ExistUser.profile = req.file.filename;
        if (comparePassword) {
            const hasePassword = await bcrypt.hashSync(newpassword,10)
            ExistUser.password= hasePassword
        }
        await ExistUser.save()
        return res.status(200).json({ success: true, message: "Profile Update Successfully", user:ExistUser });
          
        
    } catch (error) {
        console.error("Error logging out:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {Register,Login,Logout,updateProfile}
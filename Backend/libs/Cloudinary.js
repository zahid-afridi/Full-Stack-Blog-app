import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const FileUploadeToColoudinary = async (filepath, folderName) => {
    try {
        const result = await cloudinary.uploader.upload(filepath, {
            folder: folderName
        });
        return {
            secure_url: result.secure_url
        };
    } catch (error) {
        console.error('File upload error', error);
        throw new Error('Error uploading image to Cloudinary');
    }
}

export { FileUploadeToColoudinary };

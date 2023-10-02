import React, { useState } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import cloudinary from './cloudinaryConfig'; 

function CreatePost() {
  const [postText, setPostText] = useState('');
  const [file, setFile] = useState(null);
  const [mediaUrl, setMediaUrl] = useState(null);

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
        folder: 'Posts', // Optional: Specify a folder in your Cloudinary account
      });     
      const uploadedMediaUrl = cloudinaryResponse.secure_url;
      console.log('Post Text:', postText);
      console.log('Media URL:', uploadedMediaUrl);
      setMediaUrl(uploadedMediaUrl);
      setPostText('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading media to Cloudinary:', error);
    }
  };

  return (
    <div className="container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postText" className="form-label">
            Write about your post:
          </label>
          <textarea
            className="form-control"
            id="postText"
            rows="4"
            value={postText}
            onChange={handlePostTextChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">
            Upload an image or video:
          </label>
          <input
            type="file"
            className="form-control"
            id="fileInput"
            accept="image/*, video/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
      {mediaUrl && (
        <div className="uploaded-image">
          <AdvancedImage
            cldImg={cloudinary.image().url(mediaUrl).toURL()}
            width="300"
            height="200"
            alt="Uploaded Media"
          />
        </div>
      )}
    </div>
  );
}

export default CreatePost;

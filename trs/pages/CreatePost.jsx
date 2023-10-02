// import React from 'react';

// export default function CreatePost() {
//   return <div>Hello World from CreatePost</div>;
// }

import React, { useState } from 'react';

function CreatePost() {
  const [postText, setPostText] = useState('');
  const [file, setFile] = useState(null);

  const handlePostTextChange = (e) => {
    setPostText(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the post text and file here
    console.log('Post Text:', postText);
    console.log('File:', file);
    // Reset the form fields after submission
    setPostText('');
    setFile(null);
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
    </div>
  );
}

export default CreatePost;

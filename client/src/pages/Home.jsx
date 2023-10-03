import React from 'react';
import data from './Data'; // Import the data from Data.js
import "./home.css"

export default function Home() {
  // return <div>Hello World from Home</div>;
  return (
    <div className="container">
      {data.map((post, index) => (
        <div className="card mb-3" key={index}>
          <img src={post.img} className="card-img-top" alt={post.desc} />
          <div className="card-body">
            <p className="card-text">{post.desc}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                {post.liked ? 'Liked' : 'Not liked'}
              </small>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

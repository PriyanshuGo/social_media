// import React from 'react';

// export default function Profile() {
//   return <div>Hello World from Profile</div>;
// }
import React from 'react';

function Profile() {
  return (
    <div className="container">
      <div className="card mb-3">
        <img
          src="/img/img1.jpg"
          className="card-img-top rounded-circle"
          alt="Profile Image"
          style={{ width: '300px', height: '300px', margin: '0 auto' }}
        />
        <div className="card-body text-center">
          <h2 className="card-title">Suryadev</h2>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

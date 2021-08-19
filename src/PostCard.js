import React from "react";

function PostCard() {
  return (
    <div className="col-lg-4 col-md-6 card-post-inner">
      <div className="card-deck">
        <div className="card card-post">
          <img
            className="card-img-top"
            src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/08/React-Code--1-.jpg"
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              Optimize Your React Re-Renders with Functional setState()
            </h5>
            <p className="card-text">
              Yes, there's a functional side to React. Here's how you can pass a
              function to setState() and why that's useful.
            </p>
            <p className="card-text d-flex justify-content-between">
              <small className="text-muted">Muhammad</small>
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

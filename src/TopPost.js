import React from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function TopPost() {
  return (
    <div className="container-xl">
      <div className="top-post disable-bootstrap-link">
        <Link to="/brian">
          <div className="card top-post-image">
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/dukp6c7f7/image/upload/f_auto,fl_lossy,q_auto/s3-ghost//2021/07/Seoul--1-.jpg"
              alt="Card image cap"
            />
            <div className="card-body d-flex flex-column justify-content-around text-left">
              <h5 className="card-title">
                <div className="title">
                  <h2>
                    Brian Caldwell on Living the Remote Developer Life in Seoul
                  </h2>
                </div>
              </h5>
              <p className="card-text">
                Brian Caldwell is a Senior Software Engineer who lives the
                remote developer life in Seoul. In this interview, we discuss
                life in South Korea.
              </p>
              <p className="card-text d-flex justify-content-between flex-column">
                <small className="text-muted">Eric hansen</small>
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div className="row">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}

export default TopPost;

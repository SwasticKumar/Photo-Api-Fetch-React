import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/image/sk logo.png"
            alt="swasticblog"
            style={{ width: "10rem" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mt-2">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item mt-2">
              <Link to="/photo-gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                <button className="btn btn-danger">Signup</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

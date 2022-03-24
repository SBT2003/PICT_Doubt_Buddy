import React from "react";
import { Link } from "react-router-dom";
import "./Home_page.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          PICT <span>Doubt </span>
          Buddy
        </div>
        <div className="menu">
          <Link to="/">Home</Link>
          <a href="#">Answer Question</a>
          <Link to="/qna">Post Question</Link>
          <a href="#">About us</a>
        </div>
        <div className="icon">
          <i className="fa fa-user" aria-hidden="true"></i>

          <Link to="/login">Register</Link>
        </div>
        
      </nav>
    </div>
  );
}

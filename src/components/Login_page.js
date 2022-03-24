import React from 'react'
import './Login_page.css'
import Navbar from './Navbar'
import Signin_page from './Signin_page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Login_page() {
  return (
    <>
    <Navbar/>
    <body>
      x
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <button id='login-btn' className='log_in_btn'>Log In</button>
        <a className="msg">Don't have an account ? </a> 
        <a className='link'>
        <Link to="/signin">SIGN IN</Link>
        </a>
      
        <div className="social">
          <div className="go"><i className="fab fa-google"  style={{color:"	#0F9D58"}}></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook" style={{color:"#4267B2"}}></i>  Facebook</div>
        </div>
        
    </form>
</body>
</>
  )
}

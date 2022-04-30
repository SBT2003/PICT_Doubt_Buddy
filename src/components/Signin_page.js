import React from 'react'
import Navbar from './Navbar'
import './Signin_page.css'

export default function Signin_page() {
  return (
    <body>
      <Navbar/>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form>
        <h3>Sign Up</h3>

        {/* <label for="firstname">First Name</label>
        <input type="text" placeholder="First Name" id="firstname"></input> */}

        {/* <label for="lastname">Last Name</label>
        <input type="text" placeholder="Last Name" id="lastname"></input> */}

        <label for="email">E-mail ID</label>
        <input type="email" placeholder='E-mail' id='email'></input>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"></input>

        <label for="password">Confirm Password</label>
        <input type="password" placeholder="Password" id="confirm-password"></input>

        <button>Sign Up</button>
        <div className="social">
          <div className="go"><i className="fab fa-google" style={{color:"	#0F9D58"}}></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook" style={{color:"#4267B2"}}></i>  Facebook</div>
        </div>
    </form>
</body>
  )
}

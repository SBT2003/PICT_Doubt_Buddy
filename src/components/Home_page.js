import React from 'react'
import { Link } from 'react-router-dom'
import './Home_page.css'
import Navbar from './Navbar.js'
import i1 from './Images/icon1.png'
import i2 from './Images/icon2.png'
import i3 from './Images/icon3.png'
import i4 from './Images/icon4.png'
import i5 from './Images/pictTeam.jpeg'

import i6 from './Images/pict_logo.jpeg'
import i7 from './Images/renuka.jpeg'
import i8 from './Images/ruturaj.jpeg'
import i9 from './Images/shivakumar.jpg'
import i10 from './Images/shrushti.jpg'
import i11 from './Images/Sir.jpeg'
export default function Home_page() {
  return (
    <body>
    <header>
        <Navbar/>

        <section class="h-text">
            <i className="fa fa-institution" aria-hidden="true"></i>
            <h1>Get all your doubts solved!</h1>

        </section>
        
    </header>



    <div>
        <section className="member">
          <div className="member-info">
            <h1>Our <span>Information</span></h1>
            <p>What Our Team Says</p>
          </div>
          <div className="member-card">
          <img src={i5} width={600} />
            <p>
              Pune Institute of Computer Technology, is a private unaided engineering college located in Dhankawadi, Pune, India. Established by the Society for Computer Technology and Research, SCTR in 1983. It offers degrees in Information Technology, Computer Engineering and Electronics and Telecommunication Engineering. 
            </p>
            <h2>Pune Institute of Computer Technology</h2>
            <img src={i1} width={100} />
            <img src={i2} width={100} />
            <img src={i3} width={100} />
            <img src={i4} width={100} />
          </div>
          <div className="m-images">
            <img src={i6} />
            <img src={i7} />
            <img src={i8} />
            <img src={i9} />
            <img src={i10} />
            <img src={i11} />
          </div>
        </section>
        <footer>
          <div className="news">
            <div>
              <h2>Hope that all your doubts are solved!</h2>
              <p>We are a team which aims to ensure that all the doubts about academics as well as technical domain gets solved here. Where there is right choice , there is right result. All the best for your journey!</p>
            </div>
          </div>
          <div className="f-contact">
            <div>
              <h1>Information</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <i className="fa fa-whatsapp" aria-hidden="true" />
              <i className="fa fa-telegram" aria-hidden="true" />
              <i className="fa fa-twitter" aria-hidden="true" />
              <i className="fa fa-instagram" aria-hidden="true" />
            </div>
            <div>
              <h1>Useful Links</h1>
              <p>ABout us</p>
              <p>Gallery</p>
              <p>Posts</p>
            </div>
            <div>
              <h1>Details</h1>
              <p>ABout us</p>
              <p>Gallery</p>
              <p>Posts</p>
            </div>
            <div>
              <h1>Help &amp; Support</h1>
              <p>ABout us</p>
              <p>Gallery</p>
              <p>Posts</p>
            </div>
          </div>
        </footer>
      </div>
    
</body>
  )
}

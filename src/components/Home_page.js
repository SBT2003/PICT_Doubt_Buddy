import React from 'react'
import { Link } from 'react-router-dom'
import './Home_page.css'
import Navbar from './Navbar.js'
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
            <img src="images/hello.jpg" width={700} />
            <p>
              Pune Institute of Computer Technology, is a private unaided engineering college located in Dhankawadi, Pune, India. Established by the Society for Computer Technology and Research, SCTR in 1983. It offers degrees in Information Technology, Computer Engineering and Electronics and Telecommunication Engineering. 
            </p>
            <h2>Pune Institute of Computer Technology</h2>
            <img src="./Images/icon1.png" width={100} />
            <img src="./Images/icon2.png" width={100} />
            <img src="./Images/icon3.png" width={100} />
            <img src="./Images/icon4.png" width={100} />
          </div>
          <div className="m-images">
            <img src="images/root.jpg" />
            <img src="images/ren.jpg" />
            <img src="images/pic.jpg" />
            <img src="images/pt.jpg" />
            <img src="images/shr.jpg" />
            <img src="images/shiv.jpg" />
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

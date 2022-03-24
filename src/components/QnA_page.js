import React ,{useState}from 'react'
import './QnA_page.css'
import Navbar from './Navbar'

// const [question, setQuestion] = useState("");
 
// export default ;


export default function QnA_page() {
  const [show,setshow]=useState(false)
  
  return (
    <>
    <Navbar/>
    <div class="sidebar">
        <a href="#home">Recent Questions</a>
        <a href="#tags">Tags</a>
        <a href="#unanswered">Unanswered</a>
    </div>
    <div>
    { show?
    <div className='alert_msg alert show' id='alert'>
      
        <span className='fas fa-exclamation-circle '>
            <span className='msg'>
                Your question has been posted
              </span>
              <span className="close-btn" onClick={()=>{setshow(false)}}>
                <span className='fas fa-times'></span>
              </span>
        </span>
    </div>:null}
    </div>
    <div>
    <textarea className='text_area' placeholder="Ask your question here..."></textarea>
    </div>
    <button className='post_button' onClick={()=>{setshow(true)} }>Post</button>

   
    </>
  )
}

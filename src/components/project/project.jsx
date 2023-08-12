import React from 'react'
import "./project.css"
import Passanger from "../../assets/passenger.png"
import Blackjack from "../../assets/blackjack.png"
import Link from "../../assets/link.png"
import Contact from "../../assets/contact.png"


function project() {
  return (
    <div className='project'>
      <div className="title">
        <h3>Projects</h3>
        <h2>Each project is a unique piece of development 🧩</h2>
      </div>
      <div className="cards">

        <div className="card">
          <div className="image">
            <a href="https://taupe-entremet-3a08e9.netlify.app/" target='blank'>
              <img src={Passanger} alt="" srcset="" />
            </a>
          </div>
          <div className="paragraph-two">

            <h2>Passanger Counter app 🚌</h2>
            <p>Passenger Counter App: A web-based system crafted using HTML, CSS, and JavaScript, designed to efficiently track and manage passenger flow in various settings, providing real-time insights and enhancing crowd management strategies.</p>
            <p>❓Click image Live Demo</p>

          </div>


        </div>

        <div className="card">

          <div className="paragraph-two">

            <h2>Black Jack Game 🎮</h2>
            <p>BlackJack: A classic card game brought to life with HTML, CSS, and JavaScript. Test your luck and strategic thinking in this digital rendition of the popular casino game.</p>
            <p>❓Click image Live Demo</p>

          </div>
          <div className="image">
            <a href="https://effulgent-unicorn-58bdcd.netlify.app/" target='blank'>
              <img src={Blackjack} alt="" srcset="" />
            </a>

          </div>
        </div>

        <div className="card">
          <div className="image">

            <img src={Link} alt="" srcset="" />


          </div>
          <div className="paragraph-two">

            <h2>Link saver Extension</h2>
            <p>Link saver Chrome Extension: Seamlessly developed with manifest.json, js, HTML, and CSS, this extension empowers users to effortlessly organize and save online resources, enhancing productivity by enabling quick access to saved links directly from the browser.</p>


          </div>

        </div>
        <div className="card">

          <div className="paragraph-two">

            <h2>Contact saver</h2>
            <p>Contact Save: A robust MERN stack web application designed to streamline contact management. Seamlessly developed with MongoDB, Express.js, React, and Node.js, it offers users the ability to store, organize, and retrieve their contacts efficiently.</p>


          </div>
          <div className="image">
            <a href="https://contact-hmra.onrender.com/" target='blank'>
              <img src={Contact} alt="" srcset="" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default project
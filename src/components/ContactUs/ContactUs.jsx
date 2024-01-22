import React from "react";
import Header from "../Header/Header";
import "../ContactUs/contactus.css";
import emailjs from "@emailjs/browser";

function ContactUs() {
  

  const sendEmail = () => {

    let email = document.getElementById("contact_email").value;
    let name = document.getElementById("contact_name").value;
    
    var templateparams = {
        contact_email:email,
        contact_name:name
    }
    
    emailjs
      .send(
        "service_gjxr5tm",
        "template_fyvzhrw",
        templateparams,
        "-yjiSbdT-JRQvkpJz"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div>
      <Header />
      <div className="main-div">
        <div>
          <img className="contact-img" src="https://media.istockphoto.com/id/1441262452/photo/communication-and-technology-concept-hand-putting-wooden-block-cube-symbol-telephone-email.webp?b=1&s=170667a&w=0&k=20&c=FtxQlZeGn__5ZHpc5zi9tx0GVTDZuZQoQcHT7mxDY4Q="/>
        </div>
      <div className="contact">
        <div className="contact-div">
          <input type="text" placeholder="Your Name" id="contact_name"></input>
          <input type="email" placeholder="Your Email" id="contact_email"></input>
          <button className="send-button" onClick={sendEmail}>Send Query</button>
        </div>
        <div className="social">
        <a href="https://facebook.com" target="_blank">
          <img
            className="facebookicon"
            src="https://pngimg.com/d/facebook_logos_PNG19750.png"
          />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img
            className="twittericon"
            src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
          />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img
            className="instagramicon"
            src="https://banner2.cleanpng.com/20200525/hhx/transparent-instagram-logo-icon-5ecc25c4860dd5.0946990115904373165491.jpg"
          />
        </a>
        
      </div>
      </div>
      
      </div>
    </div>
  );
}

export default ContactUs;

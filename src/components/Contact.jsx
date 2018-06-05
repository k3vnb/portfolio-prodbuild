import React from 'react';

function Contact(){
  return(
    <div className="main-container contact-container">
      <style jsx>{`
          .contact-container {
            height: 80%;
            margin-top: 5%;
          }
          .contact-page-inner {
            width: 100%;
            height: 60%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .contact-box {
            width: 45%;
            height: 50%;
            border: 1px solid black;
            padding: 1%;
          }
          `}</style>
        <div>REACH OUT TO ME</div>
      <div className="contact-page-inner">
        <div className="contact-box contact-top-left">
          <h3>EMAIL</h3>
        </div>
        <div className="contact-box contact-top-right">
          <h3>GITHUB</h3>
        </div>
        <div className="contact-box contact-bottom-left">
          <h3>INSTAGRAM</h3>
        </div>
        <div className="contact-box contact-bottom-right">
          <h3>LINKEDIN</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;

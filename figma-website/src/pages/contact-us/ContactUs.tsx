import { useRef } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.scss";

const ContactUs = () => {

  const bottomRef = useRef();

  return (
    <>
      <Navbar scrollTo={bottomRef}/>
      <div className="contact-us-container">
        <div className="wrapper">
          <p className="cap-03">Contact us</p>
          <h1>Let's Start a Conversation</h1>
          <p className="body-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
          <div className="contact-box">
            <div className="left">
              <p className="body-2">Working hours</p>
              <hr></hr>
              <h5>Monday To Friday</h5>
              <h5>9:00 AM to 8:00 PM </h5>
              <p className="body-1">Our Support Team is available 24/7</p>
            </div>
            <div className="right">
              <p className="body-2">Contact Us</p>
              <hr></hr>
              <h5>020 7993 2905</h5>
              <p className="body-1">hello@finsweet.com</p>
            </div>
          </div>
          <input placeholder="Full Name"></input>
          <input placeholder="Your Email"></input>
          <textarea placeholder="Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
      <div ref={bottomRef}>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;

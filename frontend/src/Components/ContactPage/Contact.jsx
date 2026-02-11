import React from "react";
import "./contact.css";
import AnimatedContent from "./AnimatedContent";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

import { IoLocation } from "react-icons/io5";
import Footer from "../footerPage/Footer";
import SplashCursor from "../HomePage/SplashCursor";

const Contact = () => {
  return (
    <div className="contact">
      <SplashCursor />

      <div className="banner">
        <AnimatedContent
          distance={90}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
          <div className="info">
            <h3>Location</h3>
            <h1>Contact Us</h1>
          </div>
        </AnimatedContent>
      </div>

      <div className="contact-box">
        <AnimatedContent
        className="ani"
          distance={90}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
            <div className="content">
          <p>
            Hi, I'm Olivia a Professional Makeup Artist. <br />
            Quisque luctus tincidunt enim miss neuenete ectus.
          </p>
          <ul>
            <li>
              {" "}
              <span>
                <BiSolidPhoneCall />
              </span>
              +91 8123702812
            </li>
            <li>
              {" "}
              <span>
                <MdOutgoingMail />
              </span>
              makeup@gmail.com
            </li>
            <li>
              {" "}
              <span>
                <IoLocation />
              </span>
              525 West Ave, CT 06850 banglore
            </li>
            <li>
              {" "}
              <span>
                <IoMdTime />
              </span>
              Mon-Fri: 08.00 - 19.00, Sunday: Closed
            </li>
            <li>
              <span>
                <IoLocation />
              </span>
              Google Maps
            </li>
          </ul>
        </div>
        </AnimatedContent>
       
         <AnimatedContent
         className="ani"
          distance={90}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        ><div className="content">
          <h4>GET IN TOUCH</h4>
          <div className="form-box">
            <form action="">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="tel" placeholder="Enter your phone Number" />
              <textarea
                placeholder="Enter Message"
                rows={5}
                cols={54}
              ></textarea>
              <button>SEND</button>
            </form>
          </div>
        </div></AnimatedContent>
        
      </div>
        <AnimatedContent
         className="ani"
          distance={90}
          direction="vertical"
          reverse={false}
          duration={1.5}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={1}
          threshold={0.1}
          delay={0}
        >
            <div className="map">
        <iframe
          className="i"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8772478191404!2d77.57065047458882!3d12.915610216104358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e25b3e186b1%3A0x530077327406000f!2sShree%20Banashankari%20Devi%20Temple!5e0!3m2!1sen!2sin!4v1770124114060!5m2!1sen!2sin"
          width="700"
          height="450"
          style={{ margin: "auto" }}
        ></iframe>
      </div>
        </AnimatedContent>
    
      <Footer />
    </div>
  );
};

export default Contact;

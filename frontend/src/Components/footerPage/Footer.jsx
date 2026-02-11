import React from "react";
import "./footer.css";
import LogoLoop from "./LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { RiYoutubeLine } from "react-icons/ri";
import AnimatedContent from "../ContactPage/AnimatedContent";

const Footer = () => {
  const techLogos = [
    { node:<GrInstagram />, title: "React", href: "https://react.dev" },
    { node:<ImFacebook2 />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <RiYoutubeLine />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    }
  ];

  // Alternative with image sources
 

  return (
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
       <div className="footer">
      <div className="footer-box">
        <h3>Title Name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
          animi? Nemo sint non nobis laboriosam culpa eius possimus quidem, quos
          sapiente voluptate hic tenetur laborum debitis rem laudantium nam
          tempore!
        </p>
        <button>Contact Us</button>
        <div className="logo">
          <div
            style={{
              height: "200px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Basic horizontal loop */}
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="right"
              logoHeight={40}
              gap={50}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              ariaLabel="Technology partners"
            />

            {/* Vertical loop with deceleration on hover */}
           
          </div>
        </div>
      </div>
      <div className="footer-box">
        <h3>Get in Tuch</h3>
        <p>Gmail: abc@gmail.com</p>
        <p>Phone Number: 8123702812</p>
        <p>Location: Banglore</p>
        <p>Quick Links:</p>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className="footer-box">
        <h3>Opening Time</h3>
        <p>Monday : 09 am to 10 pm</p>
        <p>tuesday : 09 am to 10 pm</p>
        <p>webnesday : 09 am to 10 pm</p>
        <p>thursday : 09 am to 10 pm</p>
        <p>friday : 09 am to 10 pm</p>
        <p>saurday : 09 am to 10 pm</p>
        <p>Sunday : Holiday</p>
      </div>
    </div>

    </AnimatedContent>
   
  );
};

export default Footer;

import React from "react";
import "./about.css";
import one from "../../assets/image/person.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import AnimatedContent from "../ContactPage/AnimatedContent";
import TextType from "../viewmorePage/TextType";
import Footer from "../footerPage/Footer";
const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-info">
          <AnimatedContent>
            <h4>Makeup Artist</h4>
          </AnimatedContent>
          <h1>
            <TextType
              text={[`Bobbi Noda`]}
              typingSpeed={75}
              pauseDuration={10000}
              showCursor
              cursorCharacter="."
              deletingSpeed={0}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              repeat={0}
            ></TextType>
          </h1>

          <hr />
          <p>
            Nulla posuere tortoran nisan sempere scelerisque etiam ornare iros
            metusan the ravidane sodales vesaire. Integer ac molestie nisi orci
            varius natoque penatis magnis the duru parturient montes, nascetur
            ridiculus mus.
          </p>
          <p>
            Phasellus et lacus suscipit congue nisl the volutpat magna done miss
            the rana risus tincidunt convallis velit orci congue tortor eu
            dignissim ipsum suam non odio esuntion miss the imperdiet metus
            ornare.
          </p>
          <ul>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              Face Makeup
            </li>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              Eye Makeup
            </li>
            <li>
              <span>
                <FaAngleDoubleRight />
              </span>
              HairStyles
            </li>
          </ul>
        </div>
        <AnimatedContent className="anibox">
          <div className="box-image">
            <img src={one} alt="" />
          </div>
        </AnimatedContent>
      </div>
      <div className="my-skills">
        <div className="heading">
          <h4>MY TOP</h4>
          <h1>Makeup Skills</h1>

        </div>
        <div className="skills">
          <div className="skill">
            <p>Face Makeup</p>
            <p>97%</p>
          </div>
            <hr />
             <div className="skill">
            <p>Bridel Makeup</p>
            <p>99%</p>
          </div>
            <hr  className="bridel"/>
             <div className="skill">
            <p>Eye Makeup</p>
            <p>87%</p>
          </div>
            <hr  className="eye"/>
             <div className="skill">
            <p>HairStyles</p>
            <p>95%</p>
          </div>
            <hr className="hair"/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;

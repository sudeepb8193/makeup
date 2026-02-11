import React, { useEffect, useState } from "react";
import "./viewmore.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../footerPage/Footer";
import AnimatedContent from "../ContactPage/AnimatedContent";
import TextType from "./TextType";
import { FaRupeeSign } from "react-icons/fa";


const ViewMore = () => {
  let params = useParams();
  let navigate = useNavigate();
  let [apidata, setApidata] = useState({});
  let id = params.id;
  let fetchApi = async () => {
    let response = await axios.get(
      `http://localhost:5000/productapi/productdata/${id}`,
    );
    setApidata(response.data.payload);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  let handelclick = () => {
    navigate("/portfolio");
  };
  let { image, title, desc, price, category } = apidata;
  return (
    <>
      <div className="view-container">
        <div className="display-data">
          <div className="back-btn">
            <button onClick={handelclick}>Back</button>
          </div>
          <div className="details">
            <div className="img-box">
              <AnimatedContent className="animation">
                <img src={image} alt="" />
              </AnimatedContent>
            </div>
            <div className="dis-box">
             <AnimatedContent> <h1>{category}</h1></AnimatedContent>
              <h2>
                <TextType
                  text={[`${title}`]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor
                  cursorCharacter="."
                  deletingSpeed={50}
                  variableSpeedEnabled={false}
                  variableSpeedMin={60}
                  variableSpeedMax={120}
                  cursorBlinkDuration={0.5}
                />
              </h2>
              <AnimatedContent><p>Description: {desc}</p></AnimatedContent>
             <AnimatedContent> <strong>Price: <FaRupeeSign style={{fontSize:"14px"}} /> {price}</strong></AnimatedContent>
              <AnimatedContent><button>Call for Appointment</button></AnimatedContent>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ViewMore;

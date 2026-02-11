import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import axios from "axios";
import SplashCursor from "../HomePage/SplashCursor";
import FadeContent from "./FadeContent";
import AnimatedContent from "./AnimatedContent";
import HoverImageCard from "./HoverImageCard";
import Footer from "../footerPage/Footer";

const Portfolio = () => {
  let [data, setData] = useState([]);
  let [category, setCategory] = useState("All");
  let fetchapi = async () => {
    let response = await axios.get(
      `http://localhost:5000/productapi/productdata`,
    );
    setData(response.data.payload);
  };
  useEffect(() => {
    fetchapi();
  },[]);
  let filterData =
    category === "All"
      ? data.slice(5, 17)
      : data.filter((ele) => ele.category === category);
  return (
    <>
      <SplashCursor />
      <div className="portfolio">
        <div className="heading-box">
          <h3>Our Portfolio</h3>
          <h1>Image Gallery</h1>
        </div>
        <div className="category-box">
          <button onClick={() => setCategory("All")}>All</button>
          <button onClick={() => setCategory("Bridal MakeUp")}>
            Bridel Makeup
          </button>
          <button onClick={() => setCategory("Face Makeup")}>
            {" "}
            Face Makeup
          </button>
          <button onClick={() => setCategory("Eye Makeup")}>Eye Makeup</button>
          <button onClick={() => setCategory("HairStyles")}>Hairstyles</button>
        </div>
        <div className="display-images">
          <div className="image">
            {filterData.map((ele) => {
              let {_id, image } = ele;
              return (
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.1}
                  delay={0}
                >
                  <HoverImageCard image={image} _id={_id} />
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Portfolio;

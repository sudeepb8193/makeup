import React, { useEffect, useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import SplitText from "./SplitText";
import car1 from "../../assets/image/bridel.jpg";
import car2 from "../../assets/image/face.jpg";
import car3 from "../../assets/image/eye.jpg";
import car4 from "../../assets/image/hair.jpg";
import GradientText from "./GradientText";
import SplashCursor from "./SplashCursor";
import ElectricBorder from "./ElectricBorder";
import axios from "axios";
import "./Home.css";
import Footer from "../footerPage/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [data, setData] = useState([]);
  let fetchApi = async () => {
    let resp = await axios.get(`http://localhost:5000/productapi/productdata`);
    setData(resp.data.payload);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  let birdelmakeup = data
    .filter((ele) => ele.category === "Bridal MakeUp")
    .slice(0, 4);
  let facemakeup = data
    .filter((ele) => ele.category === "Face Makeup")
    .slice(0, 4);

  let hairmakeup = data
    .filter((ele) => ele.category === "HairStyles")
    .slice(0, 4);
    let navigate=useNavigate()

  return (
    <>
      <SplashCursor />
      <div className="main-container">
        <div className="information">
          <h1>
            <SplitText
              text="Blush    With SuSh MakeOver"
              delay={50}
              duration={1.5}
              ease="power3.out" 
              splitType="chars"
              repeat={-1} // infinite repeat
              repeatDelay={0.5}
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              showCallback
            />
          </h1>

          <GradientText
            colors={["#da5d0f", "#e3d918", "#B19EEF"]}
            animationSpeed={4}
            showBorder={false}
            className="custom-class"
          >
            <p>
              Makeup is the art of enhancing natural beauty while expressing
              personality and confidence. It blends skincare and
              creativity—using products like foundation, blush, eyeshadow,
              eyeliner, mascara, and lipstick to highlight features, even out
              skin tone, and add dimension to the face. From soft, everyday
              looks to bold, glamorous styles, makeup adapts to every mood,
              occasion, and identity
            </p>
          </GradientText>
          <button>Make Appointment</button>
        </div>
        <div className="cards">
          <div style={{ height: "600px", position: "relative" }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <img
                  src={car1}
                  alt=""
                  height={"300px"}
                  width={"300px"}
                  style={{ borderRadius: "12px" }}
                />
              </Card>
              <Card>
                <img
                  src={car2}
                  alt=""
                  height={"300px"}
                  width={"300px"}
                  style={{ borderRadius: "12px" }}
                />
              </Card>
              <Card>
                <img
                  src={car3}
                  alt=""
                  height={"300px"}
                  width={"300px"}
                  style={{ borderRadius: "12px" }}
                />
              </Card>
              <Card>
                <img
                  src={car4}
                  alt=""
                  height={"300px"}
                  width={"300px"}
                  style={{ borderRadius: "12px" }}
                />
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="cat-btn">
          <h1>Birdel Makeup</h1>
          <button onClick={()=>navigate('/service')}>View More</button>
        </div>
        <div className="box-1">
          {birdelmakeup.map((ele) => {
            let { image, price, title, desc } = ele;
            return (
              <>
                <ElectricBorder
                  color="#eba83b"
                  speed={2}
                  chaos={0}
                  thickness={0.21}
                  style={{
                    background: `url(${image}) no-repeat center`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="box-2">
                    <div className="display">
                      <h2>{title}</h2>
                      <p>{desc}</p>
                      <div className="booking">
                        <h2>Price:{price}</h2>
                        <button>Call for Appointment</button>
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
              </>
            );
          })}
        </div>
      </div>
      <div className="box">
        <div className="cat-btn">
          <h1>Face Makeup</h1>
          <button onClick={()=>navigate('/service')}>View More</button>
        </div>
        <div className="box-1">
          {facemakeup.map((ele) => {
            let { image, price, title, desc } = ele;
            return (
              <>
                <ElectricBorder
                  color="#eba83b"
                  speed={0.1}
                  chaos={0}
                  thickness={2}
                  style={{
                    background: `url(${image}) no-repeat center`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="box-2">
                    <div className="display">
                      <h2>{title}</h2>
                      <p>{desc}</p>
                      <div className="booking">
                        <h2>Price:{price}</h2>
                        <button>Call for Appointment</button>
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
              </>
            );
          })}
        </div>
      </div>

      <div className="box">
        <div className="cat-btn">
          <h1>Hair Styles</h1>
          <button onClick={()=>navigate('/service')}>View More</button>
        </div>
        <div className="box-1">
          {hairmakeup.map((ele) => {
            let { image, price, title, desc } = ele;
            return (
              <>
                <ElectricBorder
                  color="#eba83b"
                  speed={0.1}
                  chaos={0}
                  thickness={2}
                  style={{
                    background: `url(${image}) no-repeat center`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="box-2">
                    <div className="display">
                      <h2>{title}</h2>
                      <p>{desc}</p>
                      <div className="booking">
                        <h2>Price:{price}</h2>
                        <button>Call for Appointment</button>
                      </div>
                    </div>
                  </div>
                </ElectricBorder>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

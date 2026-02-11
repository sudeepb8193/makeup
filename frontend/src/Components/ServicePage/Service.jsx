import React, { useEffect, useState } from "react";
import "./Service.css";
import axios from 'axios'
import AnimatedContent from "../PortfolioPage/AnimatedContent";
import Footer from "../footerPage/Footer";


const Service = () => {
  let [data,setNavdata]=useState([])
  let [category,setCategory]=useState('All')
  let fetchApi=async()=>{
   let response= await axios.get(`http://localhost:5000/productapi/productdata`)
   setNavdata(response.data.payload)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  let filteredData=category==='All'?data.slice(5,20):data.filter((ele)=>ele.category===category)
  return (
    <>
      <div className="service-page">
        <div className="heading">
          <AnimatedContent><h1>SERVICES</h1></AnimatedContent>
          <AnimatedContent><h4>We provide quality services</h4></AnimatedContent>
        </div>
        <div className="service-nav">
          <div className="title">
            <h1>Makeup Services </h1>
          </div>
          <div className="nav-bar">
           
           <button onClick={()=>setCategory("All")}>All</button>
           <button onClick={()=>setCategory("Bridal MakeUp")}>Bridel Makeup</button>
           <button onClick={()=>setCategory('Face Makeup')}>Face Makeup</button>
           <button onClick={()=>setCategory("Eye Makeup")}>Eye Makeup</button>
           <button onClick={()=>setCategory("Lip Makeup")}>Lip Makeup</button>
           <button onClick={()=>setCategory("HairStyles")}>HairStyles</button>
          </div>
          
        </div>
        <div className="display-details">
            {filteredData.map((ele)=>{
              let {image,title,category,price ,desc}=ele
              return(
                <AnimatedContent className="data">
                
                 <h3>{category}</h3>
                 <img src={image} alt="" />
                 <b>{title}</b>
                 <p>{desc}</p>
                 <div className="btn">
                  <h4>{price}</h4>
                  <button>BOOK NOW</button>
                 </div>
                </AnimatedContent>
              )
            })}
          </div>
          <Footer/>
      </div>
    </>
  );
};

export default Service;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import image1 from "../../assets/images/bghome.png";
import image2 from "../../assets/images/gambarPanduan/panduan4.png";
import image3 from "../../assets/images/gambarPanduan/panduan3.jpg";
import "../../dist/css/panduan.css"

function CarouselPanduan() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="d-flex justify-content-center align-items-center h-vh-100" fluid> 
    <Carousel   
    activeIndex={index} 
    onSelect={handleSelect} 
    fade
    interval={3000}
    style={{ width: '100%', height: '574px' }}>
      <Carousel.Item>
        <img src={image1} alt="Slide pertama" className="d-block w-100 " 
        style={{ 
          height: '574px', 
          objectFit: 'cover' 
          }} 
        />
        <div className="carousel-overlay">
        <Carousel.Caption
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          }}
        >
            <p style={{fontSize: "24px"}}>SELAMAT DATANG DI</p>
            <h1 style={{fontWeight: "bold", fontSize: "54px"}}>WEBSITE BOOKING ONLINE</h1>
            <Link to="/booking">
                <button className='buton-boking'
                style={{
    
                  color: "#34574F",
                  fontSize: "20px",
                  borderRadius: "20px",
                  border: "1px solid black",
                }}>Booking Sekarang</button>
            </Link>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt="Slide kedua" className="d-block w-100" 
        style={{ 
          height: '574px', objectFit: 'cover' 
          }} 
        />
        <div className="carousel-overlay">
          <Carousel.Caption 
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
        
            }}
          >
         
          <h3 style={{fontSize: "24px"}}>ANGKAT CAREER MU KAWAN </h3>
          <h1 className="fw-bold" ><span className="fw-bold" style={{ color:"#FFA323"}}>Ingat</span> Dia Sudah <span className="fw-bold " style={{ color:"#FFA323"}}>Bahagia</span> Dengan Yang <span className="fw-bold " style={{ color:"#FFA323"}}>Lain</span></h1>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt="Slide ketiga" className="d-block w-100 " 
        style={{ 
          height: '574px', objectFit: 'cover' 
          }} 
        />
        <div className="carousel-overlay">
        <Carousel.Caption
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
      
          }}
        >
          <h3>BUKA</h3>
          <h1 className='fw-bold'>SETIAP HARI</h1>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>  
  )
}

export default CarouselPanduan






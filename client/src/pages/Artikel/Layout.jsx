import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import FooterComponent from "../../components/fragments/FooterComponent";
import bgartikelImage from "../../assets/images/gambarArtikel/bgartikel.jpeg";
import Artikel1Image from "../../assets/images/gambarArtikel/artikel.jpeg";
import Artikel2Image from "../../assets/images/gambarArtikel/artikel2.jpeg";
import Rekomendasi3Image from "../../assets/images/gambarArtikel/rekomendasi3.jpeg";
import Jose from "../../assets/images/gambarArtikel/jose.png";
import "../../dist/css/artikel.css";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";

const Layout = () => {
  return (
    <div className="artikel">
    <div>
    <div className="hero-galeri d-flex justify-content-start min-vh-100 w-100"
        style={{
          backgroundImage: `url(${bgartikelImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
          paddingTop: "250px",
        }}
        >
          <div className='carousel-overlay'>
          <NavbarstatisComponent/>
              <div className='text-justify-start'>
                <div className="container  w-100">
                <h1 className='tagline text-white fs-1 fw-bold'> MENJELAJAH <span style={{ color:"#FFA323"}}> ALAM </span> DENGAN BIJAK </h1>
                <p className='text-white text-white mb-0'
                style={{
                  fontSize: "20px",
                  width:"65%"
                 
                }}
                >Berpetualang di Gunung dengan bijak bukan hanya berkeliling, tetapi komitmen untuk memahami, menghormati, dan merawat keindahan serta keberlanjutan alam</p>
                
                </div>
              </div>
          </div>
        </div>
      </div>
    <Container className="artikel-container">
        <h1>Artikel Terbaru</h1>
        <Row>
            <Col>
            <Link to="/artikel1">
                <div className="c-art">
              <img src={Artikel1Image} alt="Recommendation 1" style={{ width: "350px", height: "210px", marginBottom: "10px", marginTop: "20px", borderRadius: "30px" }} />
              <p style={{ fontSize: "17px", fontWeight: "bold", textAlign: "left", color: "#000"}}>3 Mitos Terkenal Di Gunung Sindoro Konon Katanya Tempat Bersemayam Makhluk Gaib</p>
              <p style={{ fontSize: "14px", textAlign: "left", color: "#000", marginTop: "-15px"}}>Gunung Sindoro yang juga dikenal dengan sebutan Gunung Sindara atau Sundoro merupakan salah.....</p>
              <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Jose} alt="Author" style={{ width: "24px", height: "24px", marginRight: "8px", marginTop: "-15px" }} />
              <p style={{ fontSize: "14px", textAlign: "left", color: "#000"}}>
              Jose Rahmat | 09 Nov 2023
             </p>
             </div>
             </div>
             </Link>
            </Col>
            <Col>
            <Link to="/artikel2">
            <div className="c-art">
              <img src={Artikel2Image} alt="Recommendation 2" style={{ width: "350px", height: "210px", marginBottom: "10px", marginTop: "20px", borderRadius: "30px" }} />
              <p style={{ fontSize: "17px", fontWeight: "bold", textAlign: "left", color: "#000"}}>Mengenal Gunung Sindoro, Daya Tarik dan Lokasinya</p>
              <p style={{ fontSize: "14px", textAlign: "left", color: "#000", marginTop: "-15px"}}>Gunung Sindoro, dengan kemegahan puncaknya yang mencapai 3.153 meter di atas permukaan laut, mengund...</p>
              <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Jose} alt="Author" style={{ width: "24px", height: "24px", marginRight: "8px", marginTop: "-15px" }} />
              <p style={{ fontSize: "14px", textAlign: "left", color: "#000"}}>
              Jose Rahmat | 09 Nov 2023
             </p>
             </div>
             </div>
             </Link>
            </Col>
            <Col>
            <Link to="/artikel3">
            <div className="c-art">
              <img src={Rekomendasi3Image} alt="Recommendation 3" style={{ width: "350px", height: "210px", marginBottom: "10px", marginTop: "20px", borderRadius: "30px" }} />
              <p style={{ fontSize: "17px", fontWeight: "bold", textAlign: "left", color: "#000"}}>Gunung Sindoro, Sembunyikan Keindahan Dalam Jalur Yang Menantang</p>
              <p style={{ fontSize: "14px", textAlign: "left", color: "#000", marginTop: "-15px"}}>Gunung Sindoro, dengan kemegahan puncaknya yang mencapai 3.153 meter di atas permukaan laut, mengund...</p>
              <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Jose} alt="Author" style={{ width: "24px", height: "24px", marginRight: "8px", marginTop: "-15px" }} />
              <p style={{ fontSize: "14px", textAlign: "left", color: "#000"}}>
              Jose Rahmat | 09 Nov 2023
             </p>
             </div>
             </div>
             </Link>
            </Col>
          </Row>
      </Container>
    <FooterComponent />
    </div>
  )
}
export default Layout



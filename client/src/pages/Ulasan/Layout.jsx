import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FooterComponent from "../../components/fragments/FooterComponent";
import EmailFormUlasan from "../../components/fragments/EmailFormUlasanComponent";
import TestimoniImage from "../../assets/images/gambarUlasan/testimoni.png";
import "../../dist/css/ulasan.css";
import "../../dist/css/main.css"
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
import Cardtesti from "../../components/fragments/Cardtesti";
import Cardtesti2 from "../../components/fragments/Cardtesti2";

const Layout = () => {
  return (
    <div>

      <div className="h-vh-100" style={{ backgroundColor: "#D4DBD9" }}>
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(${TestimoniImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
          }}
        >
          <NavbarstatisComponent />
          <Container
            className="hero d-flex justify-content-start  h-100 "
            fluid
          >
            <Row className="my-auto gap-5  h-vh-100 p-5">
              <Col className="text-white ">
                <h4 className="fw-bold fs-1">
                  KISAH SUKSES{" "}
                  <span className="fw-bold fs-1" style={{ color: "#FFA323" }}>
                    PENDAKI
                  </span>
                </h4>
                <h1 className="fw-bold fs-4">MEREKA SEMUA ADA DI SINI</h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="text-white text-center">
        <h4 className="fw-bold fs-2 mt-5" style={{color:"#294E45"}}>
                  "APA YANG PENDAKI KAMI KATAKAN"
                </h4>
        <div className="mt-4">
            <Cardtesti/>
        </div>

        <div>
            <Cardtesti2/>
        </div>
        </div>
      </div>
       <Container className="w-100">
      <EmailFormUlasan />
      </Container>
      <FooterComponent />
    </div>
  );
};

export default Layout;

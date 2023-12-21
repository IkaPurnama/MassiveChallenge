// VideoPages.jsx
import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent"
import FooterComponent from "../../components/fragments/FooterComponent";
import BgGaleri from "../../assets/images/gambarGaleri/bg_galeri.png";
import NavbarGaleri from "../../components/fragments/NavbarGaleri";
import "../../dist/css/video.css";

const Layout = () => {
  const [file, setFile] = useState(null);

  const Media = [
    { type: "video", url: new URL("../../assets/images/videoGaleri/video1.mp4", import.meta.url) },
    { type: "video", url: new URL("../../assets/images/videoGaleri/video2.mp4", import.meta.url) },
    { type: "video", url: new URL("../../assets/images/videoGaleri/video3.mp4", import.meta.url) },
    
  ];
  console.log(Media);
  const M = [
    { type: "video", url: new URL("../../assets/images/videoGaleri/video4.mp4", import.meta.url) },
    { type: "video", url: new URL("../../assets/images/videoGaleri/video5.mp4", import.meta.url) },
    { type: "video", url: new URL("../../assets/images/videoGaleri/video6.mp4", import.meta.url) },
  ];
  console.log(M);

  return (
    <>
      <div className="video">
        <div>
        {/* Hero section */}
        <div
          className="hero-galeri min-vh-100 w-100"
          style={{
            backgroundImage: `url(${BgGaleri})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "100vh",
            paddingTop: "230px",
          }}
        >
          <div className="carousel-overlay">
            <NavbarstatisComponent />
            <div className="justify-content-start">
              <h1 className="tagline text-white fs-1 fw-bold ">VIDEO GUNUNG <span style={{ color:"#FFA323"}}>SINDORO</span></h1>
              <p className="text-white text-white mb-0" 
              style={{ fontSize: "20px" }}>
                Berbagai keindahan Gunung Sindoro ada disini
              </p>
              <p className="text-white text-white" 
              style={{ fontSize: "17px" }}>
                <b>Puncak Sindoro</b>. 3153 MDPL
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Video section */}
        <Container className="text-center justify-content-center"
         style={{
          paddingBottom: "20px"
        }}>
          <h2
            className="text-center fs-2 fw-bold"
            style={{
              marginTop: "30px",
              color: "#1D312C",
              fontSize: "30px",
            }}
          >
            Keindahan Ndoro Arum
          </h2>
         <div className="d-flex justify-content-center">
          <Row className="mt-3">
            <NavbarGaleri />
          </Row>
          </div>
        </Container>

        <Container className="">
          <Row>
            {/* Left Column (Video Section) */}
            <Col md={6}>
            <Container className="media-container min-vh-100 d-flex align-items-center" style={{ paddingBottom: "25px" }}>
                <Row className='row-cols-lg-6 row-cols-md-4 row-cols-sm-4 row-cols-6 g-6'>
                  {M.map((vid, index) => (
                    <Col key={index} md={6} className="media mb-5 cols-6 " onClick={() => setFile(vid)}>
                      <video src={vid.url} muted className=" d-block w-100 " controls  style={{borderRadius:"30px"}}/>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>

            {/* Right Column (Media Container) */}
            <Col md={6}>
              <Container className="media-container min-vh-100 d-flex align-items-center" style={{ paddingBottom: "25px" }}>
                <Row className='row-cols-lg-6 row-cols-md-4 row-cols-sm-4 row-cols-6 g-6'>
                  {Media.map((video, index) => (
                    <Col key={index} md={6} className="media mb-5  cols-6 " onClick={() => setFile(video)}>
                      <video src={video.url} muted className=" d-block w-100 " controls  style={{borderRadius:"30px"}}/>
                    </Col>
                  ))}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        {/* Popup media */}
        <Modal show={file !== null} onHide={() => setFile(null)} centered>
          <Modal.Body>{file?.type === "video" && <video src={file?.url}  autoPlay controls className="w-100" />}</Modal.Body>
        </Modal>

        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;

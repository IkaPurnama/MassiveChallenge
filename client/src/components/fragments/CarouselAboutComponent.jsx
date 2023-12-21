import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../../dist/css/about.css";
import img1 from "../../assets/images/gambarAbout/1.jpg";
import img2 from "../../assets/images/gambarAbout/2.jpg";
import img3 from "../../assets/images/gambarAbout/3.jpg";
import img4 from "../../assets/images/gambarAbout/4.png";
import img5 from "../../assets/images/gambarAbout/5.png";

const CarouselAboutComponent = () => {
  return (
    <Carousel interval={2000}>
      <Carousel.Item>
        <Container>
          <Row>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img className="d-block w-100" src={img4} alt="Fourth slide" />
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img className="d-block w-100" src={img5} alt="Fifth slide" />
            </Col>
            <Col md={4} className="d-flex justify-content-center align-items-center">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselAboutComponent;
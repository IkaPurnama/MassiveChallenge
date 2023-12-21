import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import sejarahsindoroImage from "../../assets/images/gambarAbout/sejarahsindoro.jpg";
import visimisisindoroImage from "../../assets/images/gambarAbout/visimisisindoro.jpg";
import { Link } from "react-router-dom";
import "../../dist/css/about.css";
import CarouselAboutComponent from "../../components/fragments/CarouselAboutComponent";
import EmailFormComponent from "../../components/fragments/EmailFormComponent";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";

const Layout = () => {
  return (
    <div className="About">
      <div className="custom-bg h-vh-100">
        <NavbarstatisComponent/>
        <br></br>
        <Col >
            <h1 style={{textAlign: "center", fontSize: "30px", fontWeight: "700", marginTop: "80px", color: "#1D312C" }}>
            TENTANG <span className="fw-bold fs-2" style={{ color:"#FFA323"}}>SINDORO</span>
            </h1>
            <h2 style={{textAlign: "center", fontSize: "20px", fontWeight: "400", color: "#1E2221", marginBottom: "-8px"}}>
            Informasi mengenai pengelolaan basecamp sindoro via Ndro Arum
            </h2>
        </Col>
        <Container className="content d-flex flex-column justify-content-center align-items-center h-100">
          <Row className="my-auto gap-5 h-50 p-5">
            <Col className="carousel-container" md={12}>
              <CarouselAboutComponent />
            </Col>
          </Row>
          <br />
          <Row className="text-center mt-2 mb-2 about-text">
            <Col>
            <h1 className="mb-3 font-weight-bold" style={{ display: 'flex', alignItems: 'baseline', color: 'rgba(29, 49, 44, 0.91)', fontSize: '30px', fontStyle: 'normal', fontWeight: 700 }}>
              Sejarah Sindoro - 
              <span className="mb-3 font-weight-bold" style={{
                color: 'rgba(29, 49, 44, 0.91)', 
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: 400,
                marginLeft: '10px',
                }}>
                Ndoro Arum
              </span>
            </h1>
            <p style={{ fontSize: "16px", width: "490px", height: "210px", textAlign: "justify", fontWeight: "400", marginLeft: "-10px"}}>
            Gunung Sindoro, atau Sindara, adalah gunung berapi aktif di Jawa Tengah, Indonesia, dengan ketinggian 3.153 mdpl. Nama "Sindoro" berasal dari bahasa Sansekerta yang berarti indah, diperkuat oleh Manuskrip Bujangga Manik. Pada abad ke-19, naturalis Belanda Franz Wilhelm Junghuhn menjelajahi gunung ini dan melakukan penelitian flora dan fauna. Sejarah letusan mencakup peristiwa ringan hingga sedang sejak abad ke-19, termasuk letusan pada tahun 1806, 1818, 1882, 1883, 1887, dan 1902.
            </p>
            <Link to="/sejarah" className="custom-link">Selengkapnya</Link>
            </Col>
            <Col>
            <img
            src={sejarahsindoroImage}
            alt="Sindoro"
            style={{ width: "571px", height: "80%", borderRadius: "30px", marginLeft: "20px"}}/>
            </Col>
          </Row>
          <br />
          <br />
          <Row className="text-center mt-2 mb-2 about-text">
            <Col >
            <img
            src={visimisisindoroImage}
            alt="Sindoro"
            style={{ width: "571px", height: "80%", borderRadius: "30px", marginRight: "20px"}}/>
            </Col>
            <Col>
            <h1 className="mb-3 font-weight-bold" style={{ fontSize: "30px", color: 'rgba(29, 49, 44, 0.91)', fontStyle: 'normal', fontWeight: 700 }}>
            Visi & Misi
            </h1>
            <p style={{ fontSize: "16px", width: "490px", height: "190px", textAlign: "justify", fontWeight: "400", marginRight: "-10px"}}>
            Gunung Sindoro, gunung berapi aktif di Jawa Tengah, Indonesia, "mempunyai visi dan misi" dalam bentuk usaha mempertahankan keindahan alamnya dan memberikan pengalaman mendaki yang luar biasa. Ini mencakup upaya untuk memelihara keindahan padang edelweis dan "danau" di puncak gunung sebagai visi, serta memberikan pengalaman mendaki yang tak terlupakan dan mempromosikan konservasi alam sebagai misi.
            </p>
            <Link to="/visimisi" className="custom-link">Selengkapnya</Link>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <EmailFormComponent/>
      <br />
      <br />
      <FooterComponent />
    </div>
  );
};

export default Layout;

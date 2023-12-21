import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import VisiMisi from "../../assets/images/gambarAbout/visimisi.jpg";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronLeft } from "react-icons/fa";


const Layout = () => {
  const pageStyle = {
    background: '#FFFFFF', // Warna latar belakang halaman
  };

  const paragraphStyle = {
    fontSize: "18px",
    padding: '10px',
    color: '#000',
    background: '#FFFFFF',
    marginBottom: '40px',
    fontWeight: "500",
    marginLeft: '50px',
  };

  return (
    <div style={pageStyle}>
      <NavbarstatisComponent/>
      <img
              src={VisiMisi}
              alt="Visi Misi Sindoro"
              style={{ width: "100%",height:"100vh"}}
              srcSet={VisiMisi}
            />
        <Container>
        <Row className='align-items-center'>
            <Link
              to="/about"
              className="text-decoration-none"
              style={{
                fontWeight: '500',
                fontSize: '15px',
                textAlign: 'left',
                color: 'black',
                marginTop: "30px",
              }}
            >
              <FaChevronLeft size={18} style={{ marginRight: '10px' }} />
              Kembali
            </Link>
          </Row>
        <Row>
          <Col>
          <h1 className="mb-3 font-weight-bold" style={{ marginTop: '30px', marginLeft: "30px", fontSize: "32px", color: '#1D312C', fontWeight: "700", lineHeight: "normal", fontStyle: "normal", textAlign: "justify"}}>
            Visi & Misi 
            </h1>
            <p style={paragraphStyle}>
            <p>Gunung Sindoro adalah gunung berapi aktif yang terletak di Jawa Tengah, Indonesia. Meskipun gunung tidak memiliki visi dan misi dalam arti tradisional, kita bisa melihat "visi dan misi" Gunung Sindoro sebagai upaya untuk mempertahankan keindahan alamnya dan memberikan pengalaman yang luar biasa bagi para pendaki.</p>
            <p>Berikut adalah beberapa "visi dan misi" yang bisa kita asosiasikan dengan Gunung Sindoro:</p>
            <p></p>1. Mempertahankan Keindahan Alam: Gunung Sindoro memiliki keindahan alam yang luar biasa, termasuk hamparan padang edelweiss dan "danau" di puncak gunung. Mempertahankan dan melindungi keindahan ini bisa dianggap sebagai "visi" dari Gunung Sindoro.
            <p></p>2. Memberikan Pengalaman Mendaki yang Luar Biasa: Dengan jalur pendakian yang menantang dan pemandangan yang memukau, Gunung Sindoro menawarkan pengalaman mendaki yang tak terlupakan bagi para pendaki.
            <p></p>3. Mempromosikan Konservasi dan Penghormatan terhadap Alam: Dengan mempromosikan prinsip-prinsip pendakian yang bertanggung jawab, Gunung Sindoro juga berperan dalam mendorong konservasi dan penghormatan terhadap alam.
            </p>
          </Col>
        </Row>
      </Container>

      <FooterComponent/>
    </div>
  );
};

export default Layout;

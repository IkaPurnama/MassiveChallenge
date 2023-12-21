import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import SindoroImage from "../../assets/images/gambarAbout/sindoro.jpg";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronLeft } from "react-icons/fa";


const Layout = () => {
  const pageStyle = {
    background: '#F3F3F3',
  };

  const paragraphStyle = {
    fontSize: "18px",
    padding: '10px',
    color: '#000',
    fontWeight: "500",
    fontStyle: "normal",
    background: '#F3F3F3',
    marginBottom: '40px',
    marginLeft: '50px',
  };

  return (
    <div style={pageStyle}>
      <NavbarstatisComponent/>
      <img
        src={SindoroImage}
        alt="Sindoro"
        style={{ width: "100%", height: "602px" }}
        srcSet={SindoroImage}
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
              Sejarah Gunung Sindoro
            </h1>
            <p style={paragraphStyle}>
            <p>Gunung Sindoro, juga dikenal sebagai Sindara atau Sundoro, adalah gunung berapi aktif yang terletak di Jawa Tengah, Indonesia, dengan Temanggung sebagai kota terdekat. Gunung ini memiliki ketinggian 3.153 mdpl dan merupakan salah satu dari sepuluh gunung tertinggi di Jawa Tengah.</p>
            <p>Asal usul nama Gunung Sindoro berasal dari bahasa Sansekerta "Sundara" yang artinya indah. Bentuk lain untuk perempuan dari Sindoro adalah Sundari yang memiliki arti Cantik. Asal usul nama itu diperkuat dengan Manuskrip Bujangga Manik ketika dia sedang melewati dataran tinggi Dieng.</p>
            <p>Sejarah penjelajahan Gunung Sindoro dimulai pada abad ke-19 ketika wilayah Jawa masih menjadi wilayah koloni Belanda. Penjelajahan di Gunung Sindoro dilakukan oleh seorang naturalis Belanda bernama Franz Wilhelm Junghuhn. Ia mengunjungi Gunung Sindoro pada tahun 1847 dan melakukan penelitian terhadap flora dan fauna di sekitar gunung.</p>
            <p>Sejarah letusan Gunung Sindara yang telah terjadi sebagian besar berjenis ringan sampai sedang (letusan freatik). Letusan baru mulai tercatat sejak Abad ke-19. Berikut ini adalah daftar letusan maupun peningatan aktivitas vulkanik Gunung Sindoro yang terjadi sejak Abad ke-19 Masehi:</p>
            <p></p>- 1806: Letusan di puncak gunung. Masih diragukan kebenarannya.
            <p></p>- 1818: Terjadi letusan abu yang menyebar hingga Pantai Pekalongan. Bulan tidak diketahui.
            <p></p>- 1882: Terjadi letusan abu di Gunung Kembang. Abunya jatuh hingga di Kebumen. Antara 1-7 April kemungkinan terjadi leleran lava di lereng barat laut.
            <p></p>- 1883: Peningkatan aktivitas vulkanik. Kemungkinan terjadi letusan pada bulan Agustus.
            <p></p>- 1887: 13-14 November. Terdengar suara ledakan.
            <p></p>- 1902: 1-25 Mei. Kegiatannya terbatas pada bualan lumpur dan lontaran batu pijar yang jatuh kembali di lubang letusan.
            </p>
          </Col>
        </Row>
      </Container>

      <FooterComponent />
    </div>
  );
};

export default Layout;

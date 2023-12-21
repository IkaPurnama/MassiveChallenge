import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import cuacaImage from "../../assets/images/gambarArtikel/cuaca.jpg";
import Rekomendasi1Image from "../../assets/images/gambarArtikel/babi.jpg";
import Rekomendasi2Image from "../../assets/images/gambarArtikel/hipotermia.jpg";
import Rekomendasi3Image from "../../assets/images/gambarArtikel/cuaca.jpg";
import Jose from "../../assets/images/gambarArtikel/jose.png";
import "../../dist/css/artikel.css";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaChevronLeft } from 'react-icons/fa';


const Layout = () => {
  return (
    <div>
    <NavbarstatisComponent />

    <Container className="my-4">
    <Row className='align-items-center'>
            <Link
              to="/artikel"
              className="text-decoration-none"
              style={{
                fontWeight: '500',
                fontSize: '15px',
                textAlign: 'left',
                color: 'black',
                marginTop: "90px",
              }}
            >
              <FaChevronLeft size={18} style={{ marginRight: '10px' }} />
              Kembali
            </Link>
          </Row>
        <Row style={{color: "#000"}}>
          <Col>
            <h1 style={{ fontSize: "45px", fontWeight: "bold", marginTop: "40px"}}>
            Cara Menghadapi Cuaca Buruk Saat Mendaki: Panduan untuk Keamanan dan Bertahan Hidup
            </h1>
            <h2 style={{ fontSize: "14px", marginLeft: "30px", marginTop: "20px"}}>
              Jose Rahmat
            </h2>
            <h2 style={{ fontSize: "13px", color: "#9D9D9D", marginLeft: "30px"}}>
            Dipublikasikan pada 1 Oktober 2023
            </h2>
          </Col>
          <img src={cuacaImage} 
          alt="Sindoro"
          style={{ width: "100%", height: "536px", borderRadius: "50px", marginTop: "20px" }}
          srcSet={cuacaImage}/>
          <Col>
          <h1 style={{ fontSize: "15px", color: "#9D9D9D", marginTop: "30px"}}>
            Sumber foto
          </h1>
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Mendaki di alam terbuka selalu membawa tantangan, terutama ketika cuaca tiba-tiba berubah menjadi buruk. Badai, petir, hujan es, dan salju dapat menjadi ancaman serius bagi para pendaki. Berikut adalah langkah-langkah yang dapat diambil untuk mengatasi cuaca buruk saat mendaki:
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          1. Cari Tempat Berlindung
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Saat cuaca memburuk, carilah tempat berlindung yang aman dan kering. Hindari tempat terbuka, tinggi, atau dekat dengan air. Jika tidak ada tempat berlindung, improvisasikan tenda atau gubuk darurat dengan menggunakan bahan-bahan sekitar, seperti ranting, daun, atau plastik.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          2. Jaga Suhu Tubuh
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Pastikan tubuh Anda tetap hangat dengan memakai pakaian sesuai cuaca, termasuk jaket, sarung tangan, topi, dan kaus kaki. Gunakan selimut, kantong tidur, atau bahan isolasi lainnya untuk menutupi tubuh. Berpelukan dengan rekan pendaki untuk berbagi panas tubuh jika diperlukan.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          3. Konsumsi Air dan Makanan
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Minumlah air yang cukup untuk mencegah dehidrasi dan memelihara sirkulasi darah. Konsumsi makanan bergizi, terutama yang mengandung gula atau karbohidrat, seperti cokelat, kismis, atau biskuit, untuk memberikan energi dan kalori.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          4. Tetap Tenang dan Optimis
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jangan panik atau stres; cobalah untuk tetap tenang dan berpikir positif. Gunakan alat komunikasi seperti ponsel atau radio untuk meminta bantuan atau memberi tahu posisi Anda kepada orang lain.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          5. Hindari Tidur atau Mengantuk
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Tetap terjaga dan bergerak untuk mencegah penurunan suhu tubuh. Lakukan aktivitas ringan seperti menggoyangkan kaki, menggerakkan tangan, atau mengunyah permen karet.
          </h2>

          
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Mendaki adalah petualangan yang penuh tantangan, dan keselamatan harus menjadi prioritas utama. Selalu siapkan perlengkapan dan rencana cadangan sebelum mendaki, serta perhatikan cuaca dan kondisi medan sepanjang perjalanan. Jangan ragu untuk membatalkan atau menunda pendakian jika cuaca tidak mendukung. Dengan mematuhi langkah-langkah ini, Anda dapat meningkatkan kemungkinan bertahan hidup dan menjadikan pengalaman mendaki lebih aman dan positif.
          </h2>
          </Col>
        </Row>
        <hr style={{ borderTop: "3px solid #B0B0B0", width: "1138px", margin: "20px 0", marginTop: "40px" }} />
        <Col>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px", color: "#000"}}>
        Rekomendasi Untuk Anda 
        </h1>
        <Row>
            <Col>
            <Link to="/artikel4">
            <div className="c-art">
              <img
                src={Rekomendasi1Image}
                alt="Recommendation 1"
                style={{
                  width: "350px",
                  height: "210px",
                  marginBottom: "10px",
                  marginTop: "20px",
                  borderRadius: "30px",
                }}
              />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#000",
                }}
              >
                Selamatkan Diri Anda Saat Hiking
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  color: "#000",
                  marginTop: "-15px",
                }}
              >
            Babi hutan, meskipun seringkali tampak menggemaskan, dapat menjadi hewan yang...
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Jose}
                  alt="Author"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "8px",
                    marginTop: "-15px",
                  }}
                />
                <p
                  style={{ fontSize: "14px", textAlign: "left", color: "#000" }}
                >
                  Jose Rahmat | 09 Nov 2023
                </p>
              </div>
              </div>
              </Link>
            </Col>

            <Col>
            <Link to="/artikel5">
            <div className="c-art">
              <img
                src={Rekomendasi2Image}
                alt="Recommendation 2"
                style={{
                  width: "350px",
                  height: "210px",
                  marginBottom: "10px",
                  marginTop: "20px",
                  borderRadius: "30px",
                }}
              />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#000",
                }}
              >
                7 Cara Mengatasi Hipotermia Yang Benar...
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  color: "#000",
                  marginTop: "-15px",
                }}
              >
               Hipotermia, kondisi serius yang disebabkan oleh penurunan 
               suhu tubuh di bawah 35°C akibat paparan...
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Jose}
                  alt="Author"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "8px",
                    marginTop: "-15px",
                  }}
                />
                <p
                  style={{ fontSize: "14px", textAlign: "left", color: "#000" }}
                >
                  Jose Rahmat | 19 Nov 2023
                </p>
              </div>
              </div>
              </Link>
            </Col>
            <Col>
            <Link to="/artikel6">
            <div className="c-art">
              <img
                src={Rekomendasi3Image}
                alt="Recommendation 3"
                style={{
                  width: "350px",
                  height: "210px",
                  marginBottom: "10px",
                  marginTop: "20px",
                  borderRadius: "30px",
                }}
              />
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#000",
                }}
              >
                Cara Mengatasi Cuaca Buruk Saat Mendaki
              </p>
              <p
                style={{
                  fontSize: "14px",
                  textAlign: "left",
                  color: "#000",
                  marginTop: "-15px",
                }}
              >
                Mendaki di alam terbuka selalu membawa tantangan, terutama ketika cuaca tiba-tiba berubah menjadi buruk...
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={Jose}
                  alt="Author"
                  style={{
                    width: "24px",
                    height: "24px",
                    marginRight: "8px",
                    marginTop: "-15px",
                  }}
                />
                <p
                  style={{ fontSize: "14px", textAlign: "left", color: "#000" }}
                >
                  Jose Rahmat | 29 Nov 2023
                </p>
              </div>
              </div>
              </Link>
            </Col>
          </Row>


        </Col>
      </Container>

    <FooterComponent />
    </div>
  )
}

export default Layout



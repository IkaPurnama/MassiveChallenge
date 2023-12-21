import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import hipotermiaImage from "../../assets/images/gambarArtikel/hipotermia.jpg";
import Rekomendasi1Image from "../../assets/images/gambarArtikel/babi.jpg";
import Rekomendasi2Image from "../../assets/images/gambarArtikel/hipotermia.jpg";
import Rekomendasi3Image from "../../assets/images/gambarArtikel/cuaca.jpg";
import Jose from "../../assets/images/gambarArtikel/jose.png";
import "../../dist/css/artikel.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
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
            7 Langkah Tepat Mengatasi Hipotermia: Panduan Penting untuk Keamanan Anda di Lingkungan Dingin
            </h1>
            <h2 style={{ fontSize: "14px", marginLeft: "30px", marginTop: "20px"}}>
              Jose Rahmat
            </h2>
            <h2 style={{ fontSize: "13px", color: "#9D9D9D", marginLeft: "30px"}}>
            Dipublikasikan pada 1 Oktober 2023
            </h2>
          </Col>
          <img src={hipotermiaImage} 
          alt="Sindoro"
          style={{ width: "100%", height: "536px", borderRadius: "50px", marginTop: "20px" }}
          srcSet={hipotermiaImage}/>
          <Col>
          <h1 style={{ fontSize: "15px", color: "#9D9D9D", marginTop: "30px"}}>
            Sumber foto
          </h1>
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Hipotermia, kondisi serius yang disebabkan oleh penurunan suhu tubuh di bawah 35°C akibat paparan suhu dingin yang berkepanjangan, dapat menjadi ancaman nyata terhadap kesehatan dan bahkan kehidupan. Untuk membantu Anda mengatasi situasi ini dengan benar, berikut adalah tujuh langkah yang perlu diambil:
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          1. Pindahkan ke Tempat Hangat
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Segera pindahkan korban ke tempat yang lebih hangat dan kering, menjauhkannya dari sumber suhu dingin seperti angin, air, atau salju.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          2. Lepaskan Pakaian Basah atau Kotor
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Lepaskan pakaian yang basah atau kotor dari tubuh korban. Pakaian yang basah dapat mempercepat penurunan suhu tubuh.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          3. Tutupi dengan Selimut atau Bahan Isolasi
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Tutupi tubuh korban dengan selimut, kantong tidur, atau bahan isolasi lainnya, termasuk kepala, leher, dan kaki, tetapi hindari menutupi wajah agar pernapasan tidak terganggu.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          4. Berikan Minuman Hangat
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Sediakan minuman hangat tanpa alkohol atau kafein untuk membantu meningkatkan suhu tubuh dari dalam. Hindari minuman beralkohol atau kafein, yang dapat memperburuk dehidrasi.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          5. Berikan Makanan yang Tepat
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Beri korban makanan yang mengandung gula atau karbohidrat untuk memberikan energi dan kalori tanpa memperlambat pencernaan dan metabolisme.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          6. Lakukan Pemanasan Tubuh
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Lakukan pemanasan tubuh pasif dengan memanfaatkan sumber panas alami atau aktif dengan menggunakan sumber panas buatan seperti botol air panas. Letakkan sumber panas di area tubuh yang penting.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          7. Hubungi Bantuan Medis
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jika gejala hipotermia parah muncul, seperti menggigil hebat, bicara tidak jelas, kebingungan, kantuk, atau kehilangan kesadaran, segera hubungi bantuan medis. Perawatan intensif mungkin diperlukan, termasuk pemberian cairan intravena, oksigen, atau alat bantu pernapasan.
          </h2>
          
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Dengan mengikuti langkah-langkah ini, Anda dapat meningkatkan peluang untuk mengatasi hipotermia dengan efektif dan menjaga keamanan diri dan orang lain di lingkungan yang dingin. Tetap waspada dan berhati-hati saat beraktivitas di kondisi cuaca ekstrem!
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



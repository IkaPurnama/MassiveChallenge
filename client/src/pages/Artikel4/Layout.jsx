import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import babiImage from "../../assets/images/gambarArtikel/babi.jpg";
import Rekomendasi1Image from "../../assets/images/gambarArtikel/babi.jpg";
import Rekomendasi2Image from "../../assets/images/gambarArtikel/hipotermia.jpg";
import Rekomendasi3Image from "../../assets/images/gambarArtikel/cuaca.jpg";
import Jose from "../../assets/images/gambarArtikel/jose.png";
import "../../dist/css/artikel.css";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
import { Link } from "react-router-dom/cjs/react-router-dom";
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
            Selamatkan Diri Anda Saat Hiking: Panduan Bijak Menghadapi Pertemuan dengan Babi Hutan
            </h1>
            <h2 style={{ fontSize: "14px", marginLeft: "30px", marginTop: "20px"}}>
              Jose Rahmat
            </h2>
            <h2 style={{ fontSize: "13px", color: "#9D9D9D", marginLeft: "30px"}}>
            Dipublikasikan pada 1 Oktober 2023
            </h2>
          </Col>
          <img src={babiImage} 
          alt="Sindoro"
          style={{ width: "100%", height: "536px", borderRadius: "50px", marginTop: "20px" }}
          srcSet={babiImage}/>
          <Col>
          <h1 style={{ fontSize: "15px", color: "#9D9D9D", marginTop: "30px"}}>
            Sumber foto
          </h1>
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Babi hutan, meskipun seringkali tampak menggemaskan, dapat menjadi hewan yang berpotensi berbahaya jika merasa terancam atau terganggu. Jika Anda merencanakan petualangan hiking di daerah yang dikenal memiliki populasi babi hutan, penting untuk memiliki pengetahuan dan kesiapan yang cukup. Berikut adalah beberapa tips yang dapat membantu Anda menghindari atau mengatasi pertemuan dengan babi hutan yang mungkin terjadi selama hiking Anda:
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          1. Kenali Lingkungan
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Sebelum memulai perjalanan hiking, carilah informasi tentang keberadaan dan perilaku babi hutan di daerah tujuan Anda. Konsultasikan dengan pemandu, petugas konservasi, atau penduduk setempat untuk mendapatkan wawasan yang berharga.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          2. Bawa Peralatan Darurat
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Pastikan Anda membawa peralatan yang dapat membantu Anda dalam situasi darurat, seperti pisau multifungsi, senter, peluit, obat-obatan, dan ponsel. Peralatan ini dapat sangat berguna jika Anda perlu menghadapi situasi yang tidak terduga.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          3. Hiking dalam Kelompok
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jangan pernah hiking sendirian, terutama jika Anda berada di daerah yang diketahui memiliki populasi babi hutan. Hiking dalam kelompok dapat meningkatkan keamanan dan membantu dalam mengatasi situasi yang mungkin timbul.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          4. Jaga Jarak Aman
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jika Anda melihat babi hutan, hindari mendekat, menyentuh, atau memberi makan pada hewan tersebut. Jaga jarak yang aman dan biarkan mereka beraktivitas secara alami.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          5. Mengatasi Pertemuan yang Mungkin Berbahaya
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jika Anda bertemu dengan babi hutan yang menunjukkan perilaku agresif, terapkan langkah-langkah berikut:
          </h2>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          - Tetap Tenang: Jangan panik, berteriak, atau berlari.
          </h2>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          - Tatap Mata: Berdiri tegak dan tatap mata babi hutan untuk menunjukkan sikap tegas dan percaya diri.
          </h2>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          - Mundur Perlahan: Hindari berbalik atau memutuskan kontak mata, dan mundur perlahan-lahan.
          </h2>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          - Gunakan Peralatan: Jika diperlukan, gunakan peralatan yang Anda bawa, seperti pisau atau semprotan merica, untuk melindungi diri Anda.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          6. Pertolongan Pertama dan Bantuan Medis
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jika terjadi serangan atau cedera, berikan pertolongan pertama segera dan cari bantuan medis secepat mungkin.
          </h2>
          
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Dengan memahami dan menerapkan langkah-langkah ini, Anda dapat meningkatkan keselamatan diri Anda dan menjadikan petualangan hiking Anda lebih menyenangkan. Selamat hiking dan selalu prioritaskan keamanan!
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



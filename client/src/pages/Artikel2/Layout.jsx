import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import ArtikelSindoro2Image from "../../assets/images/gambarArtikel/artikel2.jpeg";
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
            Mengenal Gunung Sindoro, Daya Tarik dan Lokasinya
            </h1>
            <h2 style={{ fontSize: "14px", marginLeft: "30px", marginTop: "20px"}}>
              Jose Rahmat
            </h2>
            <h2 style={{ fontSize: "13px", color: "#9D9D9D", marginLeft: "30px"}}>
            Dipublikasikan pada 1 Oktober 2023
            </h2>
          </Col>
          <div className="d-flex flex-column">
          <img src={ArtikelSindoro2Image} 
          alt="Sindoro"
          style={{ width: "100%", height: "536px", borderRadius: "50px", marginTop: "20px" }}
          srcSet={ArtikelSindoro2Image}/>
          </div>
          <Col>
          <h1 style={{ fontSize: "15px", color: "#9D9D9D", marginTop: "30px"}}>
            Sumber foto
          </h1>
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Gunung Sindoro, atau yang juga dikenal sebagai Gunung Sundoro, adalah salah satu keajaiban alam yang membanggakan di Jawa Tengah, Indonesia. Sebagai gunung berapi yang megah, Gunung Sindoro menjulang dengan ketinggian mencapai sekitar 3.136 meter di atas permukaan laut, menjadikannya salah satu puncak tertinggi di Indonesia. Letaknya yang strategis di antara Kabupaten Temanggung dan Kabupaten Wonosobo menawarkan panorama alam yang menakjubkan dan beragam, menciptakan daya tarik luar biasa bagi para pencinta petualangan dan keindahan alam.
          </h2>
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Selain sebagai destinasi pendakian yang menantang, Gunung Sindoro juga memiliki karakteristik geologis yang menarik. Kehadiran kawah indahnya dan sejarah letusan gunung ini memberikan daya tarik tambahan bagi mereka yang tertarik pada keajaiban alam dan geologi. Dengan keindahan alamnya yang menawan, Gunung Sindoro menjadi magnet bagi pendaki, peneliti, dan pecinta alam yang ingin menjelajahi kekayaan alam Indonesia yang memukau.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Daya Tarik
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Gunung Sindoro, dengan keelokan alamnya yang menakjubkan, menawarkan pengalaman visual yang luar biasa dari puncaknya. Dengan panorama yang meliputi hamparan sawah, hutan yang hijau, dan deretan gunung di kejauhan, gunung ini memukau para pendaki dengan keindahan yang mempesona. Puncak Gunung Sindoro bukan hanya menyajikan pemandangan yang menakjubkan, tetapi juga menghadirkan tantangan sejati bagi para pendaki. Jalur pendakian yang beragam memungkinkan penikmat petualangan untuk memilih rute sesuai dengan kemampuan dan tingkat tantangan yang diinginkan. Dengan begitu, pendakian ke Gunung Sindoro tidak hanya menjadi perjalanan fisik, tetapi juga menjelma menjadi pengalaman penuh keajaiban alam dan ketegangan yang membekas dalam kenangan.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Lokasi
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Gunung Sindoro, sebagai salah satu destinasi wisata di Provinsi Jawa Tengah, terletak di antara Kabupaten Temanggung dan Kabupaten Wonosobo. Lokasinya yang strategis ini memudahkan akses bagi para pendaki yang ingin menaklukkan keindahan gunung berapi ini. Terdapat beberapa jalur pendakian yang dapat dipilih oleh para petualang, seperti melalui Desa Sigedang, Kledung, Parakan, atau Wonosobo. Setiap jalur pendakian menawarkan pengalaman yang unik dan pemandangan alam yang berbeda, memberikan variasi tersendiri bagi para pendaki yang ingin menjelajahi kekayaan Gunung Sindoro. Dengan aksesibilitas yang baik, gunung ini menjadi tujuan populer bagi mereka yang ingin merasakan pesona alam Indonesia yang memukau.
          </h2>
          
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Nah, itulah beberapa mitos dan misteri Gunung Sindoro. Meskipun hal tersebut hanya mitos dan belum jelas kebenarannya, hendaknya bagi para pendaki Gunung Sindoro untuk tetap menghormati kepercayaan penduduk sekitar dan tidak melanggarnya.
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



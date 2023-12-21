import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import ArtikelSindoro3Image from "../../assets/images/gambarArtikel/rekomendasi3.jpeg";
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
            Gunung Sindoro, Sembunyikan Keindahan Dalam Jalur Yang Menantang
            </h1>
            <h2 style={{ fontSize: "14px", marginLeft: "30px", marginTop: "20px"}}>
              Jose Rahmat
            </h2>
            <h2 style={{ fontSize: "13px", color: "#9D9D9D", marginLeft: "30px"}}>
            Dipublikasikan pada 1 Oktober 2023
            </h2>
          </Col>
          <div className="d-flex flex-column">
          <img src={ArtikelSindoro3Image} 
          alt="Sindoro"
          style={{ width: "100%", height: "536px", borderRadius: "50px", marginTop: "20px" }}
          srcSet={ArtikelSindoro3Image}/>
          </div>
          <Col>
          <h1 style={{ fontSize: "15px", color: "#9D9D9D", marginTop: "30px"}}>
            Sumber foto
          </h1>
          <h2 style={{ fontSize: "16px", marginTop: "20px"}}>
          Gunung Sindoro, dengan segala keistimewaannya, menjadi destinasi yang begitu mengagumkan dan bernilai tinggi bagi para pencinta alam dan petualangan. Keunikan gunung ini tidak hanya terletak pada pesonanya yang memukau namun juga pada sejumlah faktor lain yang membuatnya begitu istimewa.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Pemandangan Alam
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Dari puncak Gunung Sindoro, mata disuguhkan dengan pemandangan alam yang memukau, menghadirkan hamparan sawah yang luas, hutan lebat, dan gunung-gunung menjulang di kejauhan. Keelokan sawah yang terbentang seperti lukisan alam yang tak berujung memberikan ketenangan, sementara hutan yang rapat menjadi koridor alami yang memikat. Di latar belakang, gunung-gunung yang menjulang tinggi menambahkan dimensi kebesaran alam, menciptakan panorama pegunungan yang spektakuler. Dengan setiap langkah mendaki, pendaki tidak hanya menghadapi tantangan fisik, tetapi juga dihantui keajaiban alam yang memukau, mengajak untuk merenung dalam keindahan yang melampaui kata-kata.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Flora dan Fauna
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Gunung Sindoro menawarkan lebih dari sekadar keindahan alam yang menakjubkan, karena juga dikenal dengan keanekaragaman flora dan fauna yang melimpah. Saat melalui jalur pendakian, pengunjung akan disuguhi pemandangan beragam tumbuhan yang menghiasi lereng gunung, mulai dari tumbuhan pionir hingga flora endemik yang menjadi bagian esensial dari ekosistem pegunungan. Tak hanya itu, gunung ini juga menjadi tempat tinggal bagi berbagai jenis fauna yang menambah keunikan pengalaman pendakian. Jejak-jejak kehidupan burung endemik, serangga langka, dan mamalia yang hidup di ketinggian menambah daya tarik Gunung Sindoro sebagai tujuan pendakian yang tak hanya memukau mata tetapi juga memperkaya pemahaman akan keanekaragaman hayati Indonesia.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Jalur Pendakian
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Jalur pendakian di Gunung Sindoro memang terkenal sebagai tantangan yang menguji keberanian dan ketangguhan para pendaki, menjadikannya tujuan favorit bagi pencinta petualangan. Meskipun menantang, pengalaman mendaki di Gunung Sindoro menawarkan kepuasan tersendiri ketika mencapai puncak yang menakjubkan. Jalur yang berkelok-kelok dan terkadang curam memberikan sensasi petualangan yang mendebarkan, memacu adrenalin para pendaki. Namun, setiap langkah yang diambil akan segera dibalas dengan pemandangan alam yang menakjubkan, mulai dari hutan lebat hingga puncak gunung yang memukau. Keelokan alam yang disuguhkan sepanjang perjalanan menjadikan setiap tantangan di jalur pendakian Gunung Sindoro sebagai pengalaman yang tak terlupakan, memperkaya perjalanan pendaki dengan keindahan dan ketegangan yang seimbang.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Kawah Sindoro
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Salah satu daya tarik utama Gunung Sindoro yang menarik perhatian para pendaki adalah keindahan kawahnya yang memukau. Kawah ini, yang menjadi pusat perhatian di puncak gunung, telah menjadi tujuan utama bagi banyak petualang yang mencari pengalaman unik. Saat mencapai kawah, para pendaki akan disambut dengan pemandangan yang luar biasa, di mana ketenangan dan kemegahan alam bergabung dalam harmoni yang memukau. Bentuk geologis yang unik dan asap tipis yang mungkin keluar dari kawah menambahkan nuansa mistis pada pengalaman ini, menciptakan atmosfer yang mengesankan dan tak terlupakan. Dengan eksplorasi kawah yang memikat, Gunung Sindoro memberikan pengalaman mendalam bagi para pendaki yang berani menaklukkan puncaknya.
          </h2>
          <h3 style={{ fontSize: "18px", fontWeight: "bold", marginTop: "20px"}}>
          Sunrise dan Sunset
          </h3>
          <h2 style={{ fontSize: "16px", marginTop: "10px"}}>
          Bagi para pendaki, momen matahari terbit dan terbenam di puncak Gunung Sindoro adalah pengalaman yang menggetarkan dan tak terlupakan. Ketinggian gunung ini menciptakan panggung alam yang sempurna, di mana warna-warni langit dan panorama pegunungan mempersembahkan pertunjukan visual yang memukau. Saat matahari naik, sinar keemasannya memeluk puncak gunung dan hamparan alam di sekitarnya, memberikan kesan keindahan yang mempesona. Begitu pula saat matahari tenggelam, langit diwarnai oleh warna-warna dramatis yang menciptakan atmosfer magis. Momen-momen ini bukan hanya pemandangan indah, melainkan juga simbol perjalanan pendaki yang penuh tantangan, menambah makna mendalam pada pencapaian mereka. Dengan keunikan dan kecantikan alamnya, Gunung Sindoro memberikan pengalaman spiritual dan visual yang tak terlupakan bagi para pengunjungnya.
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



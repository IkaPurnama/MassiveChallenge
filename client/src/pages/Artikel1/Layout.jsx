import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterComponent from "../../components/fragments/FooterComponent";
import ArtikelSindoroImage from "../../assets/images/gambarArtikel/artikel.jpeg";
import Rekomendasi1Image from "../../assets/images/gambarArtikel/babi.jpg";
import Rekomendasi2Image from "../../assets/images/gambarArtikel/hipotermia.jpg";
import Rekomendasi3Image from "../../assets/images/gambarArtikel/cuaca.jpg";
import Jose from "../../assets/images/gambarArtikel/jose.png";
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
        <Row style={{ color: "#000" }}>
          <Col>
            <h1
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                marginTop: "40px",
              }}
            >
              Bikin Merinding, Inilah Mitos dan Misteri Gunung Sindoro
            </h1>
            <h2
              style={{
                fontSize: "14px",
                marginLeft: "30px",
                marginTop: "20px",
              }}
            >
              Jose Rahmat
            </h2>
            <h2
              style={{ fontSize: "13px", color: "#9D9D9D", marginLeft: "30px" }}
            >
              Dipublikasikan pada 1 Oktober 2023
            </h2>
          </Col>
          <div className="d-flex flex-column">
          <img
            src={ArtikelSindoroImage}
            alt="Sindoro"
            style={{
              width: "100%",
              height: "536px",
              borderRadius: "50px",
              marginTop: "20px",
            }}
            srcSet={ArtikelSindoroImage}
          />
          <Col>
            <h1
              style={{ fontSize: "15px", color: "#9D9D9D", marginTop: "30px" }}
            >
              Sumber foto
            </h1>
            <h2 style={{ fontSize: "16px", marginTop: "20px" }}>
              Gunung Sindoro yang juga dikenal dengan sebutan Gunung Sindara
              atau Sundoro merupakan salah satu gunung berapi yang masih dalam
              kondisi aktif dan terletak di Temanggung, Jawa Tengah. Dengan
              ketinggian mencapai 3.150 meter di atas permukaan laut, Sindoro
              menjadi pilihan yang menarik bagi para pendaki yang mencari
              tantangan. Selain menjadi favorit pendaki karena keindahan
              alamnya, gunung ini juga menyimpan misteri yang masih diakui oleh
              masyarakat sekitar. Di balik pesonanya, Gunung Sindoro
              menghadirkan aura misterius yang dipercayai oleh penduduk
              setempat.
            </h2>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Sejarah Dibalik Asal-Usul Penamaan Gunung Sindoro
            </h3>
            <h2 style={{ fontSize: "16px", marginTop: "10px" }}>
              Konon, legenda setempat menyebutkan hiduplah keluarga dengan dua
              anak kembar. Meski dilahirkan kembar, putra-putra tersebut
              memiliki karakter yang bertolak belakang 180 derajat. Salah
              satunya berkepribadian sopan, santun, dan bijaksana, sedangkan
              putra lainnya justru nakal dan suka membuat masalah. Semakin
              tumbuh dewasa, kedua anak tersebut selalu bertengkar hingga
              membuat ayahnya tak tahan lagi menahan amarah. Karena sudah di
              ambang batas kesabaran, sang ayah kemudian menghukum anaknya yang
              nakal hingga bibirnya robek atau sumbing. Sementara itu, anak
              lainnya disebut Sindoro yang berasal dari kata ndoro berarti
              memiliki kepribadian bijaksana dan santun. Hingga kini, kedua anak
              tersebut dikaitkan dengan Gunung Sindoro yang bersebelahan persis
              dengan Gunung Sumbing.
            </h2>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Bunga Edelweis Wangi Semerbak Karena Bidadari
            </h3>
            <h2 style={{ fontSize: "16px", marginTop: "10px" }}>
              Selain jin baik tersebut, Sindoro juga memiliki keistimewaan
              tersendiri dengan Bunga Edelweis yang disebut-sebut paling harum
              di antara semua gunung di Indonesia. Katanya sih karena gunung ini
              dijaga oleh bidadari sehingga mampu menjaga wangi Edelweis tetap
              semerbak hingga bertahun-tahun. Jadi makin penasaran untuk mencium
              langsung bunga abadi ini di Sindoro? Tapi jangan sampai dicabut
              dan merusak pemandangan natural yang indah, ya.
            </h2>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Misteri Adanya Kabut Hitam
            </h3>
            <h2 style={{ fontSize: "16px", marginTop: "10px" }}>
              Kalau biasanya daerah pegunungan diselimuti kabut putih, maka beda
              halnya dengan Gunung Sindoro. Memang hampir setiap hari kabut
              putih menyelimuti puncak dan badan Gunung Sindoro. Meski demikian,
              ada pula kabut hitam yang disebut dengan “pedhut”. Naasnya, kabut
              hitam yang sering muncul tiba-tiba di kawasan puncak gunung
              tersebut kerap menuntun pendaki ke jalan sesat. Jadi harus
              benar-benar waspada saat tiba-tiba berhadapan dengan kabut hitam,
              ya.
            </h2>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Misteri Adanya Jin Baik
            </h3>
            <h2 style={{ fontSize: "16px", marginTop: "10px" }}>
              Salah satu mitos paling sering dibicarakan tentang Gunung Sindoro
              adalah tempat yang dihuni oleh makhluk halus. Tapi jangan khawatir
              karena jin yang ada di sini dipercayai adalah jin baik. Karena
              itu, makhluk tak kasat mata ini pasti akan benci dengan pendaki
              yang suka melakukan perbuatan maksiat di kawasan gunung.
            </h2>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Sindoro adalah Pusat Energi Feminitas
            </h3>
            <h2 style={{ fontSize: "16px", marginTop: "10px" }}>
              Seperti Yin dan Yang, kompleks Gunung Sindoro dan Gunung Sumbing
              dipercaya merupakan pusat energi yang saling berlawanan. Sindoro
              disebut sebagai pusat energi feminitas, sebaliknya kembarannya
              merupakan pusat maskulinitas yang bersifat panas. Kehadiran kedua
              pusat energi ini diyakini berperan penting dalam menjaga
              keseimbangan alam tanah Pulau Jawa, lho.
            </h2>
            <h2 style={{ fontSize: "16px", marginTop: "20px" }}>
              Nah, itulah beberapa mitos dan misteri Gunung Sindoro. Meskipun
              hal tersebut hanya mitos dan belum jelas kebenarannya, hendaknya
              bagi para pendaki Gunung Sindoro untuk tetap menghormati
              kepercayaan penduduk sekitar dan tidak melanggarnya.
            </h2>
          </Col>
          </div>
        </Row>
        <hr
          style={{
            borderTop: "3px solid #B0B0B0",
            width: "1138px",
            margin: "20px 0",
            marginTop: "40px",
          }}
        />
        <Col>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "20px",
              color: "#000",
            }}
          >
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
  );
};

export default Layout;

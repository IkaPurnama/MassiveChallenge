
import { Container, Row, Col } from "react-bootstrap";
import Bgimage from "../../assets/images/bghome.png";
import React, {useState, useEffect} from "react";
import FooterComponent from "../../components/fragments/FooterComponent";
import bgmap from "../../assets/images/gambarhome/maphiking.png";
import imglogo from "../../assets/images/gambarhome/logo.png";
import imgfasilitas from "../../assets/images/gambarhome/imgfasilitas.png";
import imgmushola from "../../assets/images/gambarhome/musholaa.png";
import imgtoilet from "../../assets/images/gambarhome/toilett.png";
import imgwifiii from "../../assets/images/gambarhome/wifiiii.png";
import imgkebun from "../../assets/images/gambarhome/kebunsayur.png";
import imginap from "../../assets/images/gambarhome/tempatsinggah.png";
import imgminuman from "../../assets/images/gambarhome/drink.png";
import imgperhutani from"../../assets/images/gambarhome/perhutani.jpg"
import CarouselHomeTestimoni from "../../components/fragments/CarouselHomeTestimoni";
import CardartikelComponent from "../../components/fragments/CardartikelComponent";
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";


const Layout = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);

  const handleScroll = () => {
    const element1 = document.querySelector(".animate-in-1");
    const element2 = document.querySelector(".animate-in-2");
    const element3 = document.querySelector(".animate-in-3");
    const element4 = document.querySelector(".animate-in-4");
    const element5 = document.querySelector(".animate-in-5");

    if (element1) {
      const elementTop1 = element1.getBoundingClientRect().top;
      setIsVisible1(elementTop1 < window.innerHeight - 100);
    }
    if (element2) {
      const elementTop2 = element2.getBoundingClientRect().top;
      setIsVisible2(elementTop2 < window.innerHeight - 100);
    }
    if (element3) {
      const elementTop3 = element3.getBoundingClientRect().top;
      setIsVisible3(elementTop3 < window.innerHeight - 100);
    }
    if (element4) {
      const elementTop4 = element4.getBoundingClientRect().top;
      setIsVisible4(elementTop4 < window.innerHeight - 100);
    }
    if (element5) {
      const elementTop5 = element5.getBoundingClientRect().top;
      setIsVisible5(elementTop5 < window.innerHeight - 100);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  return (
    <div div className="Home">
      <div>
        <div className="h-vh-100" style={{ backgroundColor:"#D4DBD9" }}>
          <div
            className="bg-image"
            style={{
              backgroundImage: `url(${Bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              height: "100vh",
            }}
          >
            <NavbarstatisComponent />
            <Container className="hero d-flex justify-content-center align-items-center h-100 " fluid > 
              <Row className="my-auto gap-5  h-50 p-5">
                <Col className="text-white " md={6}>
                  <h1 className="fw-bold fs-4 "> GUNUNG SINDORO <span className="fw-bold fs-4" style={{ color:"#FFA323"}}> Ndoro Arum </span></h1>
                  <h4 className="fw-bold fs-1 mb-1">SPOT PENDAKIAN</h4>
                  <h1 className="fw-bold fs-4">Yang <span className="fw-bold fs-4" style={{ color:"#FFA323"}}>Indah</span> dan <span className="fw-bold fs-4" style={{ color:"#FFA323"}}>Nyaman</span></h1>
                  <p className="text-justify-start d-none mt-3 fs-6 d-sm-block">
                    Disinilah Petualangan sejati dimulai. Selamat datang di
                    portal ekslusif kami yang menggabungkan kekayaan budaya,
                    keindahan alam dan kenangan sejarah yang tak terlupakan
                    dalam satu perjalanan epik. 
                  </p>
                </Col>
                <Col>
                  <div className="row  row-cols-3 row-cols-md-3 g-3">
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

         <div>
          <div
                style={{ paddingTop: "50px", lineHeight: "4px" }}
                className=" arti text-center text-light"
                >
                <h1 className="mb-3 text-center fw-bold fs-2" style={{ color:"#1D312C"}}>
                Berita Terbaru Untuk Anda
                </h1>
                <p className="container mb-1 text-center justify-content-center  fs-6 d-flex" style={{ color:"#1D312C"}}>Kami menyediakan  artikel berita mengenai kegiatan dan informasi-informasi yang ada di puncak sindoro via ndoro arum.</p>
                </div>
                <div
                  className={`animate-in-1 ${
                    isVisible1 ? "show" : ""
                  } d-flex flex-row d-grid gap-3 justify-content-center`}
                  onClick={resetScroll}
                >
                  <CardartikelComponent/>
                  </div>
          </div>
          
          {/* Partner */}
        <section className="section-partner border-top text-white"  >
        <div
                  className={`animate-in-2 ${
                    isVisible2 ? "show" : ""
                  } d-flex flex-row d-grid gap-3 justify-content-center`}
                  onClick={resetScroll}
                >

        <div className="container-partner">
          <div className="row-partner">
          
            <div className="col-md-12 mb-4 text-center">
              <br />
              <h3 className="heading-partner fw-bold fs-4 mb-0">Kami Bekerja Sama Dengan Mitra Kami</h3>
              <p className="mt-2">Kami bekerja sama dengan beberapa mitra kami untuk menunjang prasarana basecamp kami</p>
            </div>
            
          </div>


          <div className="flex-partner">
         
            <div className="col-sm-4 col-md-2 text-center">
              {" "}
              <img src={imglogo} alt="Ventech Dazzlers" className="mt-2 rounded-5" style={{ height: "46px", width: "45px" }} />
              <p className="mb-2"> Ventech Dazzlers</p>
            </div>
            <div className="col-sm-4 col-md-2 text-center">
              {" "}
              <img src={imgperhutani} alt="Sindoro" className="mt-2 rounded-5" style={{ height: "46px", width: "45px" }} />
              <p className="mb-2">Perhutani</p>
            </div>
            <div className="col-sm-4 col-md-2 text-center">
              {" "}
              <img src="https://backpackerindonesia.com/media/node_image/indonesia1-770x513-01.jpeg" alt="Sindoro Aalang" className="mt-2 rounded-5" style={{ height: "46px", width: "45px" }} />
              <p className="mb-2">Sindoro</p>
            </div>
            </div>
            
        </div>
        </div>
      </section>

          {/* Maps Hiking */}
          <div className="map-hiking h-vh-100  " style={{ backgroundColor:"#D4DBD9" }}>
          <div
            className="bg-image mt-5 mb-5 "
            style={{
              backgroundImage: `url(${bgmap})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center ",
              height: "100vh",
            }}
          >
            </div>
          
          </div>

          {/* Fasilitas */}
         
        <section className="section-fasilitas border-top ">
          <div className="container flex-fasilitas">
            <div className="container-fasilitas">
              <div className="row-fasilitas">
                <div className="content-title col-md-12 mb-4 text-justify">
                  <h3 className="heading-partner fw-bold fs-2 mb-0">Fasilitas Yang Kami Sediakan</h3>
                  <h6 className="fs-6">Kami menyiapkan fasilitas yang menunjang kenyamanan pengunjung </h6>
                </div>
              </div>
             
              <div
                  className={`animate-in-3 ${
                    isVisible3 ? "show" : ""
                  } d-flex flex-row d-grid gap-3 justify-content-center`}
                  onClick={resetScroll}
                >
            
              <div className="fast">
                <div className="row-fasilitas1">
                  <div className="content-fasilitas1">
                    <div className=" content-fasilitas col-sm-4 col-md-2 text-center">
                      {" "}
                      <img  src={imgmushola} alt="musola" className=" gambar-fasilitas mt-4 mb-1" style={{ height: "60px", width: "60px"}} />
                      <p className="mt-2">Mushalla</p>
                    </div>
                    <div className=" content-fasilitas col-sm-4 col-md-2 text-center">
                      {" "}
                      <img src={imgminuman} alt="Minuman" className="gambar-fasilitas mt-4 mb-1" style={{ height: "60px", width: "60px" }} />
                      <p className="mt-2">Welcome drink</p>
                    </div>
                    <div className=" content-fasilitas col-sm-4 col-md-2 text-center">
                      {" "}
                      <img src={imgwifiii} alt="Wifi" className="gambar-fasilitas mt-4 mb-1" style={{ height: "60px", width: "60px" }} />
                      <p className="mt-2">Wifi</p>
                    </div>
                  </div>
                  <br></br>
                  <div className="content-fasilitas2">
                    <div className=" content-fasilitas col-sm-4 col-md-2 text-center">
                      {" "}
                      <img src={imginap} alt="Tempat Singgah" className="gambar-fasilitas mt-4 mb-1" style={{ height: "60px", width: "60px" }} />
                      <p className="mt-2">Tempat Singgah</p>
                    </div>
                    <div className=" content-fasilitas col-sm-4 col-md-2 text-center">
                      {" "}
                      <img src={imgtoilet} alt="Toilet" className="gambar-fasilitas mt-4 mb-1" style={{ height: "60px", width: "60px" }} />
                      <p className="mt-2">Toilet</p>
                    </div>
                    <div className=" content-fasilitas col-sm-4 col-md-2 text-center">
                      {" "}
                      <img src={imgkebun} alt="Kebun" className="gambar-fasilitas mt-4 mb-1" style={{ height: "60px", width: "60px" }} />
                      <p className="mt-2">Kebun Sayur</p>
                    </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            <div className="fasilitas-image">
              <div className="image-fasilitas">
                <img src={imgfasilitas} className="images-fasilitas mt-2" style={{ height: "420px", width: "330px" }} />
              </div>
            </div>
          </div>
        </section>
       
       
        {/* Ulasan */}
         <div>
          <div
                style={{ paddingTop: "50px", lineHeight: "4px" }}
                className="text-center text-light"
              >
                <h1 className="mb-3 text-center fw-bold fs-2" style={{ color:"#1D312C"}}>
                  Apa Yang Pendaki Katakan
                </h1>
                <p className="mb-3 text-center  fs-6" style={{ color:"#1D312C"}}>Ulasan para pendaki jalur Ndoro Arum yang dapat anda lihat untuk </p>
                </div>
                
                  <CarouselHomeTestimoni/>
               
                 
          </div>

        
        </div>
       
        <FooterComponent/>
      </div>
    </div>
  );
};

export default Layout;
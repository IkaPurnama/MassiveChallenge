import React from 'react'
import "bootstrap/js/src/modal";
import { Container, Row, Col } from "react-bootstrap";
import BgGaleri from "../../assets/images/gambarGaleri/bg_galeri.png";
import Galeri1 from "../../assets/images/gambarGaleri/galeri1.png";
import Galeri2 from "../../assets/images/gambarGaleri/galeri2.png";
import Galeri3 from "../../assets/images/gambarGaleri/galeri3.png";
import Galeri4 from "../../assets/images/gambarGaleri/galeri4.png";
import Galeri5 from "../../assets/images/gambarGaleri/galeri5.png";
import Galeri6 from "../../assets/images/gambarGaleri/galeri6.png";
import Galeri7 from "../../assets/images/gambarGaleri/galeri7.png";
import Galeri8 from "../../assets/images/gambarGaleri/galeri8.png";
import Galeri9 from "../../assets/images/gambarGaleri/galeri9.png";
import Galeri10 from "../../assets/images/gambarGaleri/galeri10.png";
import Galeri11 from "../../assets/images/gambarGaleri/galeri11.png";
import Galeri12 from "../../assets/images/gambarGaleri/galeri12.png";
import NavbarGaleri from '../../components/fragments/NavbarGaleri';
import NavbarstatisComponent from '../../components/fragments/NavbarstatisComponent';
import FooterComponent from '../../components/fragments/FooterComponent';

export default function Layout() {
  return (
    <>
    <NavbarstatisComponent/>
    <div className="galeri">
      <div>
        <div className="hero-galeri min-vh-100 w-100"
        style={{
          backgroundImage: `url(${BgGaleri})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "100vh",
          paddingTop: "230px",
        }}
        >
          <div className='carousel-overlay'>
          
              <div className='text-center'>
                <h1 className='tagline text-white fs-1 fw-bold'>GALERI GUNUNG <span style={{ color:"#FFA323"}}>SINDORO</span></h1>
                <p className='text-white text-white mb-0'
                style={{
                  fontSize: "20px",
                }}
                >Berbagai keindahan Gunung Sindoro ada disini</p>
                <p className='text-white text-white'
                style={{
                  fontSize: "17px",
                }}
                >
                <b>Puncak Sindoro</b>. 3153 MDPL</p>
              </div>
          </div>
        </div>
      </div>
       <div className="text-center justify-content-center"
        style={{
          paddingBottom: "50px"
        }}
        >
          <h2 className="text-center fs-2 fw-bold"
          style={{
              marginTop: "30px",
              color: "#1D312C",
              fontSize: "30px",
          }}>
            Keindahan Ndoro Arum
          </h2>
          <div className="d-flex align-items-center justify-content-center mt-3">
          <NavbarGaleri/>
          </div>
        </div>

        <div className='min-vh-100 d-flex align-items-center'
        style={{
          paddingBottom: "80px"
        }}
        >
          <Container>
            <Row className='row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-3'>
              <Col>
              <div style={{ position: "relative", height: "362px", }}>
  <img
    src={Galeri1}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample1'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p  style={{ margin: 0 }}>Gunung Sindoro 3153 MDPL</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://www.instagram.com/p/CzWOO2vRPoU/?igshid=MjJkMmIyYzQxYw==">hildayatussaibah</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample1' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri1} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div style={{ position: "relative", height: "447px", }}>
  <img
    src={Galeri2}
    alt='Gambar2'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample2'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>TJ. Mertua Galak</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://www.instagram.com/p/Cxose-ZPzXX/?igshid=MjJkMmIyYzQxYw==">sindoroviandoroarum</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample2' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri2} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "362px", }}>
  <img
    src={Galeri7}
    alt='Gambar3'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample3'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Sindoro Ndoro Arum</p>
    
    <p style={{ margin: 0 }}>src: <span><a href="https://id.images.search.yahoo.com/search/images;_ylt=AwrKEiLjl31lEQInm23LQwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=gunung+sindoro+ndoro+arum&fr2=piv-web&type=E210ID91215G0&fr=mcafee#id=14&iurl=https%3A%2F%2Fcdn.idntimes.com%2Fcontent-images%2Fcommunity%2F2021%2F04%2F117795420-169503931348420-5059255721643243585-n-07a4f29dba4b014075e472810bb49bf0-13b6d23bcb8de2d437cb990da3fdf9de.jpg&action=click">www.idntimes.com</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample3' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri7} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "436px", }}>
  <img
    src={Galeri8}
    alt='Gambar4'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample4'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Puncak Sindoro</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://images.app.goo.gl/ydZwUJHjMtMoXwnF9">Muhammad Dagri Nizar</a></span></p>
  </div>
</div>
                <div className='modal fade' id='imageExample4' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri8} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "439px", marginTop: "-85px"}}>
  <img
    src={Galeri3}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample5'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>

    <p style={{ margin: 0 }}>TJ. Mertua Galak</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://www.instagram.com/p/CxaUBVBPY4j/?igshid=MjJkMmIyYzQxYw==">sindoroviandoroarum</a></span></p>

 
  </div>
</div>

                <div className='modal fade' id='imageExample5' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri3} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "272px", }}>
  <img
    src={Galeri4}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample6'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Basecamp</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://www.instagram.com/p/Cvrj_dzv8hc/?igshid=MjJkMmIyYzQxYw==">sindoroviandoroarum</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample6' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri4} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "439px", marginTop: "-83px"}}>
  <img
    src={Galeri9}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample9'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Puncak Sindoro</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://id.images.search.yahoo.com/search/images;_ylt=AwrKEiLjl31lEQInm23LQwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=gunung+sindoro+ndoro+arum&fr2=piv-web&type=E210ID91215G0&fr=mcafee#id=14&iurl=https%3A%2F%2Fcdn.idntimes.com%2Fcontent-images%2Fcommunity%2F2021%2F04%2F117795420-169503931348420-5059255721643243585-n-07a4f29dba4b014075e472810bb49bf0-13b6d23bcb8de2d437cb990da3fdf9de.jpg&action=click">SindoroArum</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample9' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri9} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div style={{ position: "relative", height: "294px", marginTop: "-10px"}}>
  <img
    src={Galeri10}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample10'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Puncak Sindoro</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://asset.kompas.com/crop/0x0:780x520/750x500/data/photo/2019/07/03/2356409690.jpg">asset.kompas.com</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample10' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri10} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "358px", }}>
  <img
    src={Galeri5}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample11'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
        <p style={{ margin: 0 }}>Sindoro Arum</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://www.instagram.com/p/CuqozCzLWWK/?igshid=MjJkMmIyYzQxYw==">sindoroviandoroarum</a></span></p>
     </div>
</div>

                <div className='modal fade' id='imageExample11' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri5} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "444px", marginTop:"-83px" }}>
  <img
    src={Galeri6}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample12'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Sindoro</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://www.instagram.com/p/CwhHYEhLJU_/?igshid=MjJkMmIyYzQxYw==">sindoroviandoroarum</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample12' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri6} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "362px", }}>
  <img
    src={Galeri11}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample13'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Gunung Sindoro</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://images.app.goo.gl/Np2C4qh15FQb5ccH9">Tribunnewswiki.com</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample13' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri11} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
              <div style={{ position: "relative", height: "429px", marginTop:"-71px" }}>
  <img
    src={Galeri12}
    alt='Gambar1'
    data-bs-toggle='modal'
    className='w-100 cursor-pointer'
    data-bs-target='#imageExample14'
    style={{
      height: "100%",
    }}
  />
  <div style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Ganti warna latar belakang sesuai kebutuhan
    padding: "10px",
    boxSizing: "border-box",
    textAlign: "center",
  }}>
    <p style={{ margin: 0 }}>Gunung Sindoro</p>
    <p style={{ margin: 0 }}>src: <span><a href="https://images.app.goo.gl/goQH2VFMemMXrKGF7">Gunung Bagging</a></span></p>
  </div>
</div>

                <div className='modal fade' id='imageExample14' tabIndex={-1} aria-hidden='true'>
                  <div className='modal-dialog modal-sm'>
                    <div className='modal-content'>
                      <div className='modal-body'>
                        <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        <img src={Galeri12} className='d-block w-100' />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              </Row>
          </Container>
        </div>
    </div>
    <FooterComponent/>
</>
)
}
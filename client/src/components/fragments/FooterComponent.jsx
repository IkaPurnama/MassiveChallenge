
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gmbrhp from "../../assets/images/gambarFooter/iconhp.png";
import Gmbremail from "../../assets/images/gambarFooter/iconemail.png";
import Gmbrtiktok from "../../assets/images/gambarFooter/icontiktok.png";
import Gmbrfb from "../../assets/images/gambarFooter/iconfb.png";
import Gmbrig from "../../assets/images/gambarFooter/iconig.png";
import Gmbrtwiter from "../../assets/images/gambarFooter/icontwiter.png";
import Gmbmaps from "../../assets/images/maps.png";
import Gmblogo from "/public/ndoroarum.png"
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div>
      <footer className="footer ">
        <Container>
          <Row>
            <Col md={3}>
              <div>
                <h3 className="mt-3 fw-bold">NDORO ARUM</h3>
                <img
                  src={Gmblogo}
                  className=" logofooter img-fluid"
                  alt="Gambar Wisata"
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <h5 className="fw-bold">Tentang Kami</h5>
                <p>
                  Kami ingin para wisatawan yang ingin berkunjung di Sindoro via Banaran mendapatkan pengalaman berwisata yang menyenangkan dan
                  tidak terlupakan
                </p>
              </div>
              <div>
                <h5 className="fw-bold">Kontak Kami</h5>
                <div className="kontak">
                  <div className="d-flex gap-2">
                    <Link to="about">
                      <img src={Gmbrhp} alt="logo hp" />
                    </Link>
                    <p>0210-1234567</p>
                  </div>
                  <div className="d-flex gap-2">
                    <Link to="/about">
                      <img src={Gmbremail} alt="logo email" />
                    </Link>
                    <p>ndoroarum@gmail.com</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col  className="sosmed" md={2}>
              <div className="informasi lh-sm">
                <h5 className="fw-bold">Informasi</h5>

                <Link to="/artikel">
                  <p>Artikel</p>
                </Link>
                <Link to="/about">
                  <p>Tentang kami</p>
                </Link>
              </div>
              <div>
                <h5 className="fw-bold">Ikuti Kami</h5>
                <div className="ikutikami">
                  <Link to="http://www.tiktok.com/@tech.titans30">
                    <img src={Gmbrtiktok} alt="Ndoro Arum"/>
                  </Link>
                  <Link to="https://www.facebook.com/profile.php?id=61552141313707&mibextid=ZbWKwL">
                    <img src={Gmbrfb} alt="" />
                  </Link>
                  <Link to="https://instagram.com/titans4741?igshid=MzRlODBiNWFlZA==">
                    <img src={Gmbrig} alt="Ndoro Arum" />
                  </Link>
                  <Link to="">
                    <img src={Gmbrtwiter} alt="Ndoro Arum"  />
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <h5 className="fw-bold text-center">Lokasi</h5>
              <iframe width="100%" height="200" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" img-fluid="true" style={{borderRadius:"5px"}}
              src="https://maps.google.com/maps?width=327&amp;height=206&amp;hl=en&amp;q=Banaran,%20Kayugiyang,%20Kec.%20Garung,%20Kabupaten%20Wonosobo,%20Jawa%20Tengah%2056353+(Sindoro%20Via%20Ndoro%20Arum)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.maps.ie/population/"></a>
                </iframe>
            </Col>
          </Row>
        </Container>
        <div className="text-center mt-4 ">
          Copyright &copy; 2023 Ventech Dazzlers.{" "}
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
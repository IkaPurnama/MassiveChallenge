import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Imguser from "../../../public/user.png";
import Imgbrand from "../../../public/ndoroarum.png";
import LogoutPopupComponent from "../fragments/LogoutPopupComponent";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavbarstatisComponent = () => {

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    // For now, let's just close the pop-up
    setShowLogoutPopup(false);
  };

  return (
    <div>
    <Navbar
      className="Nav"
      style={{backgroundColor:"#1D312C"}}
      expand="lg"
      fixed="top"
    >
      <Container>
      <Nav className="ms-auto">
        <div className="d-flex justify-content-start w-100">
        <img
              src={Imgbrand}
              alt="Ndoro Arum"
              className="mt-6"
              style={{ height: "48px", width: "46px", marginRight:"15px"}}
            />
          <Navbar.Brand  className="mt-6" style={{ color: "white" }}>
            NDORO ARUM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        </Nav>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className="d-flex " >
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                style={{ color: "white", marginRight: "25px" }}
                
              >
                Beranda
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                style={{ color: "white", marginRight: "25px" }}
                
              >
              Tentang
              </Nav.Link>
            </Nav.Item>
            <NavDropdown
              id="konten-dropdown"
              title="Konten"
              menuVariant="white"
              style={{ marginRight: "25px" }}
            >
              <NavDropdown.Item as={Link} to="/artikel">
                Artikel
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/galeri">
                Galeri
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown
              id="Pesantiket-dropdown"
              title="Pesan Tiket"
              menuVariant="white"
              style={{ marginRight: "25px" }}
            >
              <NavDropdown.Item as={Link} to="/panduan">
                Syarat Pendakian
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/booking">
                Online Booking
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ulasan"
                style={{ color: "white", marginRight: "25px" }}
                
              >
                Ulasan
              </Nav.Link>
            </Nav.Item>
            </div>
            
          </Nav>
          <Nav className="ms-auto">
          <img
              src={Imguser}
              alt="Ujang"
              className="align-self-center"
              style={{ height: "24px", width: "23px" }}
            />
            <NavDropdown id="user-dropdown" title="juyeon" menuVariant="white">
              <NavDropdown.Item as={Link} to="/akun">
                Akun saya
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/riwayat1">
                Riwayat Pesanan
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setShowLogoutPopup(true)}>
                Keluar
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <LogoutPopupComponent
    show={showLogoutPopup}
    handleClose={() => setShowLogoutPopup(false)}
    handleLogout={handleLogout}
  />
    </div>
  );
};

export default NavbarstatisComponent;
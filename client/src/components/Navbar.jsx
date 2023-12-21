import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Imguser from "./aldiuser.png";
import Imgbrand from "./ndoroarum.png";
import { useClient } from "./client";

const NavbarComponent = () => {

  const client = useClient()
  return (
    <Navbar
      className={`Nav bg-green`}
      expand="lg"
      fixed="top"
    >
      <Container>
        <div className="d-flex justify-content-start w-100">
        <img
              src={Imgbrand}
              alt="Ndoro Arum"
              className="mt-6"
              style={{ height: "48px", width: "46px", marginRight:"15px"}}
            />
          <Navbar.Brand  className="mt-6" style={{ color: "white"}}>  
            NDORO ARUM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/user"
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
              TentangKami
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
              <NavDropdown.Item as={Link} to="/pesan">
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
            <img
              src={Imguser}
              alt="Dharma"
              className="align-self-center"
              style={{ height: "24px", width: "23px" }}
            />
            <NavDropdown id="user-dropdown" title="rara" menuVariant="white">
              <NavDropdown.Item as={Link} to="/akun">
                Akun saya
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/riwayat">
                Riwayat Pesanan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" onClick={() => client.logout()}>
                {/* <Link to="#" onClick={() => client.logout()}>Logout</Link> */}
                Keluar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;


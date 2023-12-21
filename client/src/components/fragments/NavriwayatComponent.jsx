import React from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavriwayatComponent = () => {
  return (
    <div>
 <Container className='custom-bg h-vh-100'>
    <div>
      <span className='border-bottom fw-bold ps-2 ms-1'>Riwayat Pemesanan</span><br/>
      <span style={{ border: '1.4px solid #d5d5d5', display: 'flex', width: '100%', backgroundColor: '#000', height: '.3rem', margin: ' 2px 0' }}></span>
    <Navbar
      className='nav'
      expand="lg"
    //   fixed="top"
    >
      <Container className='h-vh-100'>
     
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className=" navriwayat shadow mb-1  ml-auto">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/tunggu"
                style={{ color: "white", marginRight: "70px", marginLeft: "80px" }}
              >
                Menunggu Konfirmasi
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/selesai"
                style={{ color: "white", marginRight: "70px", marginLeft: "70px" }}
              >
                Selesai
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </Container>
    </div>
  )
}

export default NavriwayatComponent
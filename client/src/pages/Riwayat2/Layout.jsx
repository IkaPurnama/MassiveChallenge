import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import FooterComponent from '../../components/fragments/FooterComponent';
import { NavLink } from 'react-router-dom';
import RiwayatImg from "../../assets/images/riwayat.png";
import "../../dist/css/panduan.css"
import NavbarstatisComponent from '../../components/fragments/NavbarstatisComponent';

const Layout = () => {
  return (
    <>
      <div
        className='riwayat-container justify-content-center align-items-center'
        style={{
          backgroundColor: '#F3F3F3',
          paddingTop: '100px',
        }}
      >
        <NavbarstatisComponent />
        <Container>
          <Row className="justify-content-center">
            <div style={{ textAlign: 'left' }}>
              <h2
                style={{
                  fontWeight: '600',
                  fontSize: '24px',
                  marginBottom: '0px',
                }}
              >
                Riwayat Pemesanan
              </h2>
              <div
                style={{
                  borderBottom: '2px solid black',
                  width: '100%',
                  marginBottom: '30px',
                }}
              ></div>
            </div>
          </Row>
          <Row>
            <Table
              style={{
                textAlign: 'center',
                fontSize: '16px',
                width: '50%',
                margin: '0 auto',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      fontSize: '16px',
                      textAlign: 'center',
                      backgroundColor: '#1D312C',
                      color: '#FFFFFF',
                      fontWeight: 'normal',
                      border: 'none',
                    }}
                  >
                    <NavLink
                    // MASUKKAN LINK PAGE INI //
                      to="/riwayat2"
                      className="nav-link"
                      activeClassName="active"
                    >
                      Menunggu Konfirmasi
                    </NavLink>
                  </th>
                  <th
                    style={{
                      fontSize: '16px',
                      textAlign: 'center',
                      paddingLeft: '100px',
                      backgroundColor: '#1D312C',
                      color: '#FFFFFF',
                      fontWeight: 'normal',
                      border: 'none',
                    }}
                  >
                    <NavLink
                    // MASUKKAN LINK SELESAI //
                      to="/riwayat3"
                      className="nav-link"
                    >
                      Selesai
                    </NavLink>
                  </th>
                  <th
                    style={{
                      fontSize: '16px',
                      textAlign: 'center',
                      paddingLeft: '100px',
                      backgroundColor: '#1D312C',
                      color: '#FFFFFF',
                      fontWeight: 'normal',
                      border: 'none',
                    }}
                  >
                    <NavLink
                    // MASUKKAN LINK SELESAI //
                      to="/riwayat6"
                      className="nav-link"
                    >
                      Ditolak
                    </NavLink>
                  </th>
                </tr>
              </thead>
            </Table>
          </Row>
          <Row className="justify-content-center">
            <h2 style={{
              fontSize: "33px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "100px",
            }}
            >Terima Kasih!</h2>
            <p style={{
              fontSize: "20px",
              textAlign: "center",
              marginTop: "20px",
            }}
            >Pendaftaran Anda Sedang Kami Proses.<br/> Menunggu Admin Untuk Menyetujui Pendaftaran.</p>
            <img src={RiwayatImg} alt="Konfirmasi" className="image-konfirmasi" 
            style={{
              width: '577px',
              height: '434px',
              marginTop: '0px',
              marginBottom: '200px',
            }}
            />
          </Row>
        </Container>
      </div>
      <FooterComponent />
    </>
  );
}

export default Layout;
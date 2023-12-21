import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FooterComponent from '../../components/fragments/FooterComponent';
import "../../dist/css/panduan.css"
import NavbarstatisComponent from '../../components/fragments/NavbarstatisComponent';

const Layout = () => {
  return (
    <>
      <div
        className='d-flex flex-column min-vh-100'
        style={{
          backgroundColor: '#F3F3F3',
        }}
      >
        <NavbarstatisComponent />
        <Container
          className='riwayat-pesan p-4 gap-3 bg-white h-100'
          style={{
            marginTop: '100px',
            marginBottom: '100px',
          }}
        >
          <Row className='align-items-center'>
            <Link
              to="/riwayat4"
              className="text-decoration-none"
              style={{
                fontWeight: '500',
                fontSize: '25px',
                textAlign: 'left',
                color: 'black',
              }}
            >
              <BsArrowLeft size={24} style={{ marginRight: '10px' }} />
              Pendaftaran Diterima
            </Link>
          </Row>
          <div
            style={{
              borderBottom: '1px solid black',
              width: '100%',
              marginBottom: '30px',
            }}
          >
          </div>
          <Row className="justify-content-center">
            <div>
              <h2
                style={{
                  fontWeight: 'bold',
                  fontSize: '27px',
                  marginBottom: '25px',
                  textAlign: 'center',
                }}
              >
                Registrasi Anda Diterima
              </h2>
            </div>
            <Table className="mx-auto w-50">
              <tbody>
                <tr class>
                  <td style={{ textAlign: 'left', border: 'none' }}>Tanggal Pendakian:</td>
                  <td style={{ textAlign: 'right', border: 'none'  }}>21/12/2023 - 23/12/2023</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', border: 'none'  }}>ID Pemesanan:</td>
                  <td style={{ textAlign: 'right', border: 'none'  }}>2011235</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', border: 'none'  }}>Jumlah Pendaki:</td>
                  <td style={{ textAlign: 'right', border: 'none'  }}>x2</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', border: 'none'  }}>Harga Tiket:</td>
                  <td style={{ textAlign: 'right', border: 'none'  }}>Rp25000</td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', border: 'none'  }}>Parkir:</td>
                  <td style={{ textAlign: 'right', border: 'none'  }}>Rp20000</td>
                </tr>
                <tr>
                  <td colSpan="2" style={{ borderBottom: '2px solid black'}}></td>
                </tr>
                <tr>
                  <td style={{ textAlign: 'left', fontWeight: 'bold', border: 'none'  }}>Total Pembayaran:</td>
                  <td style={{ textAlign: 'right', fontWeight: 'bold', border: 'none' }}>Rp45000</td>
                </tr>
              </tbody>
            </Table>
            <Row className="justify-content-center">
              <Col className="text-center">
                <p style={{
                  fontSize: "15px",
                  textAlign: "center",
                  marginTop: "20px",
                }}
                >
                  Silahkan lanjutkan pembayaran anda melalui nomor rekening yang<br/> telah disediakan, cek email anda untuk melihat rincian pembayaran<br/>serta nomor rekening tujuan. 
                </p>
                {/* LINK PAGE BUTTON SELESAI YANG DITUJU */}
                <Link to="/riwayat4">    
                <Button variant="success"
                style={{
                  backgroundColor: '#1D312C',
                  fontSize: '13px',
                  width: '160px',
                  height: '36px',
                  borderRadius: '30px',
                  boxShadow: '0px 5px 10px rgba(20, 30, 25, 0.5)',
                  marginTop: '20px',
                  marginBottom: '50px'
                }}
                >
                  Selesai
                </Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;

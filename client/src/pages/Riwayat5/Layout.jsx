import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import ImgKtp1 from "../../assets/images/riwayat/ktp4.jpg";
import ImgKtp3 from "../../assets/images/riwayat/ktp2.jpg";
import { FaChevronLeft } from 'react-icons/fa';
import NavbarstatisComponent from '../../components/fragments/NavbarstatisComponent';
import FooterComponent from '../../components/fragments/FooterComponent';

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
              <FaChevronLeft size={18} style={{ marginRight: '10px' }} />
              Rincian Pesanan
            </Link>
          </Row>
          <div
            style={{
              borderBottom: '1px solid black',
              width: '100%',
              marginBottom: '20px',
            }}
          >
          </div>
          <div className='align-items-center'
          style={{
            fontWeight: '500',
            fontSize: '20px',
            textAlign: 'left',
            color: 'black',
            marginLeft: '34px'
          }}
          >Id Pesanan:  2011235
          </div>
          <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Ketua Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Lee Juyeon"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Tanggal Lahir</Form.Label>
                <Form.Control plaintext readOnly defaultValue="15/01/1998" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Laki-laki" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="0895410194415" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Naik</Form.Label>
                <Form.Control plaintext readOnly defaultValue="21/12/2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081313145500" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tanggal Turun</Form.Label>
                <Form.Control plaintext readOnly defaultValue="23/12/2023" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control plaintext readOnly defaultValue="juyeon@gmail.com" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nomor Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="20171206150198" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Darmawangsa X No. 86, Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px' }}>
                <img
                  src={ImgKtp1}
                  alt="Foto KTP"
                  style={{
                    border: '0.2px solid black',
                    backgroundColor: '#DFDFDF',
                    borderRadius: '5px',
                    padding: '5px',
                    maxWidth: '45%',
                    height: 'auto',
                    marginRight: '10px', 
                  }}
                />
              </div>
            </Form.Group>
          </Form>
          </Container>
          <Container className='p-4 gap-3 h-100' 
          style={{
            marginTop: '20px',
            marginBottom: '50px',
            backgroundColor: '#F7F7F7',
            border: '0.2px solid black',
            borderRadius: '20px',
            maxWidth: '1000px'
          }}>
            <div className='align-items-center'
            style={{
              fontWeight: 'bold',
              fontSize: '17px',
              textAlign: 'center',
              color: 'black',
              marginBottom: '20px'
            }}
            >
              Anggota Rombongan
            </div>
            <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPlaintextEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control plaintext readOnly defaultValue="Mark Lee"
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081360897756" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Jenis Identitas</Form.Label>
                <Form.Control plaintext readOnly defaultValue="KTP" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>No. Hp Keluarga</Form.Label>
                <Form.Control plaintext readOnly defaultValue="081322331121" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Alamat</Form.Label>
              <Form.Control plaintext readOnly defaultValue="Jl. Penatapan No. 99, Madiun Surabaya" 
                style={{ border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '5px', padding: '5px' }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Foto KTP</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center",border: '0.2px solid black', backgroundColor: '#DFDFDF', borderRadius: '10px', padding: '5px', marginBottom: '10px' }}>
                <img
                  src={ImgKtp3}
                  alt="Foto KTP"
                  style={{
                    border: '0.2px solid black',
                    backgroundColor: '#DFDFDF',
                    borderRadius: '5px',
                    padding: '5px',
                    maxWidth: '45%',
                    height: 'auto',
                    marginRight: '10px', 
                  }}
                />
              </div>
            </Form.Group>
          </Form>
          </Container>
        </Container>
        <FooterComponent />
      </div>
    </>
  );
};

export default Layout;




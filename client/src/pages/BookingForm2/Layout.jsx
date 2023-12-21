
import React, { useState } from "react";
import FooterComponent from "../../components/fragments/FooterComponent";
import { Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../dist/css/booking.css";
import BookingFormSvg from "../../assets/svg/bookingform.svg";
import BookingForm2Svg from "../../assets/svg/bookingform2.svg";
import { Link } from 'react-router-dom';
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";


const Layout = () => {
  const [numberOfForms, setNumberOfForms] = useState(1);

  const renderForms = () => {
    const forms = [];
    for (let i = 0; i < numberOfForms; i++) {
      forms.push(
        <Container key={i} className="booking-container2">
        <div className="center-text">
          <p className="booking-header fs-4">Anggota</p>
        </div>
        <Form>
          <Form.Group as={Row} controlId="form">
            <Col>
              <Form.Label className="fs-6 ">Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
            <Col>
            <Form.Label className="fs-6 ">No Hp</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="form">
          <Col>        
              <Form.Label className="fs-6 ">Jenis Identitas</Form.Label>
              <Form.Select
                className="booking-input custom-dropdown fs-6"
                aria-label="Pilih Jenis Identitas"
              >
                <option value="">Pilih Jenis Identitas</option>
                <option value="KTP">KTP</option>
                <option value="SIM">SIM</option>
                <option value="Kartu Pelajar">Kartu Pelajar</option>
              </Form.Select>
              </Col>  
            <Col>
            <Form.Label className="fs-6 ">No Hp Keluarga</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input"
              />
            </Col>
          </Form.Group>
          
          <Col>
          <Form.Group as={Row} controlId="formAddress">
            <Col>
              <Form.Label className="fs-6 ">Alamat</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="booking-input custom-address-input"  // Add a new class for specific styles
              />
            </Col>
          </Form.Group>
          <Form.Label className="fs-6 ">Unggah Kartu Identitas</Form.Label>
          
         <div className="col-12">
          
          <input
            className="form-control form-control-lg fs-6"
            type="file"
          /></div>
          </Col>
        </Form>
      </Container>
      );
    }
    return forms;
  };

  const handleAddForm = () => {
    setNumberOfForms(numberOfForms + 1);
  };
  const handledelForm = () => {
    setNumberOfForms(numberOfForms - 1);
  };

  return (
    <div>
    <div style={{ backgroundColor: '#F3F3F3' }}>
        <NavbarstatisComponent/>

<div className=""
>
      <Container className="booking-svg-container"
      style={{
        marginTop: '90px',
        marginBottom: '40px',
        paddingTop:"30px",
        // backgroundColor:"black",
       
      }}>
        <div className="svg-wrapper pt-4" >
          <img src={BookingFormSvg} alt="Booking SVG" />
          <p>Ketua</p>
        </div>
        <div className="line-divider "></div>
        <div className="svg-wrapper pt-4">
          <img src={BookingFormSvg} alt="BookingForm SVG" />
          <p>Anggota</p>
        </div>
        <div className="line-divider "></div>
        <div className="svg-wrapper pt-4">
          <img src={BookingForm2Svg} alt="BookingForm2 SVG" />
          <p>Selesai</p>
        </div>
      </Container>

      
    <Container className=""
     style={{
        marginBottom: '100px',
       
      }}
    >
      {renderForms()}
      <div className="custom-button-container gap-4">
        <button className="custom-button" onClick={handleAddForm}>+</button>
        <button className="custom-button" onClick={handledelForm}>-</button>
      </div>
      <div className="notice-text">
        <p>* selesaikan dulu formulir keseluruhan anggota</p>
      </div>
      <div className="action-buttons">
        <Link to="/bookingform" className="custom-popup-batal-button">Kembali</Link>
        <Link to="/bookingform3" className="custom-action-button">Selanjutnya</Link>
      </div>
      </Container>

      <FooterComponent />
      </div>
    </div>
    </div>
  );
};

export default Layout;
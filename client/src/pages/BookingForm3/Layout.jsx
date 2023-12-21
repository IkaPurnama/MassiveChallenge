import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../dist/css/booking.css";
import BookingFormSvg from "../../assets/svg/bookingform.svg";
import { Link } from 'react-router-dom';
import FooterComponent from "../../components/fragments/FooterComponent";
import BookingPopup from '../../components/fragments/BookingPopupComponent';
import NavbarstatisComponent from '../../components/fragments/NavbarstatisComponent';

const BookingForm3Pages = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupShow = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);
  return (
    <div>
    <div style={{ backgroundColor: '#F3F3F3' }}>
      <NavbarstatisComponent/>

      <Container className="booking-svg-container"
      style={{
        marginTop: '90px',
        marginBottom: '40px',
        paddingTop:"30px",
       
      }}>
        <div className="svg-wrapper">
          <img src={BookingFormSvg} alt="Booking SVG" />
          <p>Ketua</p>
        </div>
        <div className="line-divider"></div>
        <div className="svg-wrapper">
          <img src={BookingFormSvg} alt="BookingForm SVG" />
          <p>Anggota</p>
        </div>
        <div className="line-divider"></div>
        <div className="svg-wrapper">
          <img src={BookingFormSvg} alt="BookingForm SVG" />
          <p>Selesai</p>
        </div>
      </Container>

      <Container>
        <h1 className="message-text">Data pendaftaran anda telah lengkap!</h1>
        <h2 className="additional-text">Pesan tiket anda sekarang</h2>

        <div className="action-buttons2 pt-4">
        <Link to="/bookingform2" className="custom-popup-batal-button">Kembali</Link>
        {/* </div>
        <div className="center-button"> */}
          <btn className="custom-action-button"  onClick={handlePopupShow}>
            Pesan Tiket
          </btn>
        </div>
      </Container>
      <BookingPopup show={showPopup} handleClose={handlePopupClose} />

      <FooterComponent />
    </div>
    </div>
  );
};

export default BookingForm3Pages;
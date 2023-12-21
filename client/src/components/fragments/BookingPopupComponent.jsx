import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../../dist/css/booking.css";
import bookingpopup from "../../assets/images/gambarBooking/bookingpopup.png";
import { Link } from 'react-router-dom';

const BookingPopup = ({ show, handleClose }) => {
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const handlePesanClick = () => {
    setShowSecondPopup(true);
  };

  const handleCloseSecondPopup = () => {
    setShowSecondPopup(false);
    handleClose();// Menutup popup pertama saat popup kedua ditutup
  };
 
 

  return (
    <>
      <Modal show={show} onHide={handleClose} centered className="custom-modal ">
        <Modal.Body className='custom-modals'>
          <div className="custom-popup-header">
            <img src={bookingpopup} alt="Booking Popup" />
          </div>
          <div className="custom-popup-text ">
            <p>Pesan Tiket</p>
          </div>
          <div className="custom-popup-additional-text">
            <p>Apakah anda sudah yakin untuk memesan tiket? Silahkan periksa kembali data anda</p>
          </div>
          <div className="action-buttonss">
            <btn className="custom-popup-batal-button" onClick={handleClose}>Batal</btn>
            <btn  className="custom-popup-pesan-button" onClick={handlePesanClick}>
              Pesan
            </btn>
          </div>
        </Modal.Body>
      </Modal>

      {showSecondPopup && (
        <Modal show={showSecondPopup} onHide={handleCloseSecondPopup} centered className="custom-modal">
          <Modal.Body>
          <div className="custom-popup-close-button" onClick={handleCloseSecondPopup}>
            <span>&times;</span>
          </div>
          <div className="custom-popup-header">
            <img src={bookingpopup} alt="Booking Popup" />
          </div>
          <div className="custom-popup-text">
            <p>Terimakasih</p>
          </div>
          <div className="custom-popup-additional-text">
            <p>Pendaftaran anda sedang kami proses</p>
            <p>Info lebih lanjut silahkan cek riwayat pendaftaran anda</p>
          </div>
          <Link to="/riwayat2">
          <div className="custom-popup-riwayat-button">
            <span className="custom-popup-button-text">Lihat Riwayat</span>
          </div>
          </Link>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default BookingPopup;
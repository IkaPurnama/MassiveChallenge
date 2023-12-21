import React from "react";

import FooterComponent from "../../components/fragments/FooterComponent";
import bgbooking from "../../assets/images/gambarbooking/bgbooking.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../dist/css/booking.css"
import { format } from 'date-fns';
import idLocale from 'date-fns/locale/id';
import { Link } from 'react-router-dom';
import NavbarstatisComponent from "../../components/fragments/NavbarstatisComponent";
import { Container } from "react-bootstrap";

const BookingPages = () => {
  const formatDate = (date) => {
    return format(new Date(date), "dd MMMM yyyy", { locale: idLocale });
  };

  return (
    <div>
      <NavbarstatisComponent/>
      <div className=" booking-image-container  justify-content-center w-100">
        <img src={bgbooking} alt="Deskripsi gambar" className="booking-image"
        style={{
          backgroundSize:"cover",
          backgroundPosition:"center center",
          backgroundRepeat:"no-repeat",
          width:"100%",
         
          }}/>
          <div className=" d-flex container bg-danger justify-content-center w-100" style={{textAlign:"center"}}>
        <div className="booking-content " >
          <h1 className="text1">Selamat Datang</h1>
          <h2 className="text2">Ayo Pesan Tiket Pendakianmu sekarang</h2>
          <h3 className="text3">Registrasi Jadi Lebih Mudah dan <span id="HematWaktu">#HematWaktu</span></h3>
         
          <div className="custom-border">
            <div className="inner-border">
              <input
               type="date"
               className="date-selector"
               defaultValue={formatDate(new Date())}
              />
              <input
               type="date"
               className="date-selector"
               defaultValue={formatDate(new Date())}
              />
              <div className="people-selector">
              <div className="custom-dropdown">
                <select id="people-dropdown">
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang</option>
                  <option value="3">3 Orang</option>
                  <option value="4">4 Orang</option>
                  <option value="5">5 Orang</option>
                </select>
              <span className="dropdown-symbol">&#9660;</span>
              </div>
              </div>
              <div className="button-container">
              <Link to="/bookingform" className="pesan-button">Pesan</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
export default BookingPages;
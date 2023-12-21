import React from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "../../dist/css/akun.css"
import { useClient } from "../client";

const LogoutPopupComponent = ({ show, handleClose, handleLogout }) => {
  const client = useClient();
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Apakah anda yakin ingin keluar?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-action-button text-center ">
        <button className="custom-popup-batal-button " style={{borderRadius: "30px"}} onClick={handleClose}>
          Tidak
        </button>
        <Link to="#" onClick={() => client.logout()}>
        <button  className="custom-popup-pesan-button " style={{ border:"none",  borderRadius: "30px"}} onClick={handleLogout}>
          Ya
        </button>
        </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default LogoutPopupComponent;

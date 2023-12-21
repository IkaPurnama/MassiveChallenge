import React from 'react'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AnggotaBooking = ({anggotaNumber}) => {
  return (
    <div className="booking container justify-content-center align-items-center 100-w 100-vh">
    <div className="40-w p-5 rounded">
      <h5 style={{fontWeight: "600"}}>Anggota {anggotaNumber}</h5>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="member">
          <Form.Label column sm="2">
            Nama Anggota
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="nohpmember">
          <Form.Label column sm="2">
            No Hp
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="nohpkelmember">
          <Form.Label column sm="2">
            No Hp Keluarga
          </Form.Label>
          <Col sm="10">
            <Form.Control type="number" placeholder="" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  </div>
  )
}

export default AnggotaBooking
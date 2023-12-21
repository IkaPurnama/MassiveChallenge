import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import kirimpesan from "../../assets/images/gambarAbout/kirimpesan.png";
import popup from "../../assets/images/gambarAbout/popup.png";
import "../../dist/css/about.css";


const EmailFormComponent = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="email-container text-center mt-0 mb-7 poppins-font">
      <Row
        className="border p-3"
        style={{
          width: '1117px',
          height: '549px',
          backgroundColor: 'rgba(217, 217, 217, 0.18)',
          borderRadius: '30px',
          margin: 'auto',
          boxShadow: 'inset 0 8px 16px rgba(150, 165, 180, 0.3), inset 0 -8px 16px rgba(150, 165, 180, 0.3)',
        }}
      >
        <Col>
          <Image
            src={kirimpesan}
            alt="Kirim Pesan"
            width={292}
            height={323}
            style={{ borderRadius: '39px', marginTop: '90px' }}
          />
        </Col>
        <Col className="text-white">
          <Form onSubmit={handleSubmit}>
            <Form.Label className="mb-3 font-weight-bold" style={{ fontSize: '36px', marginTop: '80px', color: 'black' }}>
              Kirim Pesan
            </Form.Label>
            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                placeholder="Ketik Pesan"
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ borderRadius: '20px', width: '564px', height: '146px' }}
                className="placeholder-black"
              />
            </Form.Group>
            <br />
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Control
                    type="text"
                    placeholder="Nama Anda"
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ borderRadius: '10px', width: '270px', height: '42px' }}
                    className="placeholder-black"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="Email Anda"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderRadius: '10px', width: '270px', height: '42px' }}
                    className="placeholder-black"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className='baten'>
            <Button className="btn-kirim"  type="submit" style={{ border: '2px',borderColor:'rgba(29, 49, 44, 0.95)', borderRadius: '30px', marginTop: '30px', marginRight: '430px', width: '160px', height: '43px', backgroundColor: 'rgba(39, 63, 57, 0.95)' }}>
              Kirim
            </Button>
            </div>
          </Form>
        </Col>
      </Row>


      <Modal show={showModal} onHide={handleCloseModal} centered size="sm" style={{ borderRadius: '30px' }}>
      <Modal.Header style={{ backgroundColor: '#1D312C', border: 'none', position: 'relative'}}>
  <button
    type="button"
    className="close"
    aria-label="Close"
    style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      color: '#000',
      fontSize: '25px',
      width: '25px',
      height: '25px',
      borderRadius: '50%',
      lineHeight: '25px',
      textAlign: 'center',
      padding: '0',
      cursor: 'pointer',
      }}onClick={handleCloseModal}>&times;
    </button>
        <Image
        src={popup}
        alt="Modal Header"
        fluid
        width={300}
        height={200}
        />
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#FFFFFF', color: '#1D312C', textAlign: 'center', borderRadius: "30px" }}>
          <h2 style={{ fontSize: '30px', marginBottom: '10px' }}>Terimakasih</h2>
          <p style={{ fontSize: '14px' }}>
            Pesan anda sedang kami proses. Periksa E-mail anda secara berkala untuk melihat balasan pesan anda.
          </p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default EmailFormComponent;

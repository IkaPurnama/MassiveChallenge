import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "../../dist/css/ulasan.css";

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Komentar berhasil dikirim');
  };

  return (
    <Container fluid className="email-container text-center mt-4 mb-4 poppins-font ">
       <Row className="d-flex justify-content-center align-items-center border p-3 text-center" style={{ backgroundColor: '#F3F3F3', minHeight: '100vh' }}>
           <Col xs={12} md={10} className="text-white" style={{ position: 'relative', top: '-10px' }}>
              <Form onSubmit={handleSubmit}>
              <div style={{ margin: '0' }}>
              <Form.Label className="mb-3 font-weight-bold" style={{ fontSize: '30px', color: 'black', marginBottom: '0' }}>
              Kirim Ulasan Kamu
              </Form.Label>
              </div>
              <div style={{ marginTop: '-20px', marginBottom: "50px" }}>
              <Form.Label style={{ fontSize: '15px', color: 'black', marginBottom: '0' }}>
              Ulasan yang Anda kirimkan akan dipublikasikan ke dalam website
              </Form.Label>
              </div>

            <Row style={{ marginBottom: '20px' }}>
            <Col md={6}>
               <Form.Group controlId="formName">
                    <Form.Control
                    type="text"
                    placeholder="Nama Anda"
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ borderRadius: '3px', width: '100%', maxWidth: '565px', height: '51px' }}/>
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formEmail">
                    <Form.Control
                    type="email"
                    placeholder="Email Anda"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ borderRadius: '3px', width: '100%', maxWidth: '565px', height: '51px' }}/>
                </Form.Group>
            </Col>
            </Row>

            <Row style={{ marginBottom: '20px' }}>
            <Col md={6}>
                <Form.Group controlId="formJob">
                <Form.Control
                type="text"
                placeholder="Pekerjaan"
                onChange={(e) => setJob(e.target.value)}
                required
                style={{ borderRadius: '3px', width: '100%', maxWidth: '565px', height: '51px' }} />
               </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group controlId="formDate">
                <Form.Control
                type="date"
                placeholder="Tanggal"
                onChange={(e) => setDate(e.target.value)}
                required
                style={{ borderRadius: '3px', width: '100%', maxWidth: '565px', height: '51px' }} />
                </Form.Group>
            </Col>
            </Row>

            <Row>
            <Form.Group controlId="formMessage">
            <Form.Control
                as="textarea"
                placeholder="Komentar"
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ borderRadius: '3px', width: '100%', maxWidth: '1183px', height: '197px' }}/>
            </Form.Group>
            </Row>

            <Button
            variant="primary"
            type="submit"
            style={{
                boxShadow: '0px 4px 10px 0px rgba(29, 49, 44, 0.95)',
                border: 'none',
                borderRadius: '30px',
                marginTop: '30px',
                marginLeft: '-870px',
                width: '100%',
                maxWidth: '160px',
                height: '43px',
                fontWeight: 'bold',
                backgroundColor: '#1D312C',
                
                }}>
                Kirim
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>


  );
};

export default EmailForm;

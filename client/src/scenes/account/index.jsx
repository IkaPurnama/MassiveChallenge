import React, { useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../public/assets/users.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'

const AkunPages = () => {
  const [name, setName] = useState("Dharma");
  const [phone, setPhone] = useState("+6285721307399");
  const [email, setEmail] = useState("akusianakgunung123@gmail.com");
  const [password, setPassword] = useState("pendakikeren123");
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <>
      <div className="akun-container justify-content-center align-items-center"
        style={{
          backgroundColor: "white",
          height: "750px",
          paddingTop: "100px",
        }}
      >
        <div className="akun row mx-auto p-4 gap-3">
          <div className="d-flex gap-5">
            <div className="kotak col-md-4 text-center text-gray mt-5  ms-2 ">
              <div className="mb-4">
                <img
                  src={image1}
                  alt="Profil Dharma"
                  className="img-fluid rounded-circle"
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "cover",
                    paddingBottom: "7px",
                  }}
                />
              </div>
            </div>
            <div className="col-md-7 text-center text-black  ml-auto  ">
              <h2 className="mb-4 fw-bold ">Akun Saya</h2>
              <form className="login-form ">
                <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                  <label for="username">NAMA PENGGUNA</label>
                  <Form.Label htmlFor="name">
                    <span className="underline-text">{name}</span>
                  </Form.Label>
                  {isEditMode ? (
                    <Form.Control
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-3" style={{ textAlign: "left" }}>
                  <label for="phone">NOMER TELEPON</label>
                  <Form.Label htmlFor="phone">
                    <span className="underline-text">{phone}</span>
                  </Form.Label>
                  {isEditMode ? (
                    <Form.Control
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      pattern="[+0-9]{12}"
                      required
                    />
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ textAlign: "left" }}>
                  <label for="email">EMAIL</label>
                  <Form.Label htmlFor="email">
                    <span className="underline-text">{email}</span>
                  </Form.Label>
                  {isEditMode ? (
                    <Form.Control
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" style={{ textAlign: "left" }}>
                  <label for="username">PASSWORD</label>
                  <Form.Label htmlFor="password">
                    {isEditMode ? (
                      <Form.Control
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    ) : (
                      <span className="underline-text">************</span>
                    )}
                  </Form.Label>
                </Form.Group>
                <Link to="/edit" className="button ms-auto rounded-2">
                  <Button className="btn-akun text-white b-none" variant="primary" type="button" onClick={() => setIsEditMode(!isEditMode)}>
                    {isEditMode ? "Simpan" : "Ubah"}
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default AkunPages;

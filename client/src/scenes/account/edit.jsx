import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaPencilAlt } from 'react-icons/fa';
import image1 from "../../../public/assets/users.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const EditakunPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [crop, setCrop] = useState({ aspect: 1 / 1 });
  const [image, setImage] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

   const handleImageCrop = (crop) => {
    setCrop(crop);
  };

  const handleImageLoaded = (image) => {
  };

  const handleSaveImage = () => {
    setCrop({ aspect: 1 / 1 });
    setImage(null);
  };

  return (
    <>
      <div className="akun-container justify-content-center align-items-center w-100"
        style={{
          
          height: "100%",
          paddingTop: "100px",
        }}
      >
        <div className="akun row mx-auto p-4 gap-3"
          style={{
            height: "85%"

          }}
        >
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
                <ReactCrop
                  src={image1}
                  crop={crop}
                  onChange={handleImageCrop}
                  onImageLoaded={handleImageLoaded}
                />
                <label htmlFor="profileImage" className="edit-icon">
                  <FaPencilAlt />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="col-md-7 text-center text-black ml-auto"
              style={{
                paddingBottom: "100px",
              }}
            >
              <h1 className="mb-4 fw-bold">Edit Akun</h1>
              <Form>
                <Form.Group className="mb-3"
                style={{
                  textAlign: "left"
                }}
                >
                  <label htmlFor="name">NAMA PENGGUNA</label>
                  <Form.Control
                    type="text"
                    id="text"
                    placeholder="Dharma"
                    required
                    className="custom-form-control"
                  />
                </Form.Group>
                <Form.Group className="mb-3"
                style={{
                  textAlign: "left"
                }}
                >
                  <label htmlFor="phone">NOMER TELEPON</label>
                  <Form.Control
                    type="tel"
                    id="phone"
                    placeholder="+6285721307399"
                    pattern="[+0-9]{12}"
                    required
                    className="custom-form-control"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail"
                style={{
                  textAlign: "left"
                }}
                >
                  <label htmlFor="email">EMAIL</label>
                  <Form.Control
                    type="email"
                    placeholder="akusianakgunung123@gmail.com"
                    className="custom-form-control"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword"
                style={{
                  textAlign: "left"
                }}
                >
                  <label htmlFor="password">PASSWORD LAMA</label>
                  <InputGroup className="mb-3">
                    <Form.Control 
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="custom-form-control"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "transparent",
                        padding: 0,
                        border: "none",
                      }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword"
                style={{
                  textAlign: "left"
                }}
                >
                  <label htmlFor="password">PASSWORD BARU</label>
                  <InputGroup className="mb-3">
                    <Form.Control 
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="custom-form-control"
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "transparent",
                        padding: 0,
                        border: "none",
                      }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword"
                style={{
                  textAlign: "left"
                }}
                >
                  <label htmlFor="password">ULANGI PASSWORD</label>
                  <InputGroup className="mb-3">
                    <Form.Control 
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="custom-form-control"
                    />
                    <Button 
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "transparent",
                        padding: 0,
                        border: "none",
                      }}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputGroup>
                </Form.Group>

                <div className="d-flex justify-content-end">
                  <Link to="/akun" className="me-2"
                    style={{
                      textDecoration: "none"
                    }}
                  >
                    <Button variant="secondary" onClick={handleSaveImage}
                      style={{
                        backgroundColor: "#787878",
                        fontSize: "16px",
                        color: "white",
                        border: "none",
                        width: "100px",
                        height: "40px",
                        borderRadius: "30px",
                        boxShadow: "0px 5px 10px rgba(20, 30, 25, 1)",
                      }}
                    >
                      Kembali
                    </Button>
                  </Link>
                  <Button variant="primary" type="submit" onClick={handleSaveImage}
                    style={{
                      backgroundColor: "#1D312C",
                      fontSize: "16px",
                      color: "white",
                      border: "none",
                      width: "100px",
                      height: "40px",
                      borderRadius: "30px",
                      boxShadow: "0px 5px 10px rgba(20, 30, 25, 1)",
                    }}
                  >
                    Simpan
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditakunPages;

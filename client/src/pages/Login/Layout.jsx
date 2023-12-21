
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import axios from "axios";
import { url_api } from "../../config";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import bglogin from "../../assets/images/bglog.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import "./index.css";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

  return(
    <div>
  {message !== "" ? (
              <>
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px",
                    width: "50%",
                    marginBottom: "4rem",
                    marginTop: 0,
                  }}
                >
                  {message}
                </div>
                <hr />
              </>
            ) : null}
  <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            setTimeout(async () => {
              try {
                const res = await axios.post(`${url_api}/auth/login`, {
                  username: values.username,
                  password: values.password,
                });

                setLoading(false);
                sessionStorage.setItem("token", res.data.token);
                sessionStorage.setItem("role", res.data.role);

                history.push(`/${res.data.role}`);
              } catch (err) {
                setLoading(false);
                setMessage(err.response.data.message);
              }
            }, 1000);

            setLoading(true);
          }}
        >
          {({ values, errors, handleSubmit, handleChange }) => {
  return (
    <div
      className="login template d-flex justify-content-center align-items-center 100-w vh-100"
      style={{
        backgroundImage: `url(${bglogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="form_container p-5 rounded">
        <form onSubmit={handleSubmit} method="post">
          <h3 className="text-center text-black">Selamat Datang</h3>
          <h5 className="text-center text-white mt-0 mb-3">Masuk dengan akun anda</h5>
          <div className="mb-2">
          <div style={{ marginBottom: "1%" }} className="input">
          <FaUser className="icon" />
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              placeholder="Nama Pengguna"
              className="form-control"
            />
          </div>
          </div>
          <div className="mb-2">
          <div style={{ marginBottom: "1%" }} className="input">
          <MdLock className="icon" />
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Kata Sandi"
              className="form-control"
            />
          </div>
          </div>
          <p className="text-end mb-2 text-white" style={{fontSize: "14px"}}>Lupa kata sandi?</p>
          <div className="d-grid mb-2">
            <button className="btn" style={{color:"white"}}>
              Masuk
            </button>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center mt-4">
            <div className="d-flex flex-column">
          <h5
                  style={{
                    color: "#fff",
                    fontSize: "14px",
                  }}
                >
                  Masuk ke akun dengan
                </h5>
                <div className="loginwith"
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "3rem",
                    }}
                  >
                    <FcGoogle className="icons" />
                    <FaFacebook
                      className="icons"
                      style={{
                        color: "#1877F2",
                      }}
                    />
                  </div>
                  </div>
                  </div>
          <div className="text-end d-flex flex-row gap-3 align-items-center">
            <p className="align-items-center text-white" style={{fontSize: "14px"}}>
              Belum punya akun?
            </p>
            <Link className="daftar"
              to="../register/Layout"
              style={{
                color: "#FFA323",
                fontSize: "14px",
                
              }}
            >
              Daftar
            </Link>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
            }}
            </Formik>
            </div>
  )
};

export default Layout;
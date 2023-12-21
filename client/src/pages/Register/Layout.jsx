import { Formik } from "formik";
import { useState } from "react";
import axios from "axios";
import { url_api } from "../../config";
import bglogin from "../../assets/images/bglog.jpg";
import { MdLock } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../../index.css";
import "./index.css";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div>

      <Formik
        initialValues={{
          fname: "",
          lname: "",
          username: "",
          email: "",
          phone_number: "",
          password: "",
          role: "",
        }}
        onSubmit={(values) => {
          setTimeout(async () => {
            try {
              const res = await axios.post(`${url_api}/auth/register`, {
                fname: values.fname,
                lname: values.lname,
                username: values.username,
                email: values.email,
                phone_number: values.phone_number,
                password: values.password,
                role: values.role,
              });

              setLoading(false);
              setMessage(res.data.message);
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
                <form
                  method="post"
                  onSubmit={handleSubmit}
                >
                  <h3 className="text-center text-black">Daftar Akun</h3>
                  <h5 className="text-center text-white mt-0 mb-3">
                    Buat akun baru anda
                  </h5>
                  {message !== "" ? (
        <>
          <div
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              width: "100%",
            }}
          >
            {message}
          </div>
        </>
      ) : null}

                  
                  <div className="d-flex flex-row gap-3 ">
                  <div style={{ marginBottom: "1%" }}>
                    <div style={{ marginBottom: "1%" }} className="input  " >
                      <FaUser  className="icon" />
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        onChange={handleChange}
                        placeholder="Nama Depan"
                        required
                      />
                    </div>
                  </div>
                  <div >
                    <div style={{ marginBottom: "1%" }} className="input">
                      <FaUser className="icon" />
                      <input
                        type="text"
                        id="lname"
                        name="lname"
                        onChange={handleChange}
                        placeholder="Nama Belakang"
                        required
                      />
                    </div>
                  </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ marginBottom: "1%" }} className="input">
                      <FaUser className="icon" />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        placeholder="Nama Pengguna"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ marginBottom: "1%" }} className="input">
                      <MdEmail className="icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ marginBottom: "1%" }} className="input">
                      <IoCall className="icon" />
                      <input
                        type="number"
                        id="phone_number"
                        name="phone_number"
                        onChange={handleChange}
                        placeholder="Nomor Telepon"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-2">
                    <div style={{ marginBottom: "1%" }} className="input">
                      <MdLock className="icon" />
                      <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Kata Sandi"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <div style={{ marginTop: "3px" }}>
                      
                      <select
                        name="role"
                        id="role"
                        onChange={handleChange}
                        required
                        className="input"
                        style={{paddingLeft: "2rem"}}
                      >
                        
                        <option
                          value=""
                          style={{ marginLeft: "1rem", fontColor: "#1d312c", padding: "2rem"}}
                        >
                          
                          Daftar Sebagai
                        </option>
                        <option value="admin" >Pengelola</option>
                        <option value="user" >Pendaki</option>
                      </select>
                    </div>
                  </div>
                 

                  <div style={{ marginBottom: "1%" }}>
                    {/* {loading ? (
                    <button disabled>Loading...</button>
                  ) : (
                    <button type="submit" className="styleButton">
                      Daftar
                    </button>
                  )} */}
                    <div className="d-grid mb-2">
                      <button
                        className="btn"
                        style={{color:"white" }}
                      >
                        Daftar
                      </button>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <h5
                        style={{
                          fontSize: "14px",
                          color: "#fff",
                          marginTop: "5px",
                        }}
                      >
                        Sudah punya akun?
                      </h5>

                      <Link className="masuk"
                        to="../Login"
                        style={{
                         color:"#FFA323",
                          fontSize: "14px",
                        }}
                      >
                        Masuk
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
    // </div>
    // </div>
  );
};

export default Layout;
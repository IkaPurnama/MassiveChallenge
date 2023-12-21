import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import { FaHome, FaBell, FaHistory, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='box col-md-2 min-vh-100 d-flex flex-column position-fixed'>
      <div>
        <div className='text-decoration-none text-white d-flex flex-column align-items-center mt-2'>
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
          <span className='ms-1 fs-4 d-none d-sm-inline'>NdoroAarum</span>
        </div>
        <hr className='text-secondary' />
        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="/" className="nav-link text-white fs-6" aria-current="page">
              <FaHome/>
              <span className='ms-3 d-none d-sm-inline'>Beranda</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="/team" className="nav-link text-white fs-6">
              <FaBell/>
              <span className='ms-3 d-none d-sm-inline'>Notifikasi</span>
            </a>
          </li>
          <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
            <a href="/contacts" className="nav-link text-white fs-6">
              <FaHistory/>
              <span className='ms-3 d-none d-sm-inline'>Riwayat</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown open mt-auto">
        <a className="text-decoration-none text-white dropdown-toggle p-3 fs-6" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <FaUserCircle /><span className='ms-3 d-none d-sm-inline'>Admin</span>
        </a>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <a className="dropdown-item" href="/account">
            <span className='d-sm-inline'>Profile</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className='d-sm-inline'>Keluar</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FaCamera, FaYoutube } from 'react-icons/fa';

const NavbarGaleri = () => {
  return (
    <>
    <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/galeri">
            <FaCamera className="fs-1"
                style={{
                    color: "#1D312C",
                    width: "30",
                    height: "25",
                }}
            />
            <span className="text-black fs-7"
                style={{
                    marginLeft: '5px',
                }}
            >
                Galeri
            </span>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/video">
            <FaYoutube className="fs-1"
                style={{
                color: "#1D312C",
                width: "30",
                height: "25",
                }}
            />
            <span className="text-black fs-7"
                style={{
                    marginLeft: '5px',
                }}
            >
                Video
            </span>
            </Nav.Link>
        </Nav.Item>
    </Nav>
    </>
  )
}

export default NavbarGaleri
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function ButtonCek() {
  const buttonStyle = {
    backgroundColor: "#1d312c",
    width: "131px",
    height: "29px",
    borderRadius: "30px", 
    fontSize: "12px",
    fontWeight: 500,
  };

  return (
    <>
      <Link to="../invoices">
        <Button style={buttonStyle}>Cek Selengkapnya</Button>
      </Link>
    </>
  );
}

export default ButtonCek;

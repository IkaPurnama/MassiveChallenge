import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Sidebar from "../global/Sidebar";
import './index.css'

const Invoices = () => {
  
  const colors = {
    primary: {
      400: "#your_primary_color",
    },
    grey: {
      100: "#your_grey_color",
      300: "#your_grey_color",
    },
    greenAccent: {
      500: "#your_green_color",
    },
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "nohp",
      headerName: "No HP",
      flex: 1,
    },
    {
      field: "nohpkel",
      headerName: "No HP Keluarga",
      flex: 1,
    },
    {
      field: "alamat",
      headerName: "Alamat",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Gambar",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      ),
    },
  ];

  return (
    <>
    <div className="container-fluid" >
    <Box m="20px">
      <Header title="RINCIAN PESANAN" />
      <div className="col-md-10 d-flex flex-column position-relative">
      <Card className="mb-3 d-flex flex-column w-50 ">
      <Card.Body className="d-flex flex-column" gap={1}>
        <div className="d-flex flex-row justify-content-between">
        <p>id pesanan</p> <span>2122023</span>
        </div>
        <div className="d-flex flex-row justify-content-between">
        <p>tanggal pemesanan </p> <span>15-11-2023</span>
        </div>
        <div className="d-flex flex-row justify-content-between">
        <p>jumlah pendaki</p> <span>5 orang</span>
        </div>
        <div className="d-flex flex-row justify-content-between">
        <p>status pembayaran</p> <span>selesai</span>
        </div>
        </Card.Body>
    </Card>
      <Card>
      <Card.Header className='text-center text-white fs-4' style={{backgroundColor: '#1d312c', fontWeight: '600'}}>Ketua Kelompok</Card.Header>
      <Card.Body>
      <Form >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>Nama Lengkap</Form.Label>
          <Form.Control  type="text" placeholder="Raisya" disabled/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>Tanggal Naik</Form.Label>
          <Form.Control type="text" placeholder="20-11-2023" disabled/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>Tanggal Turun</Form.Label>
          <Form.Control type="text" placeholder="22-11-2023" disabled/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress1" >
        <Form.Label className="fs-6" style={{fontWeight: "600"}}>Jenis Kelamin</Form.Label>
        <Form.Control placeholder="Perempuan" disabled />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>Identitas</Form.Label>
          <Form.Select defaultValue="Choose..." disabled>
            <option>KTP</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>No Identitas</Form.Label>
          <Form.Control type="number" placeholder="3207244503030002" disabled />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress1" >
        <Form.Label className="fs-6" style={{fontWeight: "600"}}>Tanggal Lahir</Form.Label>
        <Form.Control placeholder="05-03-2003" disabled />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>No HP</Form.Label>
          <Form.Control type="number" placeholder="085721307399" disabled />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>No HP Keluarga</Form.Label>
          <Form.Control type="number" placeholder="0824834363896" disabled />
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridAddress1" >
        <Form.Label className="fs-6" style={{fontWeight: "600"}}>Email</Form.Label>
        <Form.Control type="email" placeholder="raisya053@gmail.com" disabled />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridAddress1" >
        <Form.Label className="fs-6" style={{fontWeight: "600"}}>Alamat</Form.Label>
        <Form.Control placeholder="Jl. Ibrahim Ajie No.053" disabled />
      </Form.Group>

        <Form.Group as={Col} controlId="formGridZip" style={{display: "flex", flexDirection: "column"}}>
          <Form.Label className="fs-6" style={{fontWeight: "600"}}>Kartu Identitas</Form.Label>
          <img src="../../public/assets/ktp.png" alt="" style={{height: "150px", width: "280px"}}/>
        </Form.Group>
      </Row>
    </Form>
      </Card.Body>
    </Card>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: '#1d312c',
            borderBottom: "none",
            color: "#fff"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.greenAccent[500],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <h5 className="text-center fs-4" style={{fontWeight: '600'}}>Anggota Kelompok</h5>
        <DataGrid rows={mockDataInvoices} columns={columns} />
      </Box>
      </div>
    </Box>
    </div>
    </>
  );
};

export default Invoices;

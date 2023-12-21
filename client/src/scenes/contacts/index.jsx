import React from 'react';
import "./index.css";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import CheckBox from "../../components/checkbox";
import ButtonCek from "../../components/ButtonCek";

const Contacts = () => {
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
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "idPesanan", headerName: "ID Pesanan" },
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
      field: "tanggalPendaftaran",
      headerName: "Tanggal Pendaftaran",
      flex: 1,
    },   
    {
      field: "statusPembayaran",
      headerName: "Status Pembayaran",
      flex: 1,
      renderCell: (params) => (
        <CheckBox checked={params.value} onChange={() => handleCheckBoxChange(params.row.id)} />
      ),
    },
    {
      field: "Action",
      headerName: "Aksi",
      flex: 1,
      renderCell: (params) => (
        <ButtonCek onChange={() => handleCheckBoxChange(params.row.id)} />
      ),
    },
  ];

  return (
    <Box m="20px" className='col-md-8 mx-auto min-vh-100 d-flex flex-column position-relative'>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        width="120%"
        mx="auto" 
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.grey[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.greenAccent[500],
            borderBottom: "none",
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;

import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";


const Dashboard = () => {
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

  return (
    <Box m="20px">
      {/* HEADER */}
      <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2>Selamat Datang di dashboard admin</h2>
        <p>Selamat Datang di dashboard admin</p>
        
      </div>
    </Box>
  );
};

export default Dashboard;

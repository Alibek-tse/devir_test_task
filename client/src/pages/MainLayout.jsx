import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <Box>
      <Header></Header>
      <Box sx={{ pt: "64px" }}>
        <Outlet></Outlet>
      </Box>
    </Box>
  );
};
export default MainLayout;

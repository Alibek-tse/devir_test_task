import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <Box>
      <Header></Header>
      <Outlet></Outlet>
    </Box>
  );
};
export default MainLayout;

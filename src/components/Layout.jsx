import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "@mui/material/Container";
const Layout = () => {
  return (
    <>
      <Container disableGutters
      sx={{
        maxWidth: { sm: "38rem", md: "51rem", lg: "73rem", xl: "109rem" },
        paddingLeft:{xs: "1rem"},
        paddingRight:{xs: "1rem"}
      }}>
        <Header />
        <Outlet />
      </Container>  
        <Footer />

    </>
  );
};
export default Layout;

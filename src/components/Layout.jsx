import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Container, Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", sm: "block" },
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Container
          disableGutters
          sx={{
            maxWidth: { sm: "38rem", md: "53rem", lg: "70rem", xl: "88rem" },
            paddingLeft: { xs: "2rem" },
            paddingRight: { xs: "2rem" },
          }}
        >
          <Header />
          <Outlet />
        </Container>
        <Container
          disableGutters
          sx={{
            maxWidth: {
              sm: "42rem",
              md: "55rem",
              lg: "95rem",
              xl: "105rem",
              xs: "42rem",
            },
            paddingLeft: { xl: "5rem" },
            paddingRight: { xl: "5rem" },
          }}
        >
          <Footer />
        </Container>
      </Box>
    </>
  );
};
export default Layout;

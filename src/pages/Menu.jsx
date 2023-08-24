import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

const Menu = () => {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          paddingBottom: "3rem",
          paddingTop: "1rem",
          bgcolor: "#292929",
          paddingRight: "1rem",
          width: "100%",
          height: "100vh",
        }}
        disableGutters
      >
        <Link
          to="/collection"
          style={{ textDecoration: "none", alignSelf: "self-end" }}
        >
          <IconButton
            sx={{ color: "#9F8965" }}
            size="large"
            aria-label="account of current user"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
        </Link>
        <Box sx={{ paddingTop: "3.5rem", paddingLeft: "4rem" }}>
        <Link
          to="/"
          style={{ textDecoration: "none"}}
        >
          <Typography
            sx={{
              font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 24px/40px Red Hat Text",
              textAlign: "left",
              letterSpacing: 0.72,
              color: "#FFFFFF",
              textTransform: "capitalize",
              opacity: 1,
              paddingBottom: "2rem",
            }}
          >
            Home 
          </Typography>
          </Link>
          <Link
          to="/collection"
          style={{ textDecoration: "none"}}
        >
          <Typography
            sx={{
              font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 24px/40px Red Hat Text",
              textAlign: "left",
              letterSpacing: 0.72,
              color: "#FFFFFF",
              textTransform: "capitalize",
              opacity: 1,
              paddingBottom: "2rem",
            }}
          >
            Collection
          </Typography>
          </Link>
          <Link
          to="/about"
          style={{ textDecoration: "none"}}
        >
          <Typography
            sx={{
              font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 24px/40px Red Hat Text",
              textAlign: "left",
              letterSpacing: 0.72,
              color: "#FFFFFF",
              textTransform: "capitalize",
              opacity: 1,
              paddingBottom: "2rem",
            }}
          >
             About 
          </Typography>
          </Link>
          <Link
          to="/contact"
          style={{ textDecoration: "none"}}
        >
          <Typography
            sx={{
              font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 24px/40px Red Hat Text",
              textAlign: "left",
              letterSpacing: 0.72,
              color: "#FFFFFF",
              textTransform: "capitalize",
              opacity: 1,
              
            }}
          >
         Contact Us
          </Typography>
          </Link>
        </Box>
      </AppBar>
    </>
  );
};
export default Menu;

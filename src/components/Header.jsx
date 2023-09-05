import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";


import halaAlAbadImage from "/images/hala-logo2.png"; 

const pages = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "About", path: "/about" },
  // { name: "Articles", path: "/articles" },
  { name: "Contact Us", path: "/contact", hasPaddingRight: true },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigateTo = (path) => {
    navigate(path);
  };
  // useEffect(() => {
  // }, []);
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          paddingBottom: { xs: "1.2rem" },
          bgcolor: "white",
          borderBottom: "1px solid var(--unnamed-color-e2e1df)",
          marginBottom: "50px",
        }}
        disableGutters
      >
        <Toolbar disableGutters>
        <Link to="/" style={{ textDecoration: "none" }}>
        <img
              src={halaAlAbadImage}
              alt="Hala AlAbad"
              style={{
             
                width: "145px",
                height: "90px", 
              }}
            />
          </Link>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <Link to="/menu" style={{ textDecoration: "none" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
            </Link>
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigateTo(page.path);
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page, index) => (
              
              <Button
                key={page.name}
                onClick={() => {
                  handleCloseNavMenu();
                  navigateTo(page.path);
                }}
                sx={{
                  my: 4,
                  color:  location.pathname === page.path ?
                      "var( --unnamed-color-9f8965)" :
                      "var(--unnamed-color-2c2a26)",    
                  display: "block",
                  px: 4,
                  paddingRight: page.hasPaddingRight && "0px",
                  letterSpacing: "0.54px",
                  fontWeight: "normal",
                  textTransform: "capitalize",
                  opacity: 1,
                  font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/30px Red Hat Text",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

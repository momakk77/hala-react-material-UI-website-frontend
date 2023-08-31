
import { Box, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
  "/images/4.jpeg",
  "/images/5.jpeg",
  "/images/6.jpeg",
];
const slideDuration = 5000;

const Home = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleKeyboardNavigation = (event) => {
    if (event.key === "ArrowRight") {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    } else if (event.key === "ArrowLeft") {
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      setCurrentImageIndex(prevIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, slideDuration);

    window.addEventListener("keydown", handleKeyboardNavigation);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyboardNavigation);
    };
  }, [currentImageIndex]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          ...backgroundImageStyle,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: { xs: "none", md: "flex" },
          outline: "none",
          transition: "background 2s"
        }}
        onKeyDown={handleKeyboardNavigation}
        tabIndex="0"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)", 
          }}
        />
        <Grid
          container
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <Typography
              sx={{
                font: "normal normal normal 6rem Bodoni Moda",
                color: "var(--unnamed-color-faf9e0)",
                textAlign: "center",
                letterSpacing: 2.55,
                textTransform: "uppercase",
                opacity: 1,
              }}
            >
              HALA ALABED
            </Typography>
            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate("/collection")}
              sx={{
                "&:hover": {
                  backgroundColor: "var(--unnamed-color-000000)",
                  opacity: 1,
                },
                background:
                  " var(--unnamed-color-000000) 0% 0% no-repeat padding-box",
                color: "var(--unnamed-color-faf9e0)",
                font: "normal normal normal 1.3rem Bodoni Moda",
                letterSpacing: 3.2,
                textTransform: "uppercase",
                opacity: 1,
                height: "3rem",
                borderRadius: "2px",
              }}
            >
              Collection
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          ...backgroundImageStyle,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: { xs: "block", md: "none" },
          outline: "none",
          transition: "background 2s"
        }}
        onKeyDown={handleKeyboardNavigation}
        tabIndex="0"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // 70% opacity black
          }}
        />
        <Grid
          container
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item>
            <Typography
              sx={{
                font: "normal normal normal 2.8rem Bodoni Moda",
                color: "var(--unnamed-color-faf9e0)",
                textAlign: "center",
                letterSpacing: 2.55,
                textTransform: "uppercase",
                opacity: 1,
              }}
            >
              HALA ALABED
            </Typography>
            <Button
              variant="contained"
              disableElevation
              onClick={() => navigate("/collection")}
              style={{
                backgroundColor: "transparent",
                background:
                  " var(--unnamed-color-000000) 0% 0% no-repeat padding-box",
                color: "var(--unnamed-color-faf9e0)",
                font: "normal normal normal 0.8rem Bodoni Moda",
                letterSpacing: 3.2,
                textTransform: "uppercase",
                opacity: 1,
                height: "2rem",
                borderRadius: "2px",
              }}
            >
              Collection
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("/images/547711.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid
          container
          sx={{
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
                  opacity: 0.9,
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
          width: "100%",
          height: "100vh",
          backgroundImage: 'url("/images/547711.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: { xs: "flex", md: "none" },
        }}
      >
        <Grid
          container
          sx={{
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

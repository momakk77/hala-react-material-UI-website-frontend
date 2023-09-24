import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


const Img = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
});

const Collection = () => {
  const [getAllImages, setGetAllImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Broken");
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [getAllCategories, setGetAllCategories] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedLimit, setSelectedLimit] = useState(8);

  const navigate = useNavigate();



  // Inside the click handler for opening a photo
  const navigateToPhoto = (id) => {
    navigate(`/photo/${id}/${selectedCategory}`);
  };


  const getImages = async () => {
    try {
      const res = await axios.get(
        `/api/image?category=${selectedCategory}&page=${selectedPage}&limit=${selectedLimit}`
      );
      console.log(res);
      setGetAllImages(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };
  const getCategories = async () => {
    try {
      const res = await axios.get(`/api/category`);
      console.log(res);
      setGetAllCategories(res.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    getImages();
    getCategories();
  }, [selectedCategory, selectedLimit]);

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "white", marginBottom: "50px" }}
        disableGutters
      >
        <Toolbar disableGutters>
          {/* <Typography
            sx={{
              font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) Red Hat Text",
              color: "var(--unnamed-color-2c2a26)",
              letterSpacing: 4,
              textTransform: "uppercase",
              display: { xs: "none", md: "flex" },
              opacity: 1,
              fontSize: "1.7rem",
            }}
          >
            HALA ALABED
          </Typography> */}
          <div>
            {/* <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-20) Red Hat Text",
                color: "var(--unnamed-color-2c2a26)",
                letterSpacing: 4,
                textTransform: "uppercase",
                display: { xs: "flex", md: "none" },
                opacity: 1,
                fontSize: "1.2rem",
              }}
            >
              HALA ALABED
            </Typography> */}
            <Grid
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {loading && getAllCategories?.map((getCategories, index) => (
                  <Button
                    key={getCategories._id}
                    onClick={() => {
                      handleCloseNavMenu();
                      setSelectedCategoryIndex(index);
                      setSelectedCategory(getCategories.category);
                    }}
                    sx={{
                      color:
                        selectedCategoryIndex == index
                          ? "var( --unnamed-color-9f8965)"
                          : "var(--unnamed-color-2c2a26)",
                      letterSpacing: "0.54px",
                      fontWeight: "normal",
                      textTransform: "capitalize",
                      opacity: 1,
                      font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 1.2rem Red Hat Text",
                      padding: "0",
                      minWidth: "0",
                      marginInlineEnd: "1rem",
                    }}
                  >
                    <Typography>{getCategories.category}</Typography>
                  </Button>
                ))}
            </Grid>
          </div>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {loading && getAllCategories?.map((getCategories, index) => (
                <Button
                  key={getCategories._id}
                  onClick={() => {
                    handleCloseNavMenu();
                    setSelectedCategoryIndex(index);
                    setSelectedCategory(getCategories.category);
                  }}
                  sx={{
                    color:
                      selectedCategoryIndex == index
                        ? "var( --unnamed-color-9f8965)"
                        : "var(--unnamed-color-2c2a26)",
                    display: "block",
                    letterSpacing: "0.54px",
                    fontWeight: "normal",
                    textTransform: "capitalize",
                    opacity: 1,
                    font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 18px/30px Red Hat Text",
                  }}
                >
                  {getCategories.category}
                </Button>
             ) )}
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container spacing={4}>
        {loading &&
          getAllImages?.map((getImages) => (
            <Grid
              key={getImages._id}
              item
              container
              lg={3}
              md={4}
              sm={6}
              xs={6}
              sx={{ flexFlow: "column" }}
            >
              <Grid
                item
                sx={{ flex: 2, display: "flex", alignItems: "center" }}
              >
                <Link
                  to={`/photo/${getImages._id}/${selectedCategory}`}
                  style={{ display: "block" }}
                >
                  {loading ? (
                     <Img
                     alt="complex"
                     src={getImages.imagePath}
                     sx={{ width: "100%", objectFit: "contain" }}
                   />
                    
                  ) : (
                    <CircularProgress style={{ color: "var(--unnamed-color-9f8965" }}/>
                  )}
                </Link>
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 14px/var(--unnamed-line-spacing-26) Red Hat Text",
                    color: "var(--unnamed-color-7f7c76)",
                    letterSpacing: 0.42,
                    opacity: 1,
                  }}
                >
                  {getImages.title}
                </Typography>
                <Typography
                  sx={{
                    font: "var(--unnamed-font-style-normal) normal 300 12px/16px Red Hat Text",
                    color: "var(--unnamed-color-afaba1)",
                    letterSpacing: 0.36,
                    opacity: 1,
                  }}
                >
                  {getImages.description}
                  <br /> {getImages.size}
                </Typography>
              </Grid>
            </Grid>
          ))}
      </Grid>
      {(getAllImages.length > 8 && selectedLimit > getAllImages.length) ||
      getAllImages.length < 8 ? null : (
        <Grid
          container
          sx={{
            justifyContent: "center",
            marginTop: "3rem",
            display: { xs: "flex", sm: "none" },
          }}
        >
          <Button
            // key={page}
            onClick={() => {
              handleCloseNavMenu();
              setSelectedLimit(selectedLimit + 8);
            }}
            variant="contained"
            disableElevation
            sx={{
              "&:hover": {
                backgroundColor: "var(--unnamed-color-9f8965)",
                opacity: 0.7,
              },
              background:
                "var(--unnamed-color-9f8965) 0% 0% no-repeat padding-box",
              color: "var(--unnamed-color-faf9e0)",
              font: "normal normal normal 0.8rem Bodoni Moda",
              letterSpacing: 3.2,
              textTransform: "uppercase",
              opacity: 1,
              height: "2.5rem",
              borderRadius: "2px",
            }}
          >
            Load More
          </Button>
        </Grid>
      )}
      {(getAllImages.length > 8 && selectedLimit > getAllImages.length) ||
      getAllImages.length < 8 ? null : (
        <Grid
          container
          sx={{
            justifyContent: "center",
            marginTop: "3rem",
            display: { xs: "none", sm: "flex" },
          }}
        >
          <Button
            onClick={() => {
              handleCloseNavMenu();
              setSelectedLimit(selectedLimit + 8);
            }}
            variant="contained"
            disableElevation
            sx={{
              "&:hover": {
                backgroundColor: "var(--unnamed-color-9f8965)",
                opacity: 0.7,
              },
              background:
                "var(--unnamed-color-9f8965) 0% 0% no-repeat padding-box",
              color: "var(--unnamed-color-faf9e0)",
              font: "normal normal normal 0.8rem Bodoni Moda",
              letterSpacing: 3.2,
              textTransform: "uppercase",
              opacity: 1,
              height: "2.5rem",
              borderRadius: "2px",
            }}
          >
            Load More
          </Button>
        </Grid>
      )}
    </>
  );
};
export default Collection;

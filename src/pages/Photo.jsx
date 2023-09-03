import {
  AppBar,
  Box,
  Grid,
  Stack,
  Typography,
  getImageListItemUtilityClass,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import PhotoDialog from "../components/PhotoDialog";
import ShareDialog from "../components/ShareDialog";
import axios from "axios";
import PhotoExpandDialog from "../components/PhotoExpandDialog";
import CircularProgress from "@mui/material/CircularProgress";

const Img = styled("img")((props) => ({
  display: "block",
  objectFit: "contain",
  width: "100%",
  height: "650px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  [props.theme.breakpoints.up("xl")]: {
    height: "100vh",
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 20,
            top: 20,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Photo = () => {
  const [getImage, setGetImage] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState("");
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const { id } = useParams();
  const getAImage = async (id) => {
    try {
      const res = await axios.get(`/api/image/${id}`, config);
      console.log(res.data);
      setGetImage({
        ...res.data.data,
        ...res.data,
      });
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    id && getAImage(id);
  }, [id]);
  const [open, setOpen] = React.useState(false);
  const [openShare, setOpenShare] = React.useState(false);
  const [openImage, setOpenImage] = React.useState(false);
  const handleClickOpen = (id) => {
    setSelectedImageId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenImage = (id) => {
    setSelectedImageId(id);
    setOpenImage(true);
  };
  const handleCloseImage = () => {
    setOpenImage(false);
  };
  const handleClickOpenShare = () => {
    setOpenShare(true);
  };
  const handleCloseShare = () => {
    setOpenShare(false);
  };
  const navigate = useNavigate();
  const navigateImage = (id) => {
    id && navigate(`/photo/${id}`);
  };

  return (
    <>
      <Box sx={{ position: "relative", p: 8 }}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            left: "0",
            top: "0",
            bottom: "0",
            margin: "auto",
          }}
        >
          <IconButton
            sx={{
              color: "var(--unnamed-color-e2e1df)",
            }}
            aria-label="arrow"
            disabled={!getImage.prevImageId}
            onClick={() => {
              navigateImage(getImage.prevImageId);
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "0",
            top: "0",
            zIndex: 1,
          }}
        >
          <IconButton
            sx={{
              color: "#ACACAC",
            }}
            onClick={() => navigate("/collection")}
          >
            <CloseIcon sx={{ fontSize: "larger" }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            right: "0",
            top: "0",
            bottom: "0",
            margin: "auto",
          }}
        >
          <IconButton
            sx={{
              color: "var(--unnamed-color-e2e1df)",
            }}
            aria-label="arrow"
            disabled={!getImage.nextImageId}
            onClick={() => {
              navigateImage(getImage.nextImageId);
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <Grid
          container
          sx={{
            justifyContent: "space-between",
            flexDirection: { xs: "column-reverse", sm: "row" },
          }}
        >
          <Grid
            item
            md={2}
            sm={3}
            alignSelf={"center"}
            sx={{
              alignSelf: { xs: "flex-start", sm: "center" },
              marginTop: { sm: "0px",  },
            }}
          >
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-26) Red Hat Text",
                color: "var(--unnamed-color-2c2a26)",
                letterSpacing: 0.48,
                textTransform: "uppercase",
                opacity: 1,
                paddingBottom: "30px",
                paddingTop: "30px",
              }}
            >
              Hala Alabed
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/18px Red Hat Text",
                color: "var(--unnamed-color-afaba1)",
                letterSpacing: 0.42,
                opacity: 1,
                paddingBottom: "20px",
              }}
            >
              {getImage.title}
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/18px Red Hat Text",
                color: "var(--unnamed-color-afaba1)",
                letterSpacing: 0.42,
                opacity: 1,
              }}
            >
              {getImage.description}
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/18px Red Hat Text",
                color: "var(--unnamed-color-afaba1)",
                letterSpacing: 0.42,
                opacity: 1,
              }}
            >
              {getImage.size}
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/18px Red Hat Text",
                color: "var(--unnamed-color-afaba1)",
                letterSpacing: 0.42,
                opacity: 1,
              }}
            >
              22 1/8x 29 7/8 in
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/18px Red Hat Text",
                color: "var(--unnamed-color-afaba1)",
                letterSpacing: 0.42,
                opacity: 1,
                paddingBottom: "40px",
              }}
            >
              Framed
            </Typography>
            <Button
              onClick={() => {
                handleClickOpen(getImage._id);
              }}
              fullWidth
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
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 12px/30px var(--unnamed-font-family-ltc-bodoni-175-pro)",
                letterSpacing: 2.4,
                textTransform: "uppercase",
                opacity: 1,
                height: "36px",
                borderRadius: "0px",
              }}
            >
              Enquire
            </Button>

            <Button
              variant="outlined"
              disableElevation
              onClick={handleClickOpenShare}
              sx={{
                backgroundColor: "transparent",
                color: "var(--unnamed-color-9f8965)",
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 10px/30px Red Hat Text",
                letterSpacing: 2,
                textTransform: "uppercase",
                opacity: 1,
                textAlign: "center",
                border: "0.5px solid var(--unnamed-color-9f8965)",
                borderRadius: 2,
                marginTop: "55px",
              }}
            >
              +Share
            </Button>
          </Grid>
          <Grid item sm={7}>
            {loading ? (
              <Img
                src={`/${getImage.imagePath}`}
                alt=""
                onClick={() => handleClickOpenImage(getImage._id)}
              />
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "650px",
                }}
              >
                <CircularProgress style={{ 
                  color: "var(--unnamed-color-9f8965)",
                 }}/>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
      <PhotoDialog setOpen={setOpen} open={open} imageId={selectedImageId} />
      <ShareDialog setOpen={setOpenShare} open={openShare} />
      <PhotoExpandDialog
        setOpen={setOpenImage}
        open={openImage}
        imageId={selectedImageId}
      />
    </>
  );
};

export default Photo;

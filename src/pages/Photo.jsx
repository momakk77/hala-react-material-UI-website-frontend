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
import axios from "axios";

const Img = styled("img")((props) => ({
  display: "block",
  width: "100%",
  objectFit: "cover",
  height: "20rem",
  [props.theme.breakpoints.up("sm")]: {
    height: "600px",
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
            right: 8,
            top: 8,
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
      const res = await axios.get(
        `/api/image/${id}`,
        config
      );
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

  const handleClickOpen = (id) => {
    setSelectedImageId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const navigateImage = (id) => {
    id && navigate(`/photo/${id}`);
  }

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
              color: "var(--unnamed-color-e2e1df)",
            }}
            onClick={() => navigate("/collection")}
          >
            <CloseIcon />
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
            md={1.5}
            sm={3}
            alignSelf={"center"}
            sx={{
              alignSelf: { xs: "flex-start", sm: "center" },
              marginTop: { xs: "20px", sm: "0px" },
            }}
          >
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/var(--unnamed-line-spacing-26) Red Hat Text",
                color: "var(--unnamed-color-2c2a26)",
                letterSpacing: 0.48,
                textTransform: "uppercase",
                opacity: 1,
                paddingBottom: "40px",
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
            <Img src={`/${getImage.imagePath}`} alt="" />
          </Grid>
        </Grid>
      </Box>
      <PhotoDialog setOpen={setOpen} open={open} imageId={selectedImageId} />
    </>
  );
};

export default Photo;

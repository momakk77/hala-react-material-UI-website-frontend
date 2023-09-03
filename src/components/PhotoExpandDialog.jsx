
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";


const Img = styled("img")((props) => ({
  display: "block",
  objectFit: "contain",
  height: "90vh",
  margin: "auto",
  }));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const PhotoExpandDialog = ({ open, setOpen, imageId }) => {

    const [getImage, setGetImage] = useState({
        imagePath: "", 
});
    const [loading, setLoading] = useState(false);


const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
 
  const getAImage = async (imageId) => {
    try {
      const res = await axios.get(
        `/api/image/${imageId}`,
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
    imageId && getAImage(imageId);
  }, [imageId]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>

      <BootstrapDialog
        fullWidth
        maxWidth={{sm: "lg"}}
  
        sx={{
          "& .MuiPaper-root": {
            background: "transparent",
            boxShadow: "none"
          },
          //display: {sm: "flex"}
        }}
        onClose={handleClose}
        open={open}
        BackdropProps={{
            style: { backgroundColor: "rgba(0, 0, 0, 0.9)" }, 
          }}
      >
        
        {loading ? (
              <Img
                src={`/${getImage.imagePath}`}
                alt=""
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
         

      </BootstrapDialog>
    </>
  );
};
export default PhotoExpandDialog;

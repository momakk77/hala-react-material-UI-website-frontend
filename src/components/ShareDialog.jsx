import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import React, {} from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    EmailShareButton,
    EmailIcon,
    LinkedinShareButton,
    LinkedinIcon,
  } from "react-share"; 

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



const ShareDialog = ({ open, setOpen }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const shareUrl = window.location.href;
  const title = "HALA ALABED ART WORK";
  return (
    <>
      <BootstrapDialog
        fullWidth
        sx={{
          width: "100%",
          height: "100%",
        }}
        onClose={handleClose}
        open={open}
      >
        <BootstrapDialogTitle
          sx={{
            font: "normal normal normal 1.5rem Red Hat Text",
            color: "var(--unnamed-color-2c2a26)",
            letterSpacing: 0.6,
            textTransform: "uppercase",
            opacity: 1,
          }}
          onClose={handleClose}
        >
          Share Form 
        </BootstrapDialogTitle>
        <Box
          sx={{
            p: 4,
          }}
        >
         <Grid container 
         sx={{ 
            justifyContent:"space-around"
          }}
         >
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <WhatsappShareButton url={shareUrl} title={title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareUrl} subject={title}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <LinkedinShareButton url={shareUrl} subject={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        </Grid>
        </Box>
      </BootstrapDialog>
    </>
  );
};

export default ShareDialog;

import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Img = styled("img")({
  display: "block",
  width: "100%",
  objectFit: "cover",
  margin: "auto",
});


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

const PhotoDialog = ({ open, setOpen, imageId }) => {
  function isValidEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/; // Matches a 10-digit phone number
    return phoneRegex.test(phoneNumber);
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [getImage, setGetImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const checkFormValues = useMemo(() => {
    return (
      formValues.name &&
      isValidEmail(formValues.email)&&
      isValidPhoneNumber(formValues.phone) &&
      formValues.message
    );
  }, [formValues]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!checkFormValues) {
      setSnackbarMessage(
        "Please fill in all fields correctly and make the email and the phone number valid."
      );
      setSnackbarOpen(true);
      return;
    }
    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("phone", formValues.phone);
    formData.append("message", formValues.message);
    formData.append("imageId", imageId);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("/api/request/enquire", formData, config)
      .then((response) => {
      setOpen(false);
      setSnackbarMessage("Enquire sent successfully");
      setSnackbarOpen(true);
        setFormValues({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setSnackbarMessage("Error sending the enquire");
        setSnackbarOpen(true);
      });
  };

  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };


  const getAImage = async (imageId) => {
    try {
      const res = await axios.get(`/api/image/${imageId}`, config);
      console.log(res.data);
      setGetImage(res.data.data);
      setLoading(true);
    } catch (err) {
      alert(err.message);
    }
  };
  useEffect(() => {
    imageId && getAImage(imageId);
  }, [imageId]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };
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
          ENQUIRY Form
        </BootstrapDialogTitle>

        <Box
          sx={{
            p: 4,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 1,
              flexGrow: 1,
              border: "0.5px solid var(--unnamed-color-e2e1df)",
              background:
                "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
              borderRadius: 2,
            }}
          >
            <Grid container spacing={2}>
              <Grid item sm={3}>
                {loading ? (
                  <Img
                  sx={{ height: "100%" }}
                  src={`/${getImage.imagePath}`}
                  alt=""
                />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <CircularProgress style={{ color: "var(--unnamed-color-9f8965)" }}/>
                  </Box>
                  
                )}
              </Grid>
              <Grid item xs={9}>
                <Typography
                  sx={{
                    font: "var(--unnamed-font-style-normal) normal 300 0.8rem Red Hat Text",
                    color: "var(--unnamed-color-afaba1)",
                    letterSpacing: 0.33,
                    opacity: 1,
                  }}
                >
                  {getImage.title},
                  <br /> {getImage.description} <br /> {getImage.size} <br /> 22
                  1/8x 29 7/8 in <br /> Framed
                </Typography>
              </Grid>
            </Grid>
          </Paper>
          {/* name grid */}
          <Grid container sx={{ marginTop: "1rem" }} spacing={2}>
            <Grid item sm={4} xs={12}>
              <Typography
                sx={{
                  color: "var(--unnamed-color-afaba1)",
                  font: "normal normal 300 1rem Red Hat Text",
                  letterSpacing: 0.42,
                  opacity: 1,
                }}
              >
                Name *
              </Typography>
            </Grid>
            <Grid item sm={8} xs={12}>
              <TextField
                required={true}
                variant="outlined"
                fullWidth
                value={formValues.name}
                onChange={(e) => {
                  setFormValues((v) => {
                    return {
                      ...v,
                      name: e.target.value,
                    };
                  });
                }}
                InputLabelProps={{
                  sx: {
                    color: "var(--unnamed-color-afaba1)",
                    border: "0.5px solid var(--unnamed-color-e2e1df)",
                    background:
                      "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* email grid */}

            <Grid item sm={4} xs={12}>
              <Typography
                sx={{
                  color: "var(--unnamed-color-afaba1)",
                  font: "normal normal 300 1rem Red Hat Text",
                  letterSpacing: 0.42,
                  opacity: 1,
                }}
              >
                Email *
              </Typography>
            </Grid>
            <Grid item sm={8} xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                value={formValues.email}
                onChange={(e) => {
                  setFormValues((v) => {
                    return {
                      ...v,
                      email: e.target.value,
                    };
                  });
                }}
                InputLabelProps={{
                  sx: {
                    color: "var(--unnamed-color-afaba1)",
                    border: "0.5px solid var(--unnamed-color-e2e1df)",
                    background:
                      "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* phone grid */}
            <Grid item sm={4} xs={12}>
              <Typography
                sx={{
                  color: "var(--unnamed-color-afaba1)",
                  font: "normal normal 300 1rem Red Hat Text",
                  letterSpacing: 0.42,
                  opacity: 1,
                }}
              >
                Phone
              </Typography>
            </Grid>
            <Grid item sm={8} xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                value={formValues.phone}
                onChange={(e) => {
                  setFormValues((v) => {
                    return {
                      ...v,
                      phone: e.target.value,
                    };
                  });
                }}
                InputLabelProps={{
                  sx: {
                    color: "var(--unnamed-color-afaba1)",
                    border: "0.5px solid var(--unnamed-color-e2e1df)",
                    background:
                      "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* massage grid */}
            <Grid item sm={4} xs={12}>
              <Typography
                sx={{
                  color: "var(--unnamed-color-afaba1)",
                  font: "normal normal 300 1rem Red Hat Text",
                  letterSpacing: 0.42,
                  opacity: 1,
                }}
              >
                Message
              </Typography>
            </Grid>
            <Grid item sm={8} xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                maxRows={5}
                rows={5}
                value={formValues.message}
                onChange={(e) => {
                  setFormValues((v) => {
                    return {
                      ...v,
                      message: e.target.value,
                    };
                  });
                }}
                InputLabelProps={{
                  sx: {
                    color: "var(--unnamed-color-afaba1)",
                    border: "0.5px solid var(--unnamed-color-e2e1df)",
                    background:
                      "var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box",
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            <Grid item sm={4} xs={12}></Grid>
            <Grid item sm={8} xs={12}>
              <Typography sx={{ mb: 4 }}>
                By submitting this form you will be added <br />
                to our mailing list
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={onFormSubmit}
                sx={{
                  "&:hover": {
                    backgroundColor: "var(--unnamed-color-afaba1)",
                    opacity: 0.7,
                  },
                  background:
                    "var(--unnamed-color-afaba1) 0% 0% no-repeat padding-box",
                  color: "#FCFCFC",
                  font: "var(--unnamed-font-style-normal) normal 300 12px/16px Red Hat Text",
                  letterSpacing: 1.8,
                  textTransform: "uppercase",
                  opacity: 1,
                  height: "3rem",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                SEND ENQUIRY
              </Button>
            </Grid>
          </Grid>
        </Box>
      </BootstrapDialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={
            snackbarMessage.includes("successfully") ? "success" : "error"
          }
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default PhotoDialog;

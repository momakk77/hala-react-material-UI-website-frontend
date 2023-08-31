import React, { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function Contact() {
  const [formValues, setFormValues] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const checkFormValues = useMemo(() => {
    const isValid =
      formValues.name && isValidEmail(formValues.email) && formValues.message;
    setErrors({
      name: !formValues.name,
      email: !formValues.email,
      message: !formValues.message,
    });
    return isValid;
  }, [formValues]);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      var response = await axios.post("/api/email/send", formData, config);
      console.log("Email sent successfully");
      setSnackbarMessage("Email sent successfully");
      setSnackbarOpen(true);
      setFormValues({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      setSnackbarMessage("Error sending email");
      setSnackbarOpen(true);
    }
  };
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <>
      <Grid container spacing={8} sx={{ paddingBottom: "7rem" }}>
        <Grid item sm={6}>
          <Box>
            <Typography
              sx={{
                paddingBottom: "3.5rem",
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 2rem Red Hat Text",
                color: "var(--unnamed-color-2c2a26)",
                letterSpacing: 6,
                textTransform: "uppercase",
                opacity: 1,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              sm={6}
              sx={{
                paddingBottom: "2rem",
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 1rem Red Hat Text",
                color: "var(--unnamed-color-2c2a26)",
                letterSpacing: 0,
                opacity: 1,
              }}
            >
              For all sales and commission inquiries, please contact:
            </Typography>

            <Typography
              sx={{
                marginBottom: "1rem",
                font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 1rem Red Hat Text",
                color: "var(--unnamed-color-2c2a26)",
                letterSpacing: 0,
                opacity: 1,
              }}
            >
              hala.art@gmail.com <br />
              Istanbul - Turkey
            </Typography>
          </Box>
        </Grid>
        <Grid container item sm={6} spacing={2}>
          <Grid item sm={6} sx={{ width: "100%" }}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              error={errors.name}
              helperText={errors.name && "Name is required"}
              value={formValues.name}
              onChange={(e) => {
                setFormValues((v) => {
                  return {
                    ...v,
                    name: e.target.value,
                  };
                });
              }}
              inputProps={{ style: { height: "40px" } }}
              InputLabelProps={{
                sx: {
                  color: "var(--unnamed-color-afaba1)",
                  paddingTop: "15px",
                },
              }}
            />
          </Grid>
          <Grid item sm={6} sx={{ width: "100%" }}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              helperText={errors.email && "Please enter a valid email"}
              error={errors.email}
              value={formValues.email}
              onChange={(e) => {
                setFormValues((v) => {
                  return {
                    ...v,
                    email: e.target.value,
                  };
                });
              }}
              inputProps={{ style: { height: "40px" } }}
              InputLabelProps={{
                sx: {
                  color: "var(--unnamed-color-afaba1)",
                  paddingTop: "15px",
                },
              }}
            />
          </Grid>
          <Grid item sm={12} sx={{ width: "100%" }}>
            <TextField
              variant="outlined"
              multiline
              rows={3}
              maxRows={5}
              placeholder="Write your message here"
              fullWidth
              helperText={errors.message && "Message is required"}
              error={errors.message}
              value={formValues.message}
              onChange={(e) => {
                setFormValues((v) => {
                  return {
                    ...v,
                    message: e.target.value,
                  };
                });
              }}
              inputProps={{ style: { height: "10rem" } }}
            />
          </Grid>
          <Grid item sm={12} sx={{ width: "100%" }}>
            <Button
              fullWidth
              variant="contained"
              disableElevation
              disabled={!checkFormValues}
              onClick={onFormSubmit}
              sx={{
                height: "3rem",
                "&:hover": {
                  backgroundColor: "var(--unnamed-color-9f8965)",
                  opacity: 0.7,
                },
                background:
                  "var(--unnamed-color-9f8965) 0% 0% no-repeat padding-box",
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}

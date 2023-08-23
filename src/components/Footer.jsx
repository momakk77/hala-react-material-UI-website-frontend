import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const navigate = useNavigate();
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: { xl: "100rem" },
        marginTop: "9rem",
        background: { xs: "#292929", sm: "none" },
        borderTop: "1px solid var(--unnamed-color-e2e1df)",
        marginBlockEnd: { sm: "1rem", xs: "0" },
      }}
    >
      <Grid
        container
        sx={{
          alignItems: "baseline",
        }}
      >
        <Grid
          item
          sm={6}
          sx={{
            display: { xs: "none", sm: "flex" },
            bgcolor: "white",
            py: 0,
          }}
        >
          <Box>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-16)/var(--unnamed-line-spacing-36) Red Hat Text",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.8,
                opacity: 1,
                marginTop: "5rem",
              }}
            >
               Email: hala.alabed19@gmail.com 
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 var(--unnamed-font-size-16)/var(--unnamed-line-spacing-36) Red Hat Text",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.8,
                opacity: 1,
                marginBottom: "7rem",
              }}
            >
              Address: Istanbul- Doha
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/var(--unnamed-line-spacing-26) Red Hat Text",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.7,
                opacity: 1,
                textTransform: "uppercase",
                marginBottom: "5rem",
              }}
            >
              © 2020 — ALL RIGHTS RESERVED
            </Typography>
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box
            sx={{
              display: { xs: "none", sm: "flex", gap: "13px" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              href="https://www.behance.net/halaAlabed"
              sx={{
                width: "40px",
                height: "40px",
                bgcolor: "var(--unnamed-color-9f8965)",
                color: "white",
                "&:hover": {
                  backgroundColor: "var(--unnamed-color-9f8965)",
                  opacity: 0.7,
                },
              }}
              aria-label="Behance"
            >
              <FontAwesomeIcon icon={faBehance} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/hala-al-abed-bbb689107"
              sx={{
                "&:hover": {
                  backgroundColor: "var(--unnamed-color-9f8965)",
                  opacity: 0.7,
                },
                width: "40px",
                height: "40px",
                bgcolor: "var(--unnamed-color-9f8965)",
                color: "white",
              }}
              aria-label="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </IconButton>
            <IconButton
              href="https://instagram.com/hala.al.abed?igshid=OGQ5ZDc2ODk2ZA=="
              sx={{
                "&:hover": {
                  backgroundColor: "var(--unnamed-color-9f8965)",
                  opacity: 0.7,
                },
                width: "40px",
                height: "40px",
                bgcolor: "var(--unnamed-color-9f8965)",
                color: "white",
              }}
              aria-label="instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
          </Box>
        </Grid>
        {/* xs footer */}
        <Container>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", sm: "none" },
              marginLeft: "0.3rem",
            }}
          ></Grid>
          <Grid container></Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", sm: "none", },
            }}
          >
            <Box>
              <Typography
                sx={{
                  font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 13px/17px Red Hat Text",
                  color: "var(--unnamed-color-ffffff)",
                  textAlign: "left",
                  letterSpacing: 0.39,
                  textTransform: "capitalize",
                  opacity: 1,
                  marginTop: "3rem",
                }}
              >
                Contact
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "initial", sm: "none" },
              marginLeft: "0.3rem",
            }}
          >
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/25px Red Hat Text",
                textAlign: "left",
                letterSpacing: 0.7,
                color: "#C4C4C4",
                opacity: 1,
              }}
            >
              Email: hala.alabed19@gmail.com
            </Typography>
            <Typography
              sx={{
                font: "var(--unnamed-font-style-normal) normal 300 14px/25px Red Hat Text",
                textAlign: "left",
                letterSpacing: 0.7,
                color: "#C4C4C4",
                opacity: 1,
                marginBottom: "2rem",
              }}
            >
              Address: Istanbul- Doha
            </Typography>
          </Grid>
          <Grid item xs={12} borderTop={{xs:"1px solid white", sm: "none"}}>
            <Box
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
                display: { xs: "flex", sm: "none", gap: "13px" },
                justifyContent: "center",
              }}
            >
              <IconButton
              href="https://www.behance.net/halaAlabed"
                sx={{
                  width: "40px",
                  height: "40px",
                  bgcolor: "#9F8965",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#9F8965",
                    opacity: 0.7,
                  },
                }}
                aria-label="Behance"
              >
                <FontAwesomeIcon icon={faBehance} />
              </IconButton>
              <IconButton
              href="https://www.linkedin.com/in/hala-al-abed-bbb689107"
                sx={{
                  "&:hover": {
                    backgroundColor: "#9F8965",
                    opacity: 0.7,
                  },
                  width: "40px",
                  height: "40px",
                  bgcolor: "#9F8965",
                  color: "white",
                }}
                aria-label="Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconButton>
              <IconButton
              href="https://instagram.com/hala.al.abed?igshid=OGQ5ZDc2ODk2ZA=="
                sx={{
                  "&:hover": {
                    backgroundColor: "#9F8965",
                    opacity: 0.7,
                  },
                  width: "40px",
                  height: "40px",
                  bgcolor: "#9F8965",
                  color: "white",
                }}
                aria-label="instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </IconButton>
            </Box>
            <Typography
              sx={{
                display: { xs: "flex", sm: "none" },
                font: "var(--unnamed-font-style-normal) normal 300 11px/var(--unnamed-line-spacing-24) Red Hat Text",
                textAlign: "center",
                color: "#C4C4C4",
                letterSpacing: 0.55,
                textTransform: "uppercase",
                opacity: 1,
                marginTop: "1.5rem",
                marginBottom: "3rem",
                justifyContent: "center",
              }}
            >
              © 2020 — ALL RIGHTS RESERVED
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Container>
  );
}
export default Footer;

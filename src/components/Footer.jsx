import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonBase from "@mui/material/ButtonBase";
import { CheckBox } from "@mui/icons-material";

function Footer() {
  const navigate = useNavigate();
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: { sm: "43rem", md: "55rem", lg: "79rem", xl: "118rem" },
        marginTop: "9rem",
        background: { xs: "#B28AF8 0% 0% no-repeat padding-box", sm: "none" },
        borderTop: { sm: "1px solid var(--unnamed-color-e2e1df)" },
        marginBlockEnd: { sm: "1rem" },
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
              Email: example@gmail.com
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
              Address: Charlotte, North Carolina, United States
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
              aria-label="facebook"
            >
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton
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
              aria-label="twitter"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
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
              <InstagramIcon />
            </IconButton>
            <IconButton
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
              aria-label="youtube"
            >
              <YouTubeIcon />
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
          >
            <Box>
              <Typography
                sx={{
                  font: "normal normal normal 1.5rem Bodoni Moda",
                  color: "#FFFFFF",
                  letterSpacing: 0.6,
                  opacity: 1,
                  marginTop: "10rem",
                  textTransform: "capitalize",
                }}
              >
                COMPANY
              </Typography>
            </Box>
          </Grid>
          <Grid container>
            <Grid
              xs={6}
              sx={{
                display: { xs: "block", sm: "none" },
                marginLeft: "0.3rem",
              }}
            >
              <Box>
                <ButtonBase onClick={() => navigate("/about")}>
                  <Typography
                    sx={{
                      font: "normal normal normal 1.1rem Bodoni Moda",
                      color: "var(--unnamed-color-7f7c76)",
                      letterSpacing: 0.48,
                      opacity: 1,
                      marginTop: "2rem",
                    }}
                  >
                    About Us
                  </Typography>
                </ButtonBase>
              </Box>
              <Box>
                <ButtonBase onClick={() => navigate("/contact")}>
                  <Typography
                    sx={{
                      font: "normal normal normal 1.1rem Bodoni Moda",
                      color: "var(--unnamed-color-7f7c76)",
                      letterSpacing: 0.48,
                      opacity: 1,
                      marginTop: "1.7rem",
                    }}
                  >
                    Contact us
                  </Typography>
                </ButtonBase>
              </Box>

              <Typography
                sx={{
                  font: "normal normal normal 1.1rem Bodoni Moda",
                  color: "var(--unnamed-color-7f7c76)",
                  letterSpacing: 0.48,
                  opacity: 1,
                  marginTop: "1.7rem",
                }}
              >
                Careers
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 1.1rem Bodoni Moda",
                  color: "var(--unnamed-color-7f7c76)",
                  letterSpacing: 0.48,
                  opacity: 1,
                  marginTop: "1.7rem",
                }}
              >
                Support
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                display: { xs: "block", sm: "none" },
                marginLeft: "2rem",
              }}
            >
              <Typography
                sx={{
                  font: "normal normal normal 1.1rem Bodoni Moda",
                  color: "var(--unnamed-color-7f7c76)",
                  letterSpacing: 0.48,
                  opacity: 1,
                  marginTop: "2rem",
                }}
              >
                FAQ
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 1.1rem Bodoni Moda",
                  color: "var(--unnamed-color-7f7c76)",
                  letterSpacing: 0.48,
                  opacity: 1,
                  marginTop: "1.7rem",
                }}
              >
                Terms
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 1.1rem Bodoni Moda",
                  color: "var(--unnamed-color-7f7c76)",
                  letterSpacing: 0.48,
                  opacity: 1,
                  marginTop: "1.7rem",
                }}
              >
                Privacy
              </Typography>
              <Typography
                sx={{
                  font: "normal normal normal 1.1rem Bodoni Moda",
                  color: "var(--unnamed-color-7f7c76)",
                  letterSpacing: 0.48,
                  opacity: 1,
                  marginTop: "1.7rem",
                }}
              >
                Blog
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "block", sm: "none" },
              marginLeft: "0.3rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  font: "normal normal normal 1.5rem Bodoni Moda",
                  color: "#FFFFFF",
                  letterSpacing: 0.6,
                  opacity: 1,
                  marginTop: "4rem",
                  textTransform: "capitalize",
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
              display: { xs: "block", sm: "none" },
              marginLeft: "0.3rem",
              borderBottom: "1px solid #DCC7FF",
            }}
          >
            <Typography
              sx={{
                font: "normal normal normal 1.1rem Bodoni Moda",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.48,
                opacity: 1,
                marginTop: "2rem",
              }}
            >
              Phone: +1 605 722 2032
            </Typography>
            <Typography
              sx={{
                font: "normal normal normal 1.1rem Bodoni Moda",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.48,
                opacity: 1,
                marginTop: "1.3rem",
              }}
            >
              Email: example@gmail.com
            </Typography>
            <Typography
              sx={{
                font: "normal normal normal 1.1rem Bodoni Moda",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.48,
                opacity: 1,
                marginTop: "1.3rem",
              }}
            >
              Address: Charlotte, North Carolina,
            </Typography>
            <Typography
              sx={{
                font: "normal normal normal 1.1rem Bodoni Moda",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.48,
                opacity: 1,
                marginTop: "1.3rem",
                marginBottom: "2rem",
              }}
            >
              United States
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                marginTop: "3rem",
                display: { xs: "flex", sm: "none", gap: "13px" },
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  width: "40px",
                  height: "40px",
                  bgcolor: "#C4A3FD",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#C4A3FD",
                    opacity: 0.7,
                  },
                }}
                aria-label="facebook"
              >
                <FacebookRoundedIcon />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#C4A3FD",
                    opacity: 0.7,
                  },
                  width: "40px",
                  height: "40px",
                  bgcolor: "#C4A3FD",
                  color: "white",
                }}
                aria-label="twitter"
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#C4A3FD",
                    opacity: 0.7,
                  },
                  width: "40px",
                  height: "40px",
                  bgcolor: "#C4A3FD",
                  color: "white",
                }}
                aria-label="instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: "#C4A3FD",
                    opacity: 0.7,
                  },
                  width: "40px",
                  height: "40px",
                  bgcolor: "#C4A3FD",
                  color: "white",
                }}
                aria-label="youtube"
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
            <Typography
              sx={{
                display: { xs: "flex", sm: "none" },
                font: "normal normal normal 1.1rem Bodoni Moda",
                color: "var(--unnamed-color-7f7c76)",
                letterSpacing: 0.48,
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

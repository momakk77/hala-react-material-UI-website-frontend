import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")((props) => ({
  display: "block",
  width: "100%",
  objectFit: "cover",
  maxWidth: "28rem",
  height: "20rem",
  [props.theme.breakpoints.up("sm")]: {
    height: "42rem",
  },
  
}));

export default function About() {
  return (
    <Grid container sx={{ paddingTop: "3.5rem" }} spacing={2}>
      <Grid item sm={6}>
        <Img
          src="images/547711.jpg"
          alt=""
        />
      </Grid>
      <Grid item sm={6}>
        <Typography
          sx={{
            paddingTop: "5.2rem",
            color: "var(--unnamed-color-2c2a26)",
            opacity: 1,
            letterSpacing: 6,
            font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 1.8rem Red Hat Text",
          }}
        >
          HALA ALABED
        </Typography>
        <Typography
          sx={{
            paddingTop: "5.2rem",
            color: "var(--unnamed-color-2c2a26)",
            opacity: 1,
            letterSpacing: 0,
            font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-16)/1.8 Red Hat Text",
          }}
        >
          I am a Syrian self-taught artist based in Istanbul, Turkey. My art aim
          to explore the intersection between identity, culture and societal
          norms. Since I began painting in 2014, my work has been focused on
          capturing the essence of the human form in different states of being,
          from moments of contemplation to moments of exuberance. I paint
          inspiration from my personal experiences and observations of the world
          around me to create pieces that express the complexity and beauty of
          the human condition. My hope is that my painting can evoke emotions
          and spark conversations that challenge our understanding of ourselves
          and the world we live in.
        </Typography>
      </Grid>
    </Grid>
  );
}

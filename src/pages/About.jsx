import * as React from "react";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const Img = styled("img")((props) => ({
  display: "block",
  width: "100%",
  objectFit: "cover",
  maxWidth: "30rem",
  height: "20rem",
  [props.theme.breakpoints.up("xs")]: {
    height: "25rem",
    width: "100%" ,

  },
  [props.theme.breakpoints.up("sm")]: {
    height: "30rem",
    width: "100%",
  },
  [props.theme.breakpoints.up("md")]: {
    height: "50rem",
    width: "100%" 
  },


}));

export default function About() {
  return (
   
    <Grid container sx={{ paddingTop: "3.5rem" }} spacing={2}>
      <Grid item sm={12} md={6} xl={5} xs={12}>
        <Img src="images/about.jpeg" alt="" />
      </Grid>
      <Grid item sm={12} md={6} xs={12}>
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
          from moments of contemplation to moments of exuberance.<br/>
          I paint inspiration from my personal experiences and observations of the world
          around me to create pieces that express the complexity and beauty of
          the human condition. My hope is that my painting can evoke emotions
          and spark conversations that challenge our understanding of ourselves
          and the world we live in. <br/>  <br/> 
          EXHIBITIONS <br/> 2018 , The exhibition at the
          royal theater, The Hague, Netherlands <br/> 2018 , Collateral Damage, New
          York, United States <br/> 2023 , Brighter Tomorrow Exhibition, Brussels,
          Belgium
        </Typography>
      </Grid>
    </Grid>
  );
}

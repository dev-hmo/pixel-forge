import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import HeroImg from "../assets/Hero.png";

const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 6, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Unleash Your Online Potential with Our Creative Web Agency
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mb: 4,
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Let our creative web agency help you reach new heights online.
              From custom web design to development services, we've got the
              skills and experience to bring your vision to life.
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  fontWeight: 600,
                }}
              >
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  fontWeight: 600,
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={HeroImg}
              alt="Creative Web Agency"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

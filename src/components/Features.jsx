import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { FeatureDesign, FeatureResponsive, FeatureSEO } from "../assets";

const iconMap = {
  design: FeatureDesign,
  responsive: FeatureResponsive,
  seo: FeatureSEO,
};

const Features = ({ features = [] }) => {
  return (
    <Box component="section" py={10} bgcolor="background.default">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={700} mb={2}>
            Our Services
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Comprehensive solutions for your digital needs
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          {features.map((feature) => (
            <Grid item xs={12} md={4} key={feature.id}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src={iconMap[feature.icon]}
                  alt={feature.title}
                  sx={{ height: 80, mb: 3, mx: "auto" }}
                />
                <Typography variant="h5" gutterBottom fontWeight={600}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;

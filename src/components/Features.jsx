import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import { FeatureDesign, FeatureResponsive, FeatureSEO } from "../assets";

const iconMap = {
  design: FeatureDesign,
  responsive: FeatureResponsive,
  seo: FeatureSEO,
};

const Features = ({ features = [] }) => {
  if (!features || features.length === 0) {
    return (
      <Box py={10} textAlign="center">
        <Typography variant="h6">No features to display</Typography>
      </Box>
    );
  }

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
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon];
            if (!IconComponent) return null;

            return (
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
                    src={IconComponent}
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
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.oneOf(["design", "responsive", "seo"]).isRequired,
    })
  ),
};

Features.defaultProps = {
  features: [],
};

export default Features;

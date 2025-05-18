import React from "react";
import { Container, Typography, Grid, Box, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import AboutCard from "./Card/AboutCard";

const AboutSite = ({ services = [] }) => {
  const theme = useTheme();

  if (!services || services.length === 0) {
    return (
      <Box py={10} textAlign="center">
        <Typography variant="h6">
          No services available at the moment
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        py: 10,
        background: "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)",
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={800} mb={2}>
            Enterprise IT Solutions
          </Typography>
          <Typography variant="h5" fontWeight={400} maxWidth={800} mx="auto">
            Transform your business with our comprehensive technology services
          </Typography>
        </Box>

        {services.map((service) => (
          <Box
            key={service.id}
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: 4,
              p: 6,
              mb: 6,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
            }}
          >
            <Typography variant="h3" color="#1E293B" mb={2}>
              {service.category}
            </Typography>
            <Typography color="#475569" mb={4}>
              {service.description}
            </Typography>

            <Grid container spacing={4}>
              {service.items.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <AboutCard {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

AboutSite.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          icon: PropTypes.element.isRequired,
        })
      ).isRequired,
    })
  ),
};

AboutSite.defaultProps = {
  services: [],
};

export default AboutSite;

import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import TestimonialsCardComponent from "./Card/TestimonialsCardComponent";

const testimonials = [
  {
    id: 1,
    text: "The progress tracker is fantastic...",
    name: "Fatima Khoury",
    handle: "dixiovy_cursims_98",
    initials: "FK",
  },
  {
    id: 2,
    text: "The progress tracker is fantastic...",
    name: "Hassan Ali",
    handle: "turbukm_tuncom_29",
    initials: "HA",
  },
  {
    id: 3,
    text: "The progress tracker is fantastic...",
    name: "Jorge Martinez",
    handle: "nefarious_jayiposna_91",
    initials: "JM",
  },
  {
    id: 4,
    text: "The progress tracker is fantastic...",
    name: "Nicolás Sánchez",
    handle: "pervasive_liktor_83",
    initials: "NS",
  },
  {
    id: 5,
    text: "The progress tracker is fantastic...",
    name: "Noel Jensen",
    handle: "nefarious_zhap_47",
    initials: "NJ",
  },
  {
    id: 6,
    text: "The progress tracker is fantastic...",
    name: "Ahmad Khan",
    handle: "antie_circus_76",
    initials: "AK",
  },
];

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: "#f8fafc", py: 8, px: 2, color: "#1e293b" }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 600,
            color: "#64748b",
            letterSpacing: "0.1em",
            mb: 2,
            textTransform: "uppercase",
            fontSize: "0.875rem",
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", sm: "2.5rem" },
            mb: 4,
          }}
        >
          Our trusted clients
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <TestimonialsCardComponent {...testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

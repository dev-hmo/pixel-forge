// src/components/Testimonials.jsx
import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import TestimonialsCardComponent from "./Card/TestimonialsCardComponent";
import { testimonialsData } from "../constants/data";

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
        {testimonialsData.map((testimonial) => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <TestimonialsCardComponent
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              initials={testimonial.initials}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;

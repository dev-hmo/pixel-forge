import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const CTA = ({ id }) => {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: 10,
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Ready to Transform Your Online Presence?
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 5, opacity: 0.9 }}>
          Contact us today for a free consultation and let's discuss how we can
          help your business grow.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            px: 6,
            py: 1.5,
            fontWeight: 600,
            fontSize: "1.1rem",
            "&:hover": {
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default CTA;

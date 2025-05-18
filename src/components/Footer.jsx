import React from "react";
import { Typography, Button, TextField, Box, Grid } from "@mui/material";
import ScrollLink from "./ScrollLink";
import {
  ArrowForward,
  GitHub,
  YouTube,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper" }}>
      {/* Footer Content */}
      <Box
        sx={{ py: 6, px: 2, borderBottom: "1px solid", borderColor: "divider" }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          maxWidth="lg"
          mx="auto"
        >
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              ABOUT PIXEL FORGE
            </Typography>
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              sx={{ display: "block", mb: 1.5, color: "text.secondary" }}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="features"
              smooth={true}
              duration={500}
              sx={{ display: "block", mb: 1.5, color: "text.secondary" }}
            >
              Features
            </ScrollLink>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              PRODUCT
            </Typography>
            <ScrollLink
              to="pricing"
              smooth={true}
              duration={500}
              sx={{ display: "block", mb: 1.5, color: "text.secondary" }}
            >
              Pricing
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              sx={{ display: "block", mb: 1.5, color: "text.secondary" }}
            >
              Contact
            </ScrollLink>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              RESOURCES
            </Typography>
            <Box
              component="a"
              href="#"
              sx={{ display: "block", mb: 1.5, color: "text.secondary" }}
            >
              Blog
            </Box>
            <Box
              component="a"
              href="#"
              sx={{ display: "block", mb: 1.5, color: "text.secondary" }}
            >
              Documentation
            </Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
              NEWSLETTER
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                placeholder="Your email"
                size="small"
                sx={{ flexGrow: 1 }}
              />
              <Button variant="contained" color="primary" size="small">
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright */}
      <Box sx={{ py: 3, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          © {new Date().getFullYear()} Pixel Forge. All rights reserved.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Box component="a" href="#" sx={{ color: "text.secondary" }}>
            <GitHub fontSize="small" />
          </Box>
          <Box component="a" href="#" sx={{ color: "text.secondary" }}>
            <Twitter fontSize="small" />
          </Box>
          <Box component="a" href="#" sx={{ color: "text.secondary" }}>
            <YouTube fontSize="small" />
          </Box>
          <Box component="a" href="#" sx={{ color: "text.secondary" }}>
            <LinkedIn fontSize="small" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

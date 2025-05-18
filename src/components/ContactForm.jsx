import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const ContactForm = ({ id }) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box maxWidth="lg" mx="auto" px={4}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 700,
            color: "text.primary",
          }}
        >
          Contact Us
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
              >
                Get in Touch
              </Typography>
              <Typography sx={{ mb: 4, color: "text.secondary" }}>
                Have questions or want to discuss your project? Fill out the
                form and our team will get back to you within 24 hours.
              </Typography>

              <Box component="form" sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                  type="email"
                  required
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  margin="normal"
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{ mb: 3 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    mt: 2,
                    px: 4,
                    fontWeight: 600,
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                >
                  Send Message
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: 4,
                  p: 4,
                  height: "100%",
                  color: "#ffffff",
                  boxShadow: 3,
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Contact Information
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Email
                  </Typography>
                  <Typography>contact@pixelforge.com</Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Phone
                  </Typography>
                  <Typography>+1 (555) 123-4567</Typography>
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, mb: 1 }}
                  >
                    Office Hours
                  </Typography>
                  <Typography>Monday - Friday: 9am - 6pm</Typography>
                  <Typography>Saturday: 10am - 4pm</Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactForm;

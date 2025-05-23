import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import ScrollLink from "./ScrollLink";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const navItems = [
    { name: "Home", path: "hero" },
    { name: "Features", path: "features" },
    { name: "Pricing", path: "pricing" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Pixel Forge"
              sx={{ height: 40 }}
            />
            <ScrollLink
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              sx={{
                fontWeight: 700,
                color: "primary.main",
                textDecoration: "none",
                fontSize: "1.25rem",
                cursor: "pointer",
              }}
            >
              Pixel Forge
            </ScrollLink>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.path}
                smooth={true}
                duration={500}
                offset={-70}
                sx={{
                  color: "text.primary",
                  fontWeight: 600,
                  position: "relative",
                  fontSize: "1rem",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -8,
                    left: 0,
                    width: 0,
                    height: 2,
                    bgcolor: "primary.main",
                    transition: "width 0.3s ease",
                  },
                  "&:hover:after": {
                    width: "100%",
                  },
                }}
              >
                {item.name}
              </ScrollLink>
            ))}
            <Button
              variant="contained"
              color="primary"
              component={ScrollLink}
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              sx={{
                px: 3,
                py: 1,
                fontWeight: 600,
                fontSize: "1rem",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(69, 76, 204, 0.2)",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 16px rgba(69, 76, 204, 0.3)",
                  backgroundColor: "primary.dark",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get in touch
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

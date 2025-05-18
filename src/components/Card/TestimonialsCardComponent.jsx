import React from "react";
import { Box, Avatar, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const TestimonialsCardComponent = ({ text, name, handle, initials }) => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      sx={{
        backgroundColor: "white",
        borderRadius: 3,
        p: 4,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: 3,
          padding: "2px",
          background: "transparent",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          transition: "all 0.3s ease",
        },
        "&:hover::before": {
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${
            theme.palette.secondary?.main || "#4f46e5"
          })`,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.1rem",
          lineHeight: 1.6,
          mb: 3,
          color: "#475569",
          flexGrow: 1,
        }}
      >
        {text}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: "auto",
        }}
      >
        <Avatar
          sx={{
            width: 56,
            height: 56,
            mr: 2,
            bgcolor: "primary.main",
            color: "white",
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          {initials}
        </Avatar>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: "#1e293b",
              fontSize: "1.1rem",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "#64748b",
              fontSize: "0.9rem",
            }}
          >
            {handle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsCardComponent;

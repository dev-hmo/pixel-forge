import React from "react";
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";
import PropTypes from "prop-types";

const TestimonialsCardComponent = ({ text, name, role, initials }) => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "none",
        border: "1px solid #e2e8f0",
        borderRadius: 2,
        p: 3,
        "&:hover": {
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardContent>
        <Typography variant="body1" color="text.secondary" mb={3}>
          "{text}"
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            sx={{
              bgcolor: "#6366f1",
              width: 40,
              height: 40,
              mr: 2,
              fontSize: "0.875rem",
              fontWeight: 500,
            }}
          >
            {initials}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

TestimonialsCardComponent.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  initials: PropTypes.string.isRequired,
};

export default TestimonialsCardComponent;

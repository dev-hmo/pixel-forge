import React from "react";
import { styled } from "@mui/material/styles";
import { Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  borderRadius: 12,
  backgroundColor: "#F8FAFC",
  position: "relative",
  overflow: "hidden",
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: theme.transitions.duration.standard,
  }),
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 15px 30px rgba(29, 78, 216, 0.15)",
  },
}));

const TitleWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: 24,
});

const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 56,
  height: 56,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.primary.main,
  marginRight: theme.spacing(3),
  flexShrink: 0,
}));

const AboutCard = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <ServiceCard elevation={0}>
        <TitleWrapper>
          <IconContainer>
            {React.cloneElement(icon, { style: { fontSize: "1.75rem" } })}
          </IconContainer>
          <Typography
            variant="h5"
            component="h4"
            sx={{
              fontWeight: 700,
              color: "#1E293B",
              fontSize: "1.3rem",
            }}
          >
            {title}
          </Typography>
        </TitleWrapper>
        <Typography
          variant="body1"
          sx={{
            color: "#475569",
            lineHeight: 1.7,
            mb: 3,
            fontSize: "1.05rem",
          }}
        >
          {description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            color: "primary.main",
            fontWeight: 600,
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          component={motion.div}
          whileHover={{ x: 4 }}
        >
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 8 }}
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Typography>
      </ServiceCard>
    </motion.div>
  );
};

export default AboutCard;

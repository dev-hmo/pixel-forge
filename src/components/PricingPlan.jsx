// src/components/PricingSection.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Divider,
  Grid,
  Chip,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { pricingData } from "../constants/data";
import PropTypes from "prop-types";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("pro");

  if (!pricingData || pricingData.length === 0) {
    return (
      <Box py={10} textAlign="center">
        <Typography variant="h6">No pricing plans available</Typography>
      </Box>
    );
  }

  return (
    <Box component="section" py={10} bgcolor="#f8fafc">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" fontWeight={700} mb={2} color="#1e293b">
            Flexible Pricing Plans for Every Need
          </Typography>
          <Typography variant="h5" color="#64748b">
            Choose the plan that best fits your requirements and start
            optimizing your time today!
          </Typography>

          {/* Billing Cycle Toggle */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
              borderRadius: 2,
              overflow: "hidden",
              border: "1px solid #e2e8f0",
              backgroundColor: "white",
              maxWidth: 400,
              mx: "auto",
            }}
          >
            <Button
              sx={{
                px: 3,
                py: 1,
                flex: 1,
                color: billingCycle === "monthly" ? "white" : "primary.main",
                backgroundColor:
                  billingCycle === "monthly" ? "primary.main" : "transparent",
                "&:hover": {
                  backgroundColor:
                    billingCycle === "monthly" ? "primary.dark" : "transparent",
                },
              }}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </Button>
            <Button
              sx={{
                px: 3,
                py: 1,
                flex: 1,
                color: billingCycle === "annually" ? "white" : "primary.main",
                backgroundColor:
                  billingCycle === "annually" ? "primary.main" : "transparent",
                "&:hover": {
                  backgroundColor:
                    billingCycle === "annually"
                      ? "primary.dark"
                      : "transparent",
                },
              }}
              onClick={() => setBillingCycle("annually")}
            >
              Annually (25% off)
            </Button>
          </Box>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pricingData.map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan.id}>
              <Paper
                elevation={plan.highlight ? 6 : 3}
                onClick={() => setSelectedPlan(plan.name)}
                sx={{
                  p: 4,
                  height: "100%",
                  position: "relative",
                  border: `2px solid ${
                    selectedPlan === plan.name
                      ? "#1d4ed8"
                      : plan.highlight
                      ? "primary.main"
                      : "#e2e8f0"
                  }`,
                  backgroundColor: "white",
                  transform:
                    selectedPlan === plan.name ? "scale(1.02)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform:
                      selectedPlan === plan.name
                        ? "scale(1.05)"
                        : "scale(1.03)",
                  },
                  boxShadow:
                    selectedPlan === plan.name
                      ? "0 4px 20px rgba(29, 78, 216, 0.2)"
                      : plan.highlight
                      ? "0 4px 20px rgba(29, 78, 216, 0.15)"
                      : "none",
                }}
              >
                {plan.highlight && (
                  <Chip
                    label="Most Popular"
                    color="primary"
                    sx={{
                      position: "absolute",
                      top: -16,
                      right: 20,
                      fontWeight: 600,
                    }}
                  />
                )}

                <Typography
                  variant="h5"
                  fontWeight={600}
                  color="#1e293b"
                  mb={1}
                >
                  {plan.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {plan.description}
                </Typography>

                <Divider sx={{ my: 3, backgroundColor: "#e2e8f0" }} />

                <Typography
                  variant="h3"
                  fontWeight={700}
                  color="#1e293b"
                  mb={2}
                >
                  {typeof plan.price[billingCycle] === "number"
                    ? `$${plan.price[billingCycle]}`
                    : plan.price[billingCycle]}
                  <Typography
                    component="span"
                    sx={{ fontSize: "1rem", color: "#64748b", fontWeight: 400 }}
                  >
                    {typeof plan.price[billingCycle] === "number" &&
                      `/${billingCycle === "monthly" ? "mo" : "yr"}`}
                  </Typography>
                </Typography>

                <Box sx={{ mt: 3, mb: 2 }}>
                  {plan.features.map((feature, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1.5,
                        color: "#475569",
                      }}
                    >
                      <CheckCircle
                        sx={{ color: "primary.main", mr: 1, fontSize: "1rem" }}
                      />
                      <Typography variant="body2">{feature}</Typography>
                    </Box>
                  ))}
                </Box>

                <Button
                  fullWidth
                  variant={
                    selectedPlan === plan.name ? "contained" : "outlined"
                  }
                  sx={{
                    py: 1.5,
                    mt: 2,
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  {plan.cta}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.shape({
        monthly: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        annually: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
      }).isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
      cta: PropTypes.string.isRequired,
      highlight: PropTypes.bool.isRequired,
    })
  ),
};

PricingSection.defaultProps = {
  plans: [],
};

export default PricingSection;

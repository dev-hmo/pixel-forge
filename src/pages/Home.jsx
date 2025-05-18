import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutSite from "../components/AboutSite";
import PricingPlan from "../components/PricingPlan";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import CTA from "../components/CTA";
import {
  servicesData,
  featuresData,
  pricingData,
  testimonialsData,
} from "../constants/data";

const Home = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box id="hero">
        <Hero />
      </Box>
      <Box id="features">
        <Features features={featuresData} />
      </Box>
      <AboutSite services={servicesData} />
      <Box id="pricing">
        <PricingPlan plans={pricingData} />
      </Box>
      <Testimonials testimonials={testimonialsData} />
      <FAQ />
      <Box id="contact">
        <ContactForm />
      </Box>
      <CTA />
    </Box>
  );
};

export default Home;

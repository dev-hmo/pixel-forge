import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqItems = [
  {
    question: "How long does a typical web project take?",
    answer:
      "Most projects take between 4-8 weeks from initial consultation to launch, depending on complexity and scope.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, we provide comprehensive maintenance packages to keep your site secure and up-to-date.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We use modern technologies including React, Next.js, Node.js, and various CMS platforms like WordPress and Shopify.",
  },
  {
    question: "Can you help with SEO?",
    answer:
      "Absolutely! SEO is built into all our projects, and we offer specialized SEO services to improve your rankings.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" sx={{ py: 10, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ textAlign: "center", mb: 6 }}>
          Frequently Asked Questions
        </Typography>

        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              mb: 2,
              borderRadius: 2,
              overflow: "hidden",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                bgcolor: "background.paper",
                fontWeight: 600,
              }}
            >
              {item.question}
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: "background.paper",
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQ;

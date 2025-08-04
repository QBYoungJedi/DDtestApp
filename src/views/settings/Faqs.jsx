import React from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqsData = [
  {
    question: "How do I reset my password?",
    answer:
      "Go to the Login Settings tab in your account settings and click 'Change Password.'"
  },
  {
    question: "How do I integrate with Google?",
    answer:
      "Navigate to the Integrations tab and click 'Connect to Google.' Follow the on-screen instructions."
  },
  {
    question: "What are OKRs?",
    answer:
      "OKRs stand for Objectives and Key Results. They are a goal-setting framework used to track progress and align teams."
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach out to our support team via the Help section or email us at support@example.com."
  },
  {
    question: "Can I change my subscription plan?",
    answer:
      "Yes, go to the Account Settings tab and click 'Manage Subscription' to change your plan."
  }
];

const FAQs = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Paper sx={{ p: 2 }}>
        {faqsData.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle1">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
};

export default FAQs;
import React from 'react';
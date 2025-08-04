// src/setting/SettingsContent.js
import React from "react";
import { Tabs, Tab, Box, Container } from "@mui/material";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

const tabRoutes = [
  { label: "Account", value: "AccountSettings" },
  { label: "Login", value: "login" },
  { label: "Notification", value: "notification" },
  { label: "Integration", value: "integration" },
  { label: "Time Period", value: "timeperiod" },
  { label: "OKR Model", value: "okrmodel" },
  { label: "User Manual", value: "usermanual" },
];

const SettingsContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname.split("/").pop();

  const handleChange = (event, newValue) => {
    navigate(`/settings/${newValue}`);
  };

  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Settings Tabs"
        >
          {tabRoutes.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </Tabs>
      </Box>
      {/* Outlet for nested routes */}
      <Outlet />
    </Container>
  );
};

export default SettingsContent;



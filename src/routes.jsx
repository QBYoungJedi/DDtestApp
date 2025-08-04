// routes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SettingsContent from "./views/settings/SettingsContent.jsx";
import AccountSettings from "./src/views/settings/AccountSettings.jsx";
import LoginSettings from "./pages/LoginSettings";
import NotificationSettings from "./pages/NotificationSettings";
import IntegrationSettings from "./pages/IntegrationSettings";
import TimePeriod from "./pages/TimePeriod";
import OKRModelConfiguration from "./pages/OKRModelConfiguration";
import UserManual from "./pages/UserManual";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/settings" />} />
    <Route path="/settings" element={<SettingsContent />}>
      <Route  path="Account" element={<AccountSettings />} />
      <Route path="login" element={<LoginSettings />} />
      <Route path="notification" element={<NotificationSettings />} />
      <Route path="integration" element={<IntegrationSettings />} />
      <Route path="timeperiod" element={<TimePeriod />} />
      <Route path="okrmodel" element={<OKRModelConfiguration />} />
      <Route path="usermanual" element={<UserManual />} />
    </Route>
    <Route path="error" element={<h2>404 - Not Found</h2>} />
  </Routes>
);

export default AppRoutes;


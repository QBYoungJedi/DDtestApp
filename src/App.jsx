// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SettingsContent from "./views/settings/SettingsContent.jsx"; 
import AccountSettings from "./views/settings/AccountSettings.jsx";
import LoginSettings from "./views/settings/LoginSettings.jsx"; 
import NotificationSettings from "./views/settings/NotificationsSetting.jsx";
import IntegrationSettings from "./views/settings/IntergrationSettings.jsx"; 
import TimePeriod from "./views/settings/TimePeriod.jsx";
import OKRModelConfiguration from "./views/settings/OKRModelConfiguration.jsx";
import UserManual from "./views/settings/UserManual.jsx";  

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the main settings route */}
        <Route path="/" element={<SettingsContent />}>
          {/* Define nested routes under "settings" */}
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="LoginSettings" element={<LoginSettings />} />
          <Route path="notification" element={<NotificationSettings />} />
          <Route path="integration" element={<IntegrationSettings />} />
          <Route path="timeperiod" element={<TimePeriod />} />
          <Route path="okrmodel" element={<OKRModelConfiguration />} />
          <Route path="usermanual" element={<UserManual />} />
        </Route>
        
        {/* Catch-all 404 route */}
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;

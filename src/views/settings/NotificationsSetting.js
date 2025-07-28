import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@mui/material';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailUpdates: true,
    smsAlerts: false,
    doNotDisturb: false,
    deadlineReminders: true,
    teamActivity: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Notification settings saved:', settings);
    // Replace with API integration as needed
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Notification Preferences
      </Typography>
      <FormControlLabel
        control={<Checkbox name="emailUpdates" checked={settings.emailUpdates} onChange={handleChange} />}
        label="Email Updates"
      />
      <FormControlLabel
        control={<Checkbox name="smsAlerts" checked={settings.smsAlerts} onChange={handleChange} />}
        label="SMS Alerts"
      />
      <FormControlLabel
        control={<Checkbox name="doNotDisturb" checked={settings.doNotDisturb} onChange={handleChange} />}
        label="Do Not Disturb"
      />
      <FormControlLabel
        control={<Checkbox name="deadlineReminders" checked={settings.deadlineReminders} onChange={handleChange} />}
        label="Deadline Reminders"
      />
      <FormControlLabel
        control={<Checkbox name="teamActivity" checked={settings.teamActivity} onChange={handleChange} />}
        label="Team Activity Alerts"
      />
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button type="submit" variant="contained">
          Save Preferences
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationSettings;

import React, { useState } from 'react';
import { Box, Typography, FormControlLabel, Switch, Button, Stack, Alert } from '@mui/material';

export default function NotificationSettings() {
  const [settings, setSettings] = useState({ emailNotif: true, smsNotif: false });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleToggle = (e) => setSettings({ ...settings, [e.target.name]: e.target.checked });

  const handleSubmit = async () => {
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      setStatus({ loading: false, success: data.message, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Notification Settings</Typography>
      <Stack spacing={2} maxWidth={400}>
        <FormControlLabel control={<Switch checked={settings.emailNotif} onChange={handleToggle} name="emailNotif" />} label="Email Notifications" />
        <FormControlLabel control={<Switch checked={settings.smsNotif} onChange={handleToggle} name="smsNotif" />} label="SMS Notifications" />
        {status.success && <Alert severity="success">{status.success}</Alert>}
        {status.error && <Alert severity="error">{status.error}</Alert>}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleSubmit} disabled={status.loading}>
            {status.loading ? 'Saving...' : 'Save'}
          </Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Stack>
    </Box>
  );
}


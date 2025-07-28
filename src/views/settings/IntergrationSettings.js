import React, { useState } from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button } from '@mui/material';

const IntegrationSettings = () => {
  const [integrations, setIntegrations] = useState({
    slack: false,
    jira: false,
    teams: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIntegrations((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved integrations:', integrations);
    // Replace with API call or state handler
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Integration Settings
      </Typography>
      <FormControlLabel
        control={<Checkbox checked={integrations.slack} onChange={handleChange} name="slack" />}
        label="Slack"
      />
      <FormControlLabel
        control={<Checkbox checked={integrations.jira} onChange={handleChange} name="jira" />}
        label="Jira"
      />
      <FormControlLabel
        control={<Checkbox checked={integrations.teams} onChange={handleChange} name="teams" />}
        label="Microsoft Teams"
      />
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save Integrations
        </Button>
      </Box>
    </Box>
  );
};

export default IntegrationSettings;

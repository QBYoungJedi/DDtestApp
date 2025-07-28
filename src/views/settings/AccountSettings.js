import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import AccountSettingsForm from '../../components/settings/AccountSettingsForm';

const AccountSettings = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" gutterBottom>
        Account Settings
      </Typography>
      <Typography variant="body1" gutterBottom>
        Update your profile information and preferences.
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mt: 3 }}>
        <AccountSettingsForm /> {/* ← This renders the actual form */}
      </Paper>
    </Container>
  );
};

export default AccountSettings;

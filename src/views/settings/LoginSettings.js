import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@mui/material';

const LoginSettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log('Saved login settings:', formData);
    // Add API call here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Login Settings
      </Typography>
      <TextField
        fullWidth
        label="Current Password"
        name="currentPassword"
        type="password"
        value={formData.currentPassword}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="New Password"
        name="newPassword"
        type="password"
        value={formData.newPassword}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Confirm New Password"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        margin="normal"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.twoFactorEnabled}
            onChange={handleChange}
            name="twoFactorEnabled"
          />
        }
        label="Enable Two-Factor Authentication"
      />
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default LoginSettings;

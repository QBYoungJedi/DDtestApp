import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

export default function AccountSettings() {
  const [values, setValues] = useState({ fullName: '', email: '', phone: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setStatus({ loading: false, success: data.message, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Account Settings</Typography>
      <Stack spacing={2} maxWidth={400}>
        <TextField label="Full Name" name="fullName" value={values.fullName} onChange={handleChange} fullWidth />
        <TextField label="Email" name="email" value={values.email} onChange={handleChange} fullWidth />
        <TextField label="Phone" name="phone" value={values.phone} onChange={handleChange} fullWidth />
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



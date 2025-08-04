import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

export default function LoginSettings() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      setStatus({ loading: false, success: data.message, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Login Settings</Typography>
      <Stack spacing={2} maxWidth={400}>
        <TextField label="Username" name="username" value={credentials.username} onChange={handleChange} fullWidth />
        <TextField label="Password" name="password" type="password" value={credentials.password} onChange={handleChange} fullWidth />
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



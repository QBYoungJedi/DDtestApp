import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

export default function IntegrationSettings() {
  const [apiKey, setApiKey] = useState('');
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleSubmit = async () => {
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/integration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey }),
      });
      const data = await res.json();
      setStatus({ loading: false, success: data.message, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Integration Settings</Typography>
      <Stack spacing={2} maxWidth={400}>
        <TextField label="API Key" value={apiKey} onChange={(e) => setApiKey(e.target.value)} fullWidth />
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


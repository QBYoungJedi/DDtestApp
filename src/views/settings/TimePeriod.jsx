import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

export default function TimePeriod() {
  const [period, setPeriod] = useState({ start: '', end: '' });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleSubmit = async () => {
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/timeperiod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(period),
      });
      const data = await res.json();
      setStatus({ loading: false, success: data.message, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Time Period</Typography>
      <Stack spacing={2} maxWidth={400}>
        <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true }} value={period.start} onChange={(e) => setPeriod({ ...period, start: e.target.value })} fullWidth />
        <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} value={period.end} onChange={(e) => setPeriod({ ...period, end: e.target.value })} fullWidth />
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


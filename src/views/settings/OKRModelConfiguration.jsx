import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

export default function OKRModelConfiguration() {
  const [config, setConfig] = useState({ objectiveName: '', keyResultsCount: 3 });
  const [status, setStatus] = useState({ loading: false, success: '', error: '' });

  const handleSubmit = async () => {
    setStatus({ loading: true, success: '', error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/okrmodel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config),
      });
      const data = await res.json();
      setStatus({ loading: false, success: data.message, error: '' });
    } catch (err) {
      setStatus({ loading: false, success: '', error: err.message });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>OKR Model Configuration</Typography>
      <Stack spacing={2} maxWidth={400}>
        <TextField label="Objective Name" value={config.objectiveName} onChange={(e) => setConfig({ ...config, objectiveName: e.target.value })} fullWidth />
        <TextField label="Key Results Count" type="number" value={config.keyResultsCount} onChange={(e) => setConfig({ ...config, keyResultsCount: e.target.value })} fullWidth />
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

/*import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button
} from '@mui/material';

const OKRModelConfiguration = () => {
  const [model, setModel] = useState('quarterly');
  const [templateName, setTemplateName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OKR model saved:', { model, templateName });
    // Replace with API submission logic if needed
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        OKR Model Configuration
      </Typography>

      <TextField
        select
        fullWidth
        label="Select Review Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        margin="normal"
      >
        <MenuItem value="quarterly">Quarterly Reviews</MenuItem>
        <MenuItem value="rolling">Rolling Reviews</MenuItem>
        <MenuItem value="custom">Custom Template</MenuItem>
      </TextField>

      {model === 'custom' && (
        <TextField
          fullWidth
          label="Custom Template Name"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          margin="normal"
        />
      )}

      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save Configuration
        </Button>
      </Box>
    </Box>
  );
};} from '@mui/material';

export default OKRModelConfiguration;
*/
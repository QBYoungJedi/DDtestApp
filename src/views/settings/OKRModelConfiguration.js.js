import React, { useState } from 'react';
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
};

export default OKRModelConfiguration;

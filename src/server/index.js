const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve React static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

// Example API route
app.post('/api/account-settings', (req, res) => {
  console.log('Account settings received:', req.body);
  res.json({ success: true });
});

// Add more API endpoints here...

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

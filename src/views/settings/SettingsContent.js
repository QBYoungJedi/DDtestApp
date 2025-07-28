// Login Settings Form
const LoginSettingsForm = () => {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    twoFAEnabled: false,
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
    console.log('Login settings:', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        type="password"
        label="New Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Confirm Password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        margin="normal"
      />
      <Box sx={{ mt: 2 }}>
        <label>
          <input
            type="checkbox"
            name="twoFAEnabled"
            checked={formData.twoFAEnabled}
            onChange={handleChange}
          />{' '}
          Enable Two-Factor Authentication
        </label>
      </Box>
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

// Notification Settings Form
const NotificationSettingsForm = () => {
  const [preferences, setPreferences] = useState({
    emailAlerts: true,
    smsAlerts: false,
    pushAlerts: true,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Notification preferences:', preferences);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {['emailAlerts', 'smsAlerts', 'pushAlerts'].map((key) => (
        <Box key={key} sx={{ mb: 1 }}>
          <label>
            <input
              type="checkbox"
              name={key}
              checked={preferences[key]}
              onChange={handleChange}
            />{' '}
            {key.replace(/([A-Z])/g, ' $1')}
          </label>
        </Box>
      ))}
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save Preferences
        </Button>
      </Box>
    </Box>
  );
};

// Integration Settings Form
const IntegrationSettingsForm = () => {
  const [integrations, setIntegrations] = useState({
    slack: false,
    jira: true,
    teams: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setIntegrations((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Integration settings:', integrations);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      {['slack', 'jira', 'teams'].map((key) => (
        <Box key={key} sx={{ mb: 1 }}>
          <label>
            <input
              type="checkbox"
              name={key}
              checked={integrations[key]}
              onChange={handleChange}
            />{' '}
            Enable {key.toUpperCase()} Integration
          </label>
        </Box>
      ))}
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save Integrations
        </Button>
      </Box>
    </Box>
  );
};

// Time Period Form
const TimePeriodForm = () => {
  const [form, setForm] = useState({
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Time period set:', form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Start Date"
        name="startDate"
        type="date"
        fullWidth
        value={form.startDate}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="End Date"
        name="endDate"
        type="date"
        fullWidth
        value={form.endDate}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Set Time Period
        </Button>
      </Box>
    </Box>
  );
};

// OKR Model Form
const OKRModelForm = () => {
  const [model, setModel] = useState('quarterly');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected OKR model:', model);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        select
        label="OKR Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        fullWidth
        SelectProps={{ native: true }}
      >
        <option value="quarterly">Quarterly</option>
        <option value="rolling">Rolling</option>
        <option value="custom">Custom</option>
      </TextField>
      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button variant="contained" type="submit">
          Save OKR Model
        </Button>
      </Box>
    </Box>
  );
};

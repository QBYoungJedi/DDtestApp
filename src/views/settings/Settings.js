import AppBreadcrumb from '../../components/AppBreadcrumb';
import react from 'react';
import classNames from 'classnames';

// src/components/SettingsPage.js
import React, { useState } from 'react';
import AccountSettings from './AccountSettings';
import LoginSettings from './LoginSettings';
import Notifications from './Notifications';
import Integrations from './Integrations';  
import TimePeriod from './TimePeriod';
import UserManual from './UserManual';
// Import other components as needed
// Define the tabs for the settings page
 
 
const tabs = [
  { id: 'account', label: 'Account Settings' },
  { id: 'login', label: 'Login Settings' },
  { id: 'notifications', label: 'Notifications' },
    { id: 'integrations', label: 'Integrations' },
  { id: 'timePeriod', label: 'Time Period' },
  { id: 'manual', label: 'User Manual' },
];
 
const Settings = () => {
  const [activeTab, setActiveTab] = useState('account');
 
  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />;
      case 'login':
        return <LoginSettings />;
      case 'notifications':
        return <Notifications />;
      case 'integrations':
        return <Integrations />;
      case 'timePeriod':
        return <TimePeriod />;
      case 'manual':
        return <UserManual />;
      default:
        return null;
    }
  };
 
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{
        width: '220px',
        borderRight: '1px solid #ccc',
        padding: '1rem',
      }}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem',
              cursor: 'pointer',
              background: activeTab === tab.id ? '#f0f0f0' : 'transparent'
            }}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div style={{ flex: 1, padding: '1rem' }}>
        {renderTabContent()}
      </div>
    </div>
  );
};
 
export default Settings;
import React from 'react';
 
const UserManual = () => {
  return (
    <div>
      <h2>User Manual</h2>
      <p>
        Welcome to the Settings Center. Here's how you can use each tab:
      </p>
      <ul>
        <li><strong>Account Settings:</strong> Update your profile information.</li>
        <li><strong>Login Settings:</strong> Change your password or login methods.</li>
        <li><strong>Notifications:</strong> Choose when and how you receive alerts.</li>
        <li><strong>Integrations:</strong> Connect third-party tools.</li>
        <li><strong>Time Period:</strong> Set your OKR timeframes.</li>
        <li><strong>OKR Model:</strong> Define how OKRs are structured and reviewed.</li>
      </ul>
    </div>
  );
};
 
export default UserManual;
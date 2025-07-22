import React from 'react';
 
const Notifications = () => {
  return (
    <div>
      <h2>Notification Settings</h2>
      <form>
        <label>
          <input type="checkbox" />
          Email Notifications
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Push Notifications
        </label>
        <br />
        <label>
          <input type="checkbox" />
          Weekly Summary Emails
        </label>
        <br />
        <button type="submit">Save Preferences</button>
      </form>
    </div>
  );
};
 
export default Notifications;
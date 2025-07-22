import React from 'react';
 
const AccountSettings = () => {
  return (
    <div>
      <h2>Account Settings</h2>
      <form>
        <label>
          Full Name:
          <input type="text" name="fullName" />
        </label>
        <br />
        <label>
          Email Address:
          <input type="email" name="email" />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
 
export default AccountSettings;
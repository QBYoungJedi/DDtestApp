import React from 'react';
 
const LoginSettings = () => {
  return (
    <div>
      <h2>Login Settings</h2>
      <form>
        <label>
          Current Password:
          <input type="password" />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" />
        </label>
        <br />
        <label>
          Confirm New Password:
          <input type="password" />
        </label>
        <br />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};
 
export default LoginSettings;
 
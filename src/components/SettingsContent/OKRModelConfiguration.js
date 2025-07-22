import React from 'react';
 
const OkrModelConfig = () => {
  return (
    <div>
      <h2>OKR Model Configuration</h2>
      <form>
        <label>
          Number of Objectives:
          <input type="number" min="1" max="10" />
        </label>
        <br />
        <label>
          Key Results per Objective:
          <input type="number" min="1" max="5" />
        </label>
        <br />
        <label>
          Review Frequency:
          <select>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
        </label>
        <br />
        <button type="submit">Save Configuration</button>
      </form>
    </div>
  );
};
 
export default OkrModelConfiguration;
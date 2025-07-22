import React, { useState } from 'react';
 
const TimePeriod = () => {
  const [periodType, setPeriodType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customName, setCustomName] = useState('');
 
  const handlePeriodChange = (e) => {
    const selected = e.target.value;
    setPeriodType(selected);
 
    const today = new Date();
    let start, end;
 
    switch (selected) {
      case 'weekly':
        start = new Date(today);
        end = new Date(today);
        end.setDate(start.getDate() + 6);
        break;
      case 'monthly':
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case 'quarterly':
        const currentMonth = today.getMonth();
        const quarterStartMonth = Math.floor(currentMonth / 3) * 3;
        start = new Date(today.getFullYear(), quarterStartMonth, 1);
        end = new Date(today.getFullYear(), quarterStartMonth + 3, 0);
        break;
      case 'custom':
        start = '';
        end = '';
        break;
      default:
        return;
    }
 
    if (selected !== 'custom') {
      setStartDate(start.toISOString().substr(0, 10));
      setEndDate(end.toISOString().substr(0, 10));
      setCustomName(selected.charAt(0).toUpperCase() + selected.slice(1) + ' Period');
    } else {
      setStartDate('');
      setEndDate('');
      setCustomName('');
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const payload = {
      periodType,
      startDate,
      endDate,
      customName,
    };
 
    try {
      const response = await fetch('/api/settings/time-period', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
 
      const result = await response.json();
      alert(result.message || 'Time period saved!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save time period');
    }
  };
 
  return (
    <div>
      <h2>Time Period Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Select a Time Period:
          <select value={periodType} onChange={handlePeriodChange}>
            <option value="">-- Choose --</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="custom">Custom</option>
          </select>
        </label>
        <br />
 
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            disabled={!periodType || periodType !== 'custom' && startDate !== ''}
          />
        </label>
        <br />
 
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            disabled={!periodType || periodType !== 'custom' && endDate !== ''}
          />
        </label>
        <br />
 
        <label>
          Time Period Name:
          <input
            type="text"
            placeholder="e.g., Custom Sprint 1"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
          />
        </label>
        <br />
 
        <button type="submit">Set Time Period</button>
      </form>
    </div>
  );
};
 
export default TimePeriod;
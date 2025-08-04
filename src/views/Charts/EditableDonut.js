import React, { useState, useEffect } from 'react'
import { CChart } from '@coreui/react-chartjs'

const EditableDonut = ({ initialProgress = 0, onChange }) => {
  const [progress, setProgress] = useState(initialProgress)
  const completedColor = '#4caf50'

  useEffect(() => {
    setProgress(initialProgress)
  }, [initialProgress])

  
  //removed because clicking is off
  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const angle = Math.atan2(y, x) * (100 / Math.PI) + 100
    const newProgress = Math.round((angle / 360) * 100)
    setProgress(newProgress)
    if (onChange) onChange(newProgress)
  }

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '200px',
        height: '200px',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      <CChart
        type="doughnut"
        data={{
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              backgroundColor: [completedColor, '#e0e0e0'],
              data: [progress, 100 - progress],
            },
          ],
        }}
        options={{
          cutout: '70%',
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
          maintainAspectRatio: false,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -160%)',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: completedColor,
          pointerEvents: 'none',
          zIndex: 10,
          lineHeight: 1,
          textAlign: 'center',
        }}
      >
        {progress}%
      </div>
    </div>
  )
}

export default EditableDonut

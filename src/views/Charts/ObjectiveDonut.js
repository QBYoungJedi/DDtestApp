import React, { useState, useEffect, useRef } from 'react'
import { CChart } from '@coreui/react-chartjs'

const ObjectiveDonut = ({ progress = 0, onChange }) => {
  const [internalProgress, setInternalProgress] = useState(progress)
  const chartRef = useRef(null)
  const completedColor = '#4caf50'

  useEffect(() => {
    setInternalProgress(progress)
  }, [progress])

  const handleClick = (event) => {
    if (!chartRef.current) return

    const rect = chartRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    const angle = Math.atan2(y, x) * (180 / Math.PI)
    const normalizedAngle = (angle + 360 + 90) % 360 // Rotate to align with top
    const newProgress = Math.round((normalizedAngle / 360) * 100)

    setInternalProgress(newProgress)
    if (onChange) onChange(newProgress)
  }

  return (
    <div
      ref={chartRef}
      /* onClick={handleClick} */
      style={{
        position: 'relative',
        width: '300px',
        height: '300px',
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
              data: [internalProgress, 100 - internalProgress],
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
          transform: 'translate(-50%, -100%)',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: completedColor,
          pointerEvents: 'none',
          zIndex: 10,
          lineHeight: 1,
          textAlign: 'center',
        }}
      >
        {internalProgress}%
      </div>
    </div>
  )
}

export default ObjectiveDonut

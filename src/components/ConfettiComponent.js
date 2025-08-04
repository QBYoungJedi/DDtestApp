import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from '@react-hook/window-size'

const ConfettiComponent = ({ trigger }) => {
  const [width, height] = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (trigger) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [trigger])

  return showConfetti ? <Confetti width={width} height={height} /> : null
}

export default ConfettiComponent

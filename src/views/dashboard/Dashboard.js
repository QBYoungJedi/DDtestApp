import Carousels from '../base/carousels/Carousels'
import React, { useState } from 'react'
import Cards from '../base/cards/Cards'
import { initiatives } from 'src/DummyData/initiativesdata.js'
import { comokr } from '../../DummyData/companyobj'

const okrs = [
  { title: 'Live Safer', progress: 65, keyresult: " 1. Use the crosswalks guys at least 90% of the time!" },
  { title: 'Stay Healthy', progress: 80, keyresult: "1. Exercise 30 minutes a day" },
  { title: 'Learn Continuously', progress: 40, keyresult: "1. Pick up a book like once a week" },
]

const Dashboard = () => {
  const [currentOKR, setCurrentOKR] = useState(0)

  return (
    <>
      {/* ✅ Pass initiatives as a prop here */}
      <Cards
        currentOKR={currentOKR}
        setCurrentOKR={setCurrentOKR}
        okrs={okrs}
        initiatives={initiatives}
        teamObjectives={okrs}
        comokr={comokr}
      />
      <Carousels currentOKR={currentOKR} setCurrentOKR={setCurrentOKR} comokr={comokr} />
    </>
  )
}

export default Dashboard

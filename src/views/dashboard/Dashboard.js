import classNames from 'classnames'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CContainer,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import Carousels from '../base/carousels/Carousels'
import React, { useState } from 'react'
import Cards from '../base/cards/Cards'
import CarouselsC from '../base/carousels/CarouselsC'
import { initiatives } from 'src/DummyData/initiativesdata.js'

const okrs = [
  { title: 'Live Safer', progress: 65 },
  { title: 'Stay Healthy', progress: 80 },
  { title: 'Learn Continuously', progress: 40 },
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
      />
      <Carousels currentOKR={currentOKR} setCurrentOKR={setCurrentOKR} okrs={okrs} />
    </>
  )
}

export default Dashboard

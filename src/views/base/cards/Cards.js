import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
  CContainer,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPlus,
  cilPencil,
  cilArrowLeft,
  cilArrowRight,
  cilList,
} from '@coreui/icons'
import CarouselsC from '../carousels/CarouselsC'
import { CChart } from '@coreui/react-chartjs'


// Placeholder for InitiativeGraph
const InitiativeGraph = ({ initiative }) => (
  <div style={{ height: 200, backgroundColor: '#eef3f7' }}>
    <p className="text-center pt-5">Graph for: {initiative.title}</p>
  </div>
)

// Placeholder for InitiativeComments
const InitiativeComments = ({ initiative }) => (
  <div style={{ height: 200, backgroundColor: '#f7f9fb', padding: '1rem', overflowY: 'auto' }}>
    <p>Comments related to: {initiative.title}</p>
    {/* Replace with your comment components */}
  </div>
)
  // Dummy initiatives data - replace with your real initiatives
  const initiatives = [
    { title: 'My Inititives', id: 1 },
    { title: 'Stay Active', id: 2 },
    { title: 'Initiative 3', id: 3 },
  ]

  //Dummy Objectives data

  
const InitiativesSection = ({ initiatives }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % initiatives.length)
  }

const handleViewAll = () => {
    alert('View all initiatives here')
  }

  const handleAdd = () => {
    alert('Add new initiative logic here')
  }

  const handleEdit = () => {
    alert(`Edit initiative: ${initiatives[currentIndex].title}`)
  }

  const currentInitiative = initiatives[currentIndex]

    return (
    <CCard style={{ marginBottom: 32 }}>
      {/* Top section */}
      <CCardHeader className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <CButton
            color="light"
            variant="ghost"
            onClick={handlePrev}
            style={{
              width: '2rem',
              height: '2rem',
              padding: 0,
              minWidth: 'unset',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="carousel-control-prev-icon"
              style={{
                width: '1.5rem',
                height: '1.5rem',
                filter: 'brightness(0)',
                marginTop: '4px',
              }}
            />
          </CButton>
          <div className="mx-3 fw-bold" style={{ minWidth: 150 }}>
            {currentInitiative.title}
          </div>
          <CButton
            color="light"
            variant="ghost"
            onClick={handleNext}
            style={{
              width: '2rem',
              height: '2rem',
              padding: 0,
              minWidth: 'unset',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="carousel-control-next-icon"
              style={{
                width: '1.5rem',
                height: '1.5rem',
                filter: 'brightness(0)',
                marginTop: '4px',
              }}
            />
          </CButton>
        </div>

        <div>
          <CButton color="light" variant="ghost" onClick={handleViewAll} className="me-2">
            <CIcon icon={cilList}/>
          </CButton>
          <CButton color="light" variant="ghost" onClick={handleAdd} className="me-2">
            <CIcon icon={cilPlus} />
          </CButton>
          <CButton color="light" variant="ghost" onClick={handleEdit}>
            <CIcon icon={cilPencil} />
          </CButton>
        </div>
      </CCardHeader>

      {/* Bottom section: 1/3 graph, 2/3 comments */}
      <CCardBody>
        <CRow>
          <CCol xs={4}>
            <InitiativeGraph initiative={currentInitiative} />
          </CCol>
          <CCol xs={8}>
            <InitiativeComments initiative={currentInitiative} />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}
const Cards = ({ currentOKR, setCurrentOKR, okrs }) => {
  if (!okrs || okrs.length === 0) {
    return <div>No OKRs available</div>
  }

  const handleNext = () => {
    setCurrentOKR((prev) => (prev + 1) % okrs.length)
  }

  const handlePrev = () => {
    setCurrentOKR((prev) => (prev - 1 + okrs.length) % okrs.length)
  }

  return (
    <CContainer style={{ marginBottom: 32 }}>
      <CRow sm={{ gutterX: 5 }}>
        {/* Left Column */}
<CCol sm={5}>
  <CCard style={{ marginBottom: 32 }}>

    {/* Top Section: Objective navigation + title + buttons */}
    <CCardHeader className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">

        {/*Arrows for Objectives*/}
        <CButton
          color="light"
          variant="ghost"
          onClick={handlePrev}
          style={{
            width: '2rem',
            height: '2rem',
            padding: 0,
            minWidth: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            className="carousel-control-prev-icon"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              filter: 'brightness(0)',
              marginTop: '4px',
            }}
          />
        </CButton>

        <div className="mx-3 fw-bold fs-5" style={{ minWidth: 150 }}>
          {okrs[currentOKR]?.title}
        </div>

        <CButton
          color="light"
          variant="ghost"
          onClick={handleNext}
          style={{
            width: '2rem',
            height: '2rem',
            padding: 0,
            minWidth: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            className="carousel-control-next-icon"
            style={{
              width: '1.5rem',
              height: '1.5rem',
              filter: 'brightness(0)',
              marginTop: '4px',
            }}
          />
        </CButton>
      </div>

              {/*Buttons for Objectives*/}
      <div>
          <CButton
          color="light"
          variant="ghost"
          onClick={() => alert(`Add List of Objectives: ${okrs[currentOKR]?.title}`)}
        >
          <CIcon icon={cilList} />
        </CButton>
        <CButton
          color="light"
          variant="ghost"
          onClick={() => alert('Add Objective')}
          className="me-2"
        >
          <CIcon icon={cilPlus} />
        </CButton>
        <CButton
          color="light"
          variant="ghost"
          onClick={() => alert(`Edit Objective: ${okrs[currentOKR]?.title}`)}
        >
          <CIcon icon={cilPencil} />
        </CButton>
      </div>
    </CCardHeader>

    {/* Bottom Section: Graph/Chart for current Objective */}
    <CCardBody style={{ minHeight: 500 }}>

      {/* Graph in Objective Section */}
<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '450px'
  }}
>
  <CChart
    type="doughnut"
    data={{
      labels: ['Completed', 'Remaining'],
      datasets: [
        {
          backgroundColor: ['#4caf50', '#e0e0e0'],
          data: [
            okrs[currentOKR]?.progress || 0,
            100 - (okrs[currentOKR]?.progress || 0),
          ],
        },
      ],
    }}
    options={{
      plugins: {
        legend: {
          position: 'bottom',
        },
      },
      cutout: '70%',
    }}
    style={{ maxHeight: '200px', width: '200px' }}
  />
</div>

    </CCardBody>
  </CCard>
</CCol>

        <CCol sm={7}>
          {/* Initiatives Section at the top */}
          <InitiativesSection initiatives={initiatives} />

          {/* Bottom right column card */}
          <CCard>
            <CCardHeader>
              <CNav variant="tabs" className="card-header-tabs">
                <CNavItem>
                  <CNavLink href="#" active>
                    Active
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
              </CNav>
            </CCardHeader>
            <CCardBody style={{ minHeight: 185 }} />
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Cards

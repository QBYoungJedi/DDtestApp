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
} from '@coreui/icons'
import CarouselsC from '../carousels/CarouselsC'

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

const InitiativesSection = ({ initiatives }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % initiatives.length)
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
          <CButton color="light" variant="ghost" onClick={handlePrev}>
            <CIcon icon={cilArrowLeft} />
          </CButton>
          <div className="mx-3 fw-bold" style={{ minWidth: 150 }}>
            {currentInitiative.title}
          </div>
          <CButton color="light" variant="ghost" onClick={handleNext}>
            <CIcon icon={cilArrowRight} />
          </CButton>
        </div>

        <div>
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

  // Dummy initiatives data - replace with your real initiatives
  const initiatives = [
    { title: 'Initiative 1', id: 1 },
    { title: 'Initiative 2', id: 2 },
    { title: 'Initiative 3', id: 3 },
  ]

  return (
    <CContainer style={{ marginBottom: 32 }}>
      <CRow sm={{ gutterX: 5 }}>
        {/* Left Column */}
        <CCol sm={5}>
          <CCard>
            <CCardHeader>
              <CNav variant="tabs" className="card-header-tabs">
                {okrs.map((okr, index) => (
                  <CNavItem key={index}>
                    <CNavLink
                      active={currentOKR === index}
                      onClick={() => setCurrentOKR(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      OKR {index + 1}
                    </CNavLink>
                  </CNavItem>
                ))}
              </CNav>
            </CCardHeader>

            <CCardBody style={{ minHeight: 500 }}>
              <CContainer>
                {/* Title and Arrows in same row */}
                <CCard className="d-flex align-content-center w-200 mb-3">
                  <CCardBody
                    className="d-flex align-items-center justify-content-between"
                    style={{ padding: '0.5rem 1rem', height: '48px' }}
                  >
                    <CButton
                      color="light"
                      variant="ghost"
                      className="carousel-control-prev"
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
                          marginTop: '16px',
                        }}
                      />
                    </CButton>

                    <div
                      className="fw-bold fs-5 text-center flex-grow-1"
                      style={{ margin: '0 0.75rem' }}
                    >
                      {okrs[currentOKR]?.title}
                    </div>

                    <CButton
                      color="light"
                      variant="ghost"
                      className="carousel-control-next"
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
                          marginTop: '16px',
                        }}
                      />
                    </CButton>
                  </CCardBody>
                </CCard>

                <div style={{ width: '100%' }}>
                  <CarouselsC
                    currentOKR={currentOKR}
                    setCurrentOKR={setCurrentOKR}
                    okrs={okrs}
                  />
                </div>
              </CContainer>
            </CCardBody>
          </CCard>
        </CCol>

        {/* Right Column */}
        <CCol sm={7}>
          {/* Initiatives Section at the top */}
          <InitiativesSection initiatives={initiatives} />

          {/* Your original first right column card */}
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

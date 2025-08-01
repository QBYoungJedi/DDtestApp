import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPlus,
  cilPencil,
  cilList,
  cilArrowLeft,
  cilArrowRight,
} from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'
import { teamMembers } from 'src/DummyData/Usersdata.js'
import AddInitiativeModal from 'src/components/AddInitiativeModal.js'
import ViewInitiativeModal from 'src/components/ViewInitiativeModal.js'



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

const InitiativesSection = ({ initiatives, teamObjectives }) => {
  if (!initiatives || initiatives.length === 0) {
    return <div>No initiatives available</div>
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedObjective, setSelectedObjective] = useState('');
  const [showAddModal, setShowAddModal] = useState(false)
  const [newInitiativeTitle, setNewInitiativeTitle] = useState('')
const [selectedOwner, setSelectedOwner] = useState('');
const [dueDate, setDueDate] = useState('');
const [metricName, setMetricName] = useState('');
const [metricType, setMetricType] = useState('');
const [metricValue, setMetricValue] = useState('')

  // Making arrows usable
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + initiatives.length) % initiatives.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % initiatives.length)
  }

  //Icons
  const handleViewAll = () => {
    alert('View all initiatives here')
  }

  const handleAdd = () => {
    setShowAddModal(true)
  }

  const handleAddSubmit = () => {
    alert(`New initiative added: ${newInitiativeTitle}`)
    setNewInitiativeTitle('')
    setShowAddModal(false)
  }

  const handleAddCancel = () => {
    setNewInitiativeTitle('')
    setShowAddModal(false)
  }

  const handleEdit = () => {
    alert(`Edit initiative: ${initiatives[currentIndex].title}`)
  }

  const currentInitiative = initiatives[currentIndex]
  const [showViewInitiativesModal, setShowViewInitiativesModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)



  return (
    <>
      <CCard style={{ marginBottom: 32 }}>
        <CCardHeader>
          <div className="d-flex justify-content-end">
<CButton
  color="light"
  variant="ghost"
  onClick={() => {
    setCurrentUser(teamMembers[0])
    setShowViewInitiativesModal(true)
  }}
  className="me-2"
>
  <CIcon icon={cilList} />
</CButton>


            <CButton color="light" variant="ghost" onClick={handleAdd} className="me-2">
              <CIcon icon={cilPlus} />
            </CButton>
            <CButton color="light" variant="ghost" onClick={handleEdit}>
              <CIcon icon={cilPencil} />
            </CButton>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
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
              <CIcon icon={cilArrowLeft} style={{ width: '1.5rem', height: '1.5rem' }} />
            </CButton>

            <div className="mx-3 fw-bold fs-5 text-center" style={{ minWidth: 150 }}>
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
              <CIcon icon={cilArrowRight} style={{ width: '1.5rem', height: '1.5rem' }} />
            </CButton>
          </div>
        </CCardHeader>

        <CCardBody>
          <CRow>
            {/* 1/3: Graph */}
            <CCol xs={4}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <CChart
                  type="doughnut"
                  data={{
                    labels: ['Completed', 'Remaining'],
                    datasets: [
                      {
                        backgroundColor: ['#7b828cff', '#e0e0e0ff'],
                        data: [
                          currentInitiative?.progress || 0,
                          100 - (currentInitiative?.progress || 0),
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
            </CCol>

            {/* 2/3: Comments Section */}
            <CCol xs={8}>
              <div
                style={{
                  height: '100%',
                  backgroundColor: '#f7f9fb',
                  padding: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '8px',
                }}
              >
                {/* Top Section: Most Recent Comment */}
                <div style={{ flex: 1, marginBottom: '1rem', overflowY: 'auto' }}>
                  <h6 className="fw-bold mb-2">Most Recent Comment:</h6>
                  <p className="mb-0 text-muted">
                    This is the most recent comment on "{currentInitiative.title}".
                  </p>
                </div>

                {/* Divider */}
                <div style={{ borderTop: '1px solid #dee2e6', marginBottom: '0.5rem' }}></div>

                {/* Bottom Section: Add Comment */}
                <div>
                  <h6 className="fw-bold">Add Comment:</h6>
                  <textarea
                    className="form-control mb-2"
                    rows="1"
                    placeholder="Write a comment..."
                    style={{ resize: 'none' }}
                  ></textarea>
                  <button className="btn btn-sm btn-primary">Submit</button>
                </div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      {/* Add An Initivative Modal*/}
      <AddInitiativeModal
  visible={showAddModal}
  onClose={() => setShowAddModal(false)}
  onSubmit={handleAddSubmit}
  newInitiativeTitle={newInitiativeTitle}
  setNewInitiativeTitle={setNewInitiativeTitle}
  selectedObjective={selectedObjective}
  setSelectedObjective={setSelectedObjective}
  selectedOwner={selectedOwner}
  setSelectedOwner={setSelectedOwner}
  dueDate={dueDate}
  setDueDate={setDueDate}
  metricName={metricName}
  setMetricName={setMetricName}
  metricValue={metricValue}
  setMetricValue={setMetricValue}
  metricType={metricType}
  setMetricType={setMetricType}
  teamObjectives={teamObjectives}
  teamMembers={teamMembers}
/>
<ViewInitiativeModal
  visible={showViewInitiativesModal}
  onClose={() => setShowViewInitiativesModal(false)}
  currentUser={teamMembers[0]}
/>
    </>
  )
}

{/*Dummy Data is on Dashboard.js & DummyData*/}
const Cards = ({ currentOKR, setCurrentOKR, okrs, initiatives, teamObjectives }) => {
  
  if (!okrs || okrs.length === 0) {
    return <div>No OKRs available</div>
  }

  if (!initiatives) {
    return <div>No initiatives data provided</div>
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
            {/* Card Header: icons top right, title & arrows on second row */}
            <CCardHeader>
              <div className="d-flex justify-content-between align-items-start">
                {/* Empty space to push icons to right */}
                <div></div>
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
              </div>

              {/* Second row: arrows and objectives */}
              <div className="d-flex align-items-center mt-3">
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
                  <CIcon icon={cilArrowLeft} style={{ width: '1.5rem', height: '1.5rem' }} />
                </CButton>

                <div className="flex-grow-1 text-center fw-bold fs-5">
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
                  <CIcon icon={cilArrowRight} style={{ width: '1.5rem', height: '1.5rem' }} />
                </CButton>
              </div>
            </CCardHeader>

            {/* Card Body with Graph */}
            <CCardBody style={{ minHeight: 500 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '450px',
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
          <InitiativesSection initiatives={initiatives} teamObjectives={teamObjectives}/>

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
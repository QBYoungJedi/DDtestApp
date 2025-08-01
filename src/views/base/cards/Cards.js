import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CContainer,
  CNav,
  CNavItem,
  CNavLink,
  CFormTextarea,
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
  const [metrics, setMetrics] = useState([]);
  const [tasks, setTasks] = useState([]);
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

  return (
    <>
      <CCard style={{ marginBottom: 32 }}>
        <CCardHeader>
          <div className="d-flex justify-content-end">
            <CButton color="light" variant="ghost" onClick={handleViewAll} className="me-2">
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

      {/* Initiative "+" Modal */}
<CModal visible={showAddModal} onClose={() => setShowAddModal(false)}>
  <CModalHeader closeButton>
    <CModalTitle>Add New Initiative</CModalTitle>
  </CModalHeader>

  <form onSubmit={handleAddSubmit}>
    <CModalBody>
  {/* Initiative Title */}
  <div className="mb-3">
    <label htmlFor="titleInput" className="form-label">Initiative Title</label>
    <input
      id="titleInput"
      type="text"
      className="form-control"
      placeholder="Enter initiative title"
      value={newInitiativeTitle}
      onChange={(e) => setNewInitiativeTitle(e.target.value)}
      required
    />
  </div>

  {/* Team Objective */}
  <div className="mb-3">
    <label htmlFor="objectiveSelect" className="form-label">Link to Team Objective</label>
    <select
      id="objectiveSelect"
      className="form-select"
      value={selectedObjective}
      onChange={(e) => setSelectedObjective(e.target.value)}
      required
    >
      <option value="">Select your team’s objective</option>
      {teamObjectives.map((obj) => (
        <option key={obj.id} value={obj.id}>{obj.title}</option>
      ))}
    </select>
  </div>

  {/* Owner and Due Date */}
  <div className="mb-3 d-flex gap-3">
    <div className="flex-grow-1">
      <label className="form-label">Owner</label>
      <select
  className="form-select"
  value={selectedOwner}
  onChange={(e) => setSelectedOwner(e.target.value)}
  required
>
  <option value="">Select owner</option>
  {teamMembers.map((member) => (
    <option key={member.id} value={member.name}>
      {member.name}
    </option>
  ))}
</select>

    </div>

    <div>
      <label className="form-label">Due Date</label>
      <input
        type="date"
        className="form-control"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
    </div>
  </div>

{/* Metric */}
<div className="mb-3">
  <label className="form-label">Metric</label>
  <div className="d-flex gap-2">
    {/* Metric Name */}
    <input
      type="text"
      className="form-control"
      placeholder="Metric name"
      value={metricName}
      onChange={(e) => setMetricName(e.target.value)}
      required
    />

    {/* Metric Value */}
    <input
      type="number"
      className="form-control"
      style={{ width: '120px' }}
      placeholder="Value"
      value={metricValue}
      onChange={(e) => setMetricValue(e.target.value)}
      required
    />

    {/* Metric Type */}
    <select
      className="form-select"
      style={{ width: '150px' }}
      value={metricType}
      onChange={(e) => setMetricType(e.target.value)}
      required
    >
      <option value="">Type</option>
      <option value="number">Number</option>
      <option value="percentage">Percentage</option>
      <option value="yesno">Yes/No</option>
    </select>
  </div>
  </div>
</CModalBody>
    <CModalFooter>
      <CButton color="secondary" type="button" onClick={handleAddCancel}>
        Cancel
      </CButton>
      <CButton color="primary" type="submit">
        Add
      </CButton>
    </CModalFooter>
  </form>
</CModal>

    </>
  )
}

{/*Dummy Data is on Dashboard.js*/}
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
                  style={{ maxHeight: '250px', width: '250px' }}
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
            <CCardBody style={{ minHeight: 185 }}>
              <CFormTextarea readOnly rows={4} className='fw-semibold, fs-3' value={okrs[currentOKR]?.keyresult}>
              </CFormTextarea>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}
export default Cards
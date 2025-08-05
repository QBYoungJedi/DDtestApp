import { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CContainer,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPlus,
  cilPencil,
  cilList,
} from '@coreui/icons'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { teamMembers } from 'src/DummyData/Usersdata.js'
import { initiativeComments } from 'src/DummyData/initiativeCommentsdata.js'
import AddInitiativeModal from 'src/components/AddInitiativeModal.js'
import { objectives as teamObjectives } from 'src/DummyData/Objectivesdata'
import ViewInitiativeModal from 'src/components/ViewInitiativeModal.js'
import ConfettiComponent from 'src/components/ConfettiComponent.js'
import EditableDonut from 'src/views/Charts/InitiativeDonut.js'
import ViewObjectivesModal from 'src/components/ViewObjectivesModal.js'
import ObjectiveDonut from '../../Charts/ObjectiveDonut'

const InitiativesSection = ({ initiatives, teamObjectives, okrs, initiativeComments  }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedObjective, setSelectedObjective] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [newInitiativeTitle, setNewInitiativeTitle] = useState('')
  const [selectedOwner, setSelectedOwner] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [metricName, setMetricName] = useState('')
  const [metricType, setMetricType] = useState('')
  const [metricValue, setMetricValue] = useState('')
  const [showViewInitiativesModal, setShowViewInitiativesModal] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  if (!initiatives || initiatives.length === 0) {
    return <div>No initiatives available</div>
  }

  const user = teamMembers[0]
  const filteredInitiatives = initiatives.filter(
    (initiative) => initiative.owner?.id === user.id
  )

  if (!filteredInitiatives || filteredInitiatives.length === 0) {
    return <div>No initiatives assigned to {user.name}</div>
  }

  const [currentOKR, setCurrentOKR] = useState(0)
  const currentObjective = okrs && okrs.length > 0 ? okrs[currentOKR] : null

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredInitiatives.length) % filteredInitiatives.length)
  }
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredInitiatives.length)
  }

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
    alert(`Edit initiative: ${filteredInitiatives[currentIndex].title}`)
  }

  const currentInitiative = filteredInitiatives[currentIndex]

  // Get most recent comment for current initiative
  const relatedComments = initiativeComments
    .filter((comment) => comment.initiativeId === currentInitiative.id)
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  const latestComment = relatedComments.length > 0 ? relatedComments[0] : null

  return (
    <>
      <ConfettiComponent trigger={currentInitiative?.progress === 100} />
      <CCard style={{ marginBottom: 32 }}>
        <CCardHeader>
          <div className="d-flex justify-content-end">
            <CTooltip content="View All My initiatives" placement="top">
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
            </CTooltip>
            <CTooltip content="Add A New Initiative" placement="top">
              <CButton color="light" variant="ghost" onClick={handleAdd} className="me-2">
                <CIcon icon={cilPlus} />
              </CButton>
            </CTooltip>
            <CTooltip content="Edit Initiative" placement="bottom">
              <CButton color="light" variant="ghost" onClick={handleEdit}>
                <CIcon icon={cilPencil} />
              </CButton>
            </CTooltip>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <CButton
              color="light"
              variant="ghost"
              onClick={handlePrev}
              className="arrow-button"
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
              <ChevronLeft size={300} />
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
              <ChevronRight size={300} />
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
                <EditableDonut initialProgress={currentInitiative?.progress || 0} />
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
                  {latestComment ? (
                    <>
                      <p className="mb-1 text-muted">{latestComment.comment}</p>
                    </>
                  ) : (
                    <p className="mb-0 text-muted">No comments yet for this initiative.</p>
                  )}
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

      {/* Add An Initiative Modal */}
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
        currentUser={currentUser}
      />
    </>
  )
}

const Cards = ({
  currentOKR,
  setCurrentOKR,
  okrs,
  initiatives,
  comokr,
  currentObjective,
  teamObjectives,
}) => {
  const [showObjectivesModal, setShowObjectivesModal] = useState(false)
  const [currentTeamObjective, setCurrentTeamObjective] = useState(0)
const currentTeamObj = teamObjectives && teamObjectives.length > 0 ? teamObjectives[currentTeamObjective] : null


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
const ObjhandlePrev = () => {
  setCurrentTeamObjective((prev) => (prev - 1 + teamObjectives.length) % teamObjectives.length)
}

const ObjhandleNext = () => {
  setCurrentTeamObjective((prev) => (prev + 1) % teamObjectives.length)
}

  return (
    <CContainer style={{ marginBottom: 32 }}>
      <CRow sm={{ gutterX: 5 }}>
        {/* Left Column */}
        <CCol sm={5}>
          <CCard style={{ marginBottom: 32 }}>
<CCardHeader>
  <div className="d-flex justify-content-between align-items-start">
    <div></div>
    <div>
      <CTooltip content="View Team's Objectives" placement="top">
        <CButton
          color="light"
          variant="ghost"
          onClick={() => setShowObjectivesModal(true)}
          className="me-2"
        >
          <CIcon icon={cilList} />
        </CButton>
      </CTooltip>
      <CTooltip content="Add Team's Objective" placement="top">
        <CButton
          color="light"
          variant="ghost"
          onClick={() => alert('Add Objective')}
          className="me-2"
        >
          <CIcon icon={cilPlus} />
        </CButton>
      </CTooltip>
      <CTooltip content="Edit Objective" placement="bottom">
        <CButton
          color="light"
          variant="ghost"
          onClick={() => alert(`Edit Objective`)}
        >
          <CIcon icon={cilPencil} />
        </CButton>
      </CTooltip>
    </div>
  </div>

  <div className="d-flex align-items-center mt-3">
    <CButton
      color="light"
      variant="ghost"
      onClick={ObjhandlePrev}
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
      <ChevronLeft size={300} />
    </CButton>

    <div className="flex-grow-1 text-center fw-bold fs-5">
      {teamObjectives[currentTeamObjective]?.title}
    </div>

    <CButton
      color="light"
      variant="ghost"
      onClick={ObjhandleNext}
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
      <ChevronRight size={300} />
    </CButton>
  </div>
</CCardHeader>
            <CCardBody style={{ minHeight: 470 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '470px',
                }}
              >
                <ObjectiveDonut progress={teamObjectives[currentTeamObjective]?.progress} />
              </div>
            </CCardBody>
          </CCard>
          <ViewObjectivesModal
            visible={showObjectivesModal}
            onClose={() => setShowObjectivesModal(false)}
            okrs={okrs}
          />
        </CCol>

        {/* Right Column */}
        <CCol sm={7}>
          <InitiativesSection
            initiatives={initiatives}
            okrs={okrs}
            initiativeComments={initiativeComments}
            teamObjectives={teamObjectives}
          />

          <CCard>
              <CCardHeader>
              <div className="d-flex justify-content-between align-items-start">
                {/* Empty space to push icons to right */}
                <div></div>
                <div>
                  <CTooltip content="View All My key-results" placement="top">
                  <CButton
                    color="light"
                    variant="ghost"
                    onClick={() => alert('View List of Key Results}')}
                  >
                    <CIcon icon={cilList} />
                  </CButton>
                  </CTooltip>
                  <CTooltip content="Add new Key-result" placement="top">
                  <CButton
                    color="light"
                    variant="ghost"
                    onClick={() => alert('Add Key Result')}
                    className="me-2"
                  >
                    <CIcon icon={cilPlus} />
                  </CButton>
                  </CTooltip>
                  <CTooltip content="Edit key-result" placement="top">
                  <CButton
                    color="light"
                    variant="ghost"
                    onClick={() => alert('Edit Key Result')}
                  >
                    <CIcon icon={cilPencil} />
                  </CButton>
                  </CTooltip>
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
                  <ChevronLeft size={300} />
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
                  <ChevronRight size={300} />
                </CButton>
              </div>
            </CCardHeader>
             <CCardBody style={{ minHeight: 95 }}>
                  <div style={{ flex: 1, marginBottom: '1rem', overflowY: 'auto' }}>
                  <h5 className="text-center mb-2">{okrs[currentOKR]?.keyresult}</h5>
                </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Cards

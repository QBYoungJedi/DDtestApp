import React, { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CRow,
  CCol,
  CTooltip,
  CListGroup,
  CListGroupItem,
  CButton,
  CCollapse,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilStar, cilStarHalf, cilChevronBottom, cilChevronTop } from '@coreui/icons'
import { objectives, completedObjectives } from 'src/DummyData/objectivesdata'
import { teamMembers } from 'src/DummyData/Usersdata.js'

const ViewObjectivesModal = ({ visible, onClose, currentUser }) => {
  // Filter objectives early so we can initialize expandedObjectives properly
  const filteredObjectives = currentUser
    ? objectives.filter((obj) => obj.owner?.id === currentUser.id)
    : objectives

  const filteredCompleted = currentUser
    ? completedObjectives.filter((obj) => obj.owner?.id === currentUser.id)
    : completedObjectives

  // All objectives start expanded by default
  const [expandedObjectives, setExpandedObjectives] = useState(() => {
    const initialExpanded = {}
    filteredObjectives.forEach((obj) => {
      initialExpanded[obj.id] = true
    })
    return initialExpanded
  })

  const [favorites, setFavorites] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)
  const [hoveredObjectiveId, setHoveredObjectiveId] = useState(null)
  const [hoveredInitiativeId, setHoveredInitiativeId] = useState(null)

  // Toggle expand/collapse for objectives
  const toggleExpand = (id) => {
    setExpandedObjectives((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    )
  }

  // Get avatar URL by owner ID from teamMembers
  const getAvatarByOwnerId = (ownerId) => {
    const member = teamMembers.find((m) => m.id === ownerId)
    return member?.avatar || 'https://via.placeholder.com/32'
  }

  // Custom progress bar
  const renderProgress = (value, size = '1.5rem', fontSize = '0.75rem') => {
    let validValue = Number(value)
    if (isNaN(validValue) || validValue < 0) validValue = 0
    if (validValue > 100) validValue = 100

    return (
      <div
        className="progress"
        style={{
          backgroundColor: '#e9ecef',
          borderRadius: '0.375rem',
          height: size,
          position: 'relative',
          width: '100%',
          cursor: 'default',
        }}
      >
        <div
          style={{
            width: `${validValue}%`,
            backgroundColor: '#198754',
            height: '100%',
            borderRadius: '0.375rem',
            transition: 'width 0.3s ease',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: fontSize,
            lineHeight: size,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          {validValue}%
        </div>
      </div>
    )
  }

  return (
    <CModal visible={visible} onClose={onClose} size="xl">
      <CModalHeader>
        <CModalTitle className="d-flex justify-content-between align-items-center w-100">My Team's Objectives</CModalTitle>
              <div className="d-flex justify-content-end w-100 px-4 mt-2">
  <CButton color="warning" >
    Export
  </CButton>
</div>
      </CModalHeader>
      <CModalBody>
        <CRow className="mb-2 fw-bold text-secondary text-uppercase border-bottom pb-2 text-center">
          <CCol md="1">FAV</CCol>
          <CCol md="5">Objective</CCol>
          <CCol md="2">Due Date</CCol>
          <CCol md="2">Progress</CCol>
          <CCol md="2">Owner</CCol>
        </CRow>

        <CListGroup flush>
          {filteredObjectives.map((obj) => (
            <CListGroupItem
              key={obj.id}
              className="d-flex flex-column"
              style={{
                backgroundColor: hoveredObjectiveId === obj.id ? '#f2f2f2' : '#f8f9fa',
                transition: 'background 0.3s',
                border: '1px solid #dee2e6',
                borderRadius: '0.375rem',
                marginBottom: '0.5rem',
              }}
              onMouseEnter={() => setHoveredObjectiveId(obj.id)}
              onMouseLeave={() => setHoveredObjectiveId(null)}
            >
              <CRow className="align-items-center text-center" style={{ cursor: 'pointer' }}>
                <CCol md="1">
                  <CTooltip content="Favorite">
                    <CIcon
                      icon={favorites.includes(obj.id) ? cilStar : cilStarHalf}
                      onClick={() => toggleFavorite(obj.id)}
                      style={{
                        cursor: 'pointer',
                        color: favorites.includes(obj.id) ? '#f9c74f' : '#999',
                      }}
                    />
                  </CTooltip>
                </CCol>
                <CCol md="5" onClick={() => toggleExpand(obj.id)} className="text-start">
                  {obj.title}
                </CCol>
                <CCol md="2">{obj.dueDate}</CCol>
                <CCol md="3">{renderProgress(obj.progress)}</CCol>
                <CCol md="1">
                  <CButton size="sm" onClick={() => toggleExpand(obj.id)} color="light">
                    <CIcon icon={expandedObjectives[obj.id] ? cilChevronTop : cilChevronBottom} />
                  </CButton>
                </CCol>
              </CRow>

              <CCollapse visible={expandedObjectives[obj.id]}>
                {obj.initiatives.map((init) => {
                  const owner = init.owner
                  const avatarUrl = owner ? getAvatarByOwnerId(owner.id) : 'https://via.placeholder.com/32'
                  return (
                    <CRow
                      key={init.id}
                      className="py-1 px-2 mt-2 mb-1 align-items-center text-center"
                      style={{
                        fontSize: '0.85rem',
                        backgroundColor: hoveredInitiativeId === init.id ? '#e9ecef' : '#fdfdfd',
                        border: '1px solid #dee2e6',
                        borderRadius: '0.375rem',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={() => setHoveredInitiativeId(init.id)}
                      onMouseLeave={() => setHoveredInitiativeId(null)}
                    >
                      <CCol md="1"></CCol>
                      <CCol md="5" className="text-start">
                        {init.title}
                      </CCol>
                      <CCol md="2">{init.dueDate}</CCol>
                      <CCol md="3">{renderProgress(init.progress, '1rem')}</CCol>
                      <CCol md="1">
                        {owner ? (
                          <CTooltip content={owner.name}>
                            <img
                              src={avatarUrl}
                              alt={owner.name}
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                cursor: 'default',
                                border: '1px solid #ccc',
                              }}
                            />
                          </CTooltip>
                        ) : (
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              backgroundColor: '#ccc',
                              display: 'inline-block',
                            }}
                            title="Unassigned"
                          />
                        )}
                      </CCol>
                    </CRow>
                  )
                })}
              </CCollapse>
            </CListGroupItem>
          ))}
        </CListGroup>

        {/* Completed Objectives */}
        <div
          onClick={() => setShowCompleted(!showCompleted)}
          style={{
            cursor: 'pointer',
            backgroundColor: '#444',
            color: 'white',
            padding: '0.75rem',
            marginTop: '2rem',
            borderRadius: '0.375rem',
          }}
        >
          Completed or Deleted Objectives
        </div>

        <CCollapse visible={showCompleted}>
          <CListGroup flush className="mt-3">
            {filteredCompleted.map((obj) => (
              <CListGroupItem
                key={obj.id}
                className="d-flex flex-column"
                style={{
                  backgroundColor: '#f8f9fa',
                  border: '1px solid #dee2e6',
                  borderRadius: '0.375rem',
                  marginBottom: '0.5rem',
                }}
              >
                <CRow className="align-items-center text-center">
                  <CCol md="1">
                    <CIcon icon={cilStar} style={{ color: '#999' }} />
                  </CCol>
                  <CCol md="5">{obj.title}</CCol>
                  <CCol md="2">{obj.dueDate}</CCol>
                  <CCol md="3">{renderProgress(obj.progress)}</CCol>
                  <CCol md="1"></CCol>
                </CRow>

                {obj.initiatives.map((init) => {
                  const owner = init.owner
                  const avatarUrl = owner ? getAvatarByOwnerId(owner.id) : 'https://via.placeholder.com/32'
                  return (
                    <CRow
                      key={init.id}
                      className="py-1 px-2 mt-2 mb-1 align-items-center text-center"
                      style={{
                        fontSize: '0.85rem',
                        backgroundColor: '#fdfdfd',
                        border: '1px solid #dee2e6',
                        borderRadius: '0.375rem',
                      }}
                    >
                      <CCol md="1"></CCol>
                      <CCol md="5" className="text-start">
                        {init.title}
                      </CCol>
                      <CCol md="2">{init.dueDate}</CCol>
                      <CCol md="3">{renderProgress(init.progress, '1rem')}</CCol>
                      <CCol md="1">
                        {owner ? (
                          <CTooltip content={owner.name}>
                            <img
                              src={avatarUrl}
                              alt={owner.name}
                              style={{
                                width: 32,
                                height: 32,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                cursor: 'default',
                                border: '1px solid #ccc',
                              }}
                            />
                          </CTooltip>
                        ) : (
                          <div
                            style={{
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              backgroundColor: '#ccc',
                              display: 'inline-block',
                            }}
                            title="Unassigned"
                          />
                        )}
                      </CCol>
                    </CRow>
                  )
                })}
              </CListGroupItem>
            ))}
          </CListGroup>
        </CCollapse>
      </CModalBody>
    </CModal>
  )
}

export default ViewObjectivesModal

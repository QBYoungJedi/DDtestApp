import React, { useState } from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalTitle,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
  CTooltip,
  CProgress,
} from '@coreui/react'
import { initiatives } from 'src/DummyData/initiativesdata.js'
import { cilStarHalf, cilStar } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const ViewInitiativeModal = ({ visible, onClose, currentUser }) => {
  const [favoriteInitiatives, setFavoriteInitiatives] = useState(
    initiatives.map((i) => ({ ...i }))
  )

  const toggleFavorite = (id) => {
    setFavoriteInitiatives((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    )
  }

const userInitiatives = currentUser
  ? favoriteInitiatives
      .filter((i) => i.owner?.id === currentUser.id)
      .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)) // Favorites first
  : []


    const updateProgress = (id, newProgress) => {
  setFavoriteInitiatives((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, progress: newProgress } : item
    )
  )
}

  return (
    <CModal visible={visible} onClose={onClose} size="lg">
      <CModalHeader>
        <CModalTitle>My Initiatives</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {/* Header bar */}
<CRow className="mb-2 fw-bold text-secondary text-uppercase border-bottom pb-2">
  <CCol md="2" className="d-flex justify-content-center align-items-center">FAV</CCol>
  <CCol md="4" className="text-center">Initiative</CCol>
  <CCol md="3" className="text-center">Due Date</CCol>
  <CCol md="3" className="text-center">Progress</CCol>
</CRow>


        <CListGroup flush>
          {userInitiatives.map((item) => (
            <CListGroupItem
              key={item.id}
              className="d-flex align-items-center justify-content-center"
            >
              <CRow className="w-100 text-center align-items-center">
                <CCol md="1">
                  <CTooltip content="Add to favorites" placement="top">
                    <CIcon
                      icon={item.isFavorite ? cilStar : cilStarHalf}
                      onClick={() => toggleFavorite(item.id)}
                      style={{
                        cursor: 'pointer',
                        color: item.isFavorite ? '#f9c74f' : '#999',
                      }}
                    />
                  </CTooltip>
                </CCol>
                <CCol md="5">{item.title}</CCol>
                <CCol md="3">{item.dueDate}</CCol>
<CCol md="3">
  <div
    className="progress"
    style={{
      backgroundColor: '#acacacff',
      borderRadius: '0.375rem',
      height: '1.5rem',
      cursor: 'pointer',
      position: 'relative',
      width: '100%',
    }}
    onClick={(e) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const newProgress = Math.round((clickX / rect.width) * 100)
      updateProgress(item.id, newProgress)
    }}
  >
    <div
      style={{
        width: `${item.progress}%`,
        backgroundColor: '#025ddbff',
        height: '100%',
        borderRadius: '0.375rem',
        transition: 'width 0.2s ease-in-out',
      }}
    ></div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '0.75rem',
        lineHeight: '1.5rem',
      }}
    >
      {item.progress}%
    </div>
  </div>
</CCol>
              </CRow>
            </CListGroupItem>
          ))}
        </CListGroup>
      </CModalBody>
    </CModal>
  )
}

export default ViewInitiativeModal

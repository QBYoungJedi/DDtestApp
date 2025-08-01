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

  const userInitiatives = favoriteInitiatives
    .filter((i) => i.owner?.id === currentUser.id)
    .sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0)) // Favorites first

  return (
    <CModal visible={visible} onClose={onClose} size="lg">
      <CModalHeader>
        <CModalTitle>My Initiatives</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {/* Header bar */}
        <CRow className="mb-2 fw-bold text-secondary text-uppercase border-bottom pb-2 text-center">
          <CCol md="1">★</CCol>
          <CCol md="5">Initiative</CCol>
          <CCol md="3">Due Date</CCol>
          <CCol md="3">Progress</CCol>
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
                  <CProgress value={item.progress} color="info" />
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

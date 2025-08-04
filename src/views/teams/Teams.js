import React, { useState } from 'react'
import {
  CAvatar,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormInput,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { teamMembers } from 'src/DummyData/Usersdata.js'

const Teams = () => {
  const [searchText, setSearchText] = useState('')

  // Filter teamMembers based on search, safely accessing name and department
  const filteredData = teamMembers.filter((item) => {
    const search = searchText.toLowerCase()
    // Adjust these to your actual data keys if different
    const name = item.user?.name || item.name || '' // fallback if you have either structure
    const department = item.department || ''
    return (
      name.toLowerCase().includes(search) ||
      department.toLowerCase().includes(search)
    )
  })

  return (
    <CRow style={{ marginBottom: 50 }}>
      <CCol>
        <CCardBody>
          {/* Search Bar */}
          <CRow className="mb-4">
            <CCol>
              <CFormInput
                placeholder="Search by name or department"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </CCol>
          </CRow>

          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead className="text-nowrap">
              <CTableRow>
                <CTableHeaderCell className="bg-body-tertiary text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>

                {/* Column Headers */}
                <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Email</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Phone</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary">Department</CTableHeaderCell>
                <CTableHeaderCell className="bg-body-tertiary text-center">Manager</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {filteredData.map((item, index) => (
                <CTableRow key={item.id ?? index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar?.src || item.avatar || ''} />
                  </CTableDataCell>

                  <CTableDataCell>{item.user?.name || item.name || 'No Name'}</CTableDataCell>
                  <CTableDataCell>{item.email || '—'}</CTableDataCell>
                  <CTableDataCell>{item.phone || '—'}</CTableDataCell>
                  <CTableDataCell>{item.department || '—'}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.manager || '—'}</CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCol>
    </CRow>
  )
}

export default Teams

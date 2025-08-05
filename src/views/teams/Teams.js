import React, { useState, useMemo } from 'react'
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
  CButton,
  CCollapse,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPeople, cilChevronBottom, cilChevronTop, cilPlus } from '@coreui/icons'
import { teamMembers } from 'src/DummyData/Usersdata.js'

const Teams = () => {
  const [searchText, setSearchText] = useState('')

  // Filter and group team members by department
  const groupedByDepartment = useMemo(() => {
    const filtered = teamMembers.filter((item) => {
      const search = searchText.toLowerCase()
      const name = item.user?.name || item.name || ''
      const department = item.department || ''
      return (
        name.toLowerCase().includes(search) ||
        department.toLowerCase().includes(search)
      )
    })

    return filtered.reduce((acc, user) => {
      const dept = user.department || 'Unknown'
      if (!acc[dept]) acc[dept] = []
      acc[dept].push(user)
      return acc
    }, {})
  }, [searchText])

  const sortedDepartments = Object.keys(groupedByDepartment).sort()

  // 🔹 Initialize all departments expanded ONCE
  const [expandedDepartments, setExpandedDepartments] = useState(() => {
    const initialState = {}
    sortedDepartments.forEach((dept) => {
      initialState[dept] = true
    })
    return initialState
  })

  // Toggle collapse per department
  const toggleDepartment = (dept) => {
    setExpandedDepartments((prev) => ({
      ...prev,
      [dept]: !prev[dept],
    }))
  }

  return (
    <CRow style={{ marginBottom: 50 }}>
      <CCol>
        <CCardBody>
          {/* Search + Add Button */}
          <CRow className="mb-4 align-items-center" style={{ gap: '8px' }}>
            <CCol xs="auto" style={{ flexGrow: 1 }}>
              <CFormInput
                placeholder="Search by name or department"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </CCol>
            <CCol xs="auto">
              <CTooltip content="Add User or Team" placement="top">
                <CButton color="success">
                  <CIcon icon={cilPlus} className="me-2" />
                  Add
                </CButton>
              </CTooltip>
            </CCol>
          </CRow>

          {/* Departments */}
          {sortedDepartments.length === 0 && <div>No departments found.</div>}

          {sortedDepartments.map((department) => (
            <div
              key={department}
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '0.375rem',
                marginBottom: '1rem',
              }}
            >
              {/* Header */}
              <div
                onClick={() => toggleDepartment(department)}
                style={{
                  padding: '0.75rem 1.25rem',
                  cursor: 'pointer',
                  backgroundColor: '#f8f9fa',
                  fontWeight: '600',
                  userSelect: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                aria-expanded={!!expandedDepartments[department]}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleDepartment(department)
                  }
                }}
              >
                <span>{department}</span>
                <CIcon
                  icon={expandedDepartments[department] ? cilChevronTop : cilChevronBottom}
                  size="lg"
                />
              </div>

              {/* Collapsible Table */}
              <CCollapse visible={!!expandedDepartments[department]}>
                <div style={{ padding: '1rem' }}>
                  <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead className="text-nowrap">
                      <CTableRow>
                        <CTableHeaderCell className="bg-body-tertiary text-center">
                          <CIcon icon={cilPeople} />
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">User</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">Email</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">Phone</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">Department</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary text-center">Manager</CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {groupedByDepartment[department].map((item, index) => (
                        <CTableRow key={item.id ?? index}>
                          <CTableDataCell className="text-center">
                            <CAvatar
                              size="md"
                              src={item.avatar?.src || item.avatar || ''}
                            />
                          </CTableDataCell>
                          <CTableDataCell>
                            {item.user?.name || item.name || 'No Name'}
                          </CTableDataCell>
                          <CTableDataCell>{item.email || '—'}</CTableDataCell>
                          <CTableDataCell>{item.phone || '—'}</CTableDataCell>
                          <CTableDataCell>{item.department || '—'}</CTableDataCell>
                          <CTableDataCell className="text-center">
                            {item.manager || '—'}
                          </CTableDataCell>
                        </CTableRow>
                      ))}
                    </CTableBody>
                  </CTable>
                </div>
              </CCollapse>
            </div>
          ))}
        </CCardBody>
      </CCol>
    </CRow>
  )
}

export default Teams

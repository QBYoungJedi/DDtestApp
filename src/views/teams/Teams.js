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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

const Teams = () => {
  const [searchText, setSearchText] = useState('')


  {/* Static Data*/}
  const tableExample = [
      {
    avatar: { src: avatar1, status: 'success' },
    user: { name: 'Yiorgos Avraamu'},
      email: 'yiorgos@1898.com',
      phone: '123-456-7890',
      department: 'HR',
      manager: 'Eugne Krabs',
    },
    {
      avatar: { src: avatar2 },
      user: { name: 'Avram Tarasios' },
      email: 'Avram.Tarasios@1898.com',
      phone: '913-111-1111',
      department: 'Engineering',
      manager: 'Sandy Cheeks',
    },
    {
      avatar: { src: avatar3 },
      user: { name: 'Quintin Ed' },
      department: 'Marketing',
      manager: 'Larry Lobster',
    },
    {
      avatar: { src: avatar4, },
      user: { name: 'Enéas Kwadwo' },
      department: 'HR',
      manager: 'Eugne Krabs',
    },
    {
      avatar: { src: avatar5, },
      user: { name: 'Agapetus Tadeáš' },
      department: 'Finance',
      manager: 'Mr. Krabs',
    },
    {
      avatar: { src: avatar6, },
      user: { name: 'Friderik Dávid' },
      department: 'Engineering',
      manager: 'Sandy Cheeks',
    },
  ]

  const filteredData = tableExample.filter((item) => {
    const search = searchText.toLowerCase()
    return (
      item.user.name.toLowerCase().includes(search) ||
      item.department.toLowerCase().includes(search)
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
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar.src} />
                  </CTableDataCell>

                  {/* Table Static Data*/}
                  <CTableDataCell>{item.user.name}</CTableDataCell>
                  <CTableDataCell>{item.email}</CTableDataCell>
                  <CTableDataCell>{item.phone}</CTableDataCell>
                  <CTableDataCell>{item.department}</CTableDataCell>
                  <CTableDataCell className="text-center">{item.manager}</CTableDataCell>
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

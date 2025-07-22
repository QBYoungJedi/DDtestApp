import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
  CContainer,
} from '@coreui/react'

const Cards = () => {
  return (
  <CContainer fluid style={{marginBottom: 32}}>  
    <CRow sm={{gutterX: 5}} >
      <CCol sm={5}>
        <CCard>
              <CCard>
                <CCardHeader>
                  <CNav variant="tabs" className="card-header-tabs">
                    <CNavItem>
                      <CNavLink href="#" active>
                        OKR 1
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>OKR 2</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink>OKR 3</CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody style={{minHeight:500}}>
                
                </CCardBody>
              </CCard>
        </CCard>
      </CCol>
        <CCol sm={7}>
        <CCard>
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
                <CCardBody style={{minHeight: 185}}>
                </CCardBody>
              </CCard>
        </CCard>
        <CCard style={{marginTop: 80}}>
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
                <CCardBody style={{minHeight: 185}}>
                </CCardBody>
              </CCard>
        </CCard>
      </CCol>
    </CRow>
  </CContainer> 
  )
}

export default Cards

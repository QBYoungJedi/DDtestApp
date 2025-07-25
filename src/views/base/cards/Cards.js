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
import CarouselsC from '../carousels/CarouselsC'


const Cards = () => {
  return (
  <CContainer style={{marginBottom: 32}}>  
    <CRow sm={{gutterX: 5}} >
      <CCol sm={5}>
        <CCard>
              <CCard>
                <CCardHeader>
                  <CNav variant="tabs" className="card-header-tabs">
                    <CNavItem>
                      <CNavLink ata-bs-toggle="tab" data-bs-target="#Tab1" active>
                        OKR 1
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#2">OKR 2</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#3">OKR 3</CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody style={{minHeight:500}} id='#Tab1'>
                <CContainer>
                 <CCard className='d-flex align-content-center w-200'>
                  <CCardBody className='text-center'>
                    Live Safer
                  </CCardBody>
                 </CCard>
                </CContainer>  
                 <CarouselsC/>
                </CCardBody>
              </CCard>
        </CCard>
        <CCard>
              <CCard>
                <CCardHeader>
                  <CNav variant="tabs" className="card-header-tabs">
                    <CNavItem>
                      <CNavLink data-bs-toggle="tab" data-bs-target="#Tab2">
                        OKR 1
                      </CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#Tab2">OKR 2</CNavLink>
                    </CNavItem>
                    <CNavItem>
                      <CNavLink href="#3">OKR 3</CNavLink>
                    </CNavItem>
                  </CNav>
                </CCardHeader>
                <CCardBody style={{minHeight:500}} id='#Tab2'>
                <CContainer>
                 <CCard className='d-flex align-content-center w-200'>
                  <CCardBody className='text-center'>
                    Raise 20% more for NGO 
                  </CCardBody>
                 </CCard>
                </CContainer>  
                 <CarouselsC/>
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

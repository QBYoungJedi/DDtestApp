import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import Pie from '../../charts/Pie'
import Bar from '../../charts/Bar'

// Carousel at the bottom of the dashboard page
const CarouselsC = () => {
  return (
<CContainer>   
  <CCardBody style={{ minWidth: 300 }}>
  <CCarousel controls indicators>
                <CCarouselItem>
                <Pie/>
                </CCarouselItem>
                <CCarouselItem>
                <Bar/>
                </CCarouselItem>
                <CCarouselItem>
                <Pie/>
                </CCarouselItem>
   </CCarousel>
   </CCardBody> 
</CContainer>              
  )
}

export default CarouselsC
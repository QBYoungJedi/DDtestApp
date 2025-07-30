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

//controls the team's graph carousel on the dashboard
const CarouselsC = () => {
return (
    <CCarousel controls indicators style={{ width: '100%' }}>
      <CCarouselItem style={{ width: '100%' }}>
        <Pie />
      </CCarouselItem>
      <CCarouselItem style={{ width: '100%' }}>
        <Bar />
      </CCarouselItem>
      <CCarouselItem style={{ width: '100%' }}>
        <Pie />
      </CCarouselItem>
    </CCarousel>             
  )
}

export default CarouselsC

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


const CarouselsC = () => {
  return (
<CContainer>    
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
</CContainer>              
  )
}

export default CarouselsC
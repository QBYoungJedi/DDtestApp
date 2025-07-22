import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'

const Carousels = () => {
  return (
  <CCarousel controls indicators light>
                <CCarouselItem>
                  <img className="d-block w-100" src="src\assets\images\KC banner.jpg" alt="OKR 1" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>OKR 1</h5>
                    <p>LIVE SAFE</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src="src\assets\images\KC banner.jpg" alt="OKR 2" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>OKR 2</h5>
                    <p>Raise more 20% more for chairty </p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src="src\assets\images\KC banner.jpg" alt="OKR 3" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>OKR 3</h5>
                    <p>Raise NPS score by 35%</p>
                  </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src='src\assets\images\KC banner.jpg' alt="OKR 4" />
                  <CCarouselCaption className="d-none d-md-block">
                    <h5>OKR 4</h5>
                    <p>Increase sales by 100%</p>
                  </CCarouselCaption>
                </CCarouselItem>
              </CCarousel>
  )
}

export default Carousels

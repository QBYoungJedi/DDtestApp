import React, { useRef } from 'react'
import {
  CCarousel,
  CCarouselItem,
  CContainer,
} from '@coreui/react'

const Carousels = ({ currentOKR, setCurrentOKR, okrs }) => {
  const carouselRef = useRef(null)

  const handleSlideEnd = () => {
    if (carouselRef.current) {
      const activeSlide = carouselRef.current.querySelector('.carousel-item.active')
      const newIndex = Array.from(carouselRef.current.querySelectorAll('.carousel-item')).indexOf(activeSlide)
      if (newIndex !== -1 && newIndex !== currentOKR) {
        setCurrentOKR(newIndex)
      }
    }
  }

  return (
    <CContainer>
      <div ref={carouselRef}>
        <CCarousel
          interval={false}
          controls
          indicators
          onSlid={handleSlideEnd}
          activeIndex={currentOKR}
        >
          {okrs.map((okr, index) => (
            <CCarouselItem key={index}>
              <h4 className="text-center">{okr.title}</h4>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
    </CContainer>
  )
}

export default Carousels

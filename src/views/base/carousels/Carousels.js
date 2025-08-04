import React, { useRef } from 'react'
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CContainer,
  CImage,
} from '@coreui/react'
import { bottom } from '@popperjs/core'
import { color } from 'chart.js/helpers'

const Carousels = ({ currentOKR, setCurrentOKR, comokr }) => {
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
          {comokr.map((comokr, index) => (
            <CCarouselItem key={index}>
              <CImage src='src\assets\images\white.jpg' className="w-100" height={300}/>
              <CCarouselCaption style={{position: 'none', bottom: 115, color: 'black'}} className='fs-2'>{comokr.title}</CCarouselCaption>
            </CCarouselItem>
          ))}
        </CCarousel>
      </div>
    </CContainer>
  )
}

export default Carousels

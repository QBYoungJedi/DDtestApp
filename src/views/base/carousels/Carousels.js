import 'src/scss/Carousels.scss'
import React, { useState } from 'react'
import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CContainer,
  CImage,
} from '@coreui/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Carousels = ({ comokr }) => {
  const [currentOKR, setCurrentOKR] = useState(0)
  const totalSlides = comokr.length

  const goToPrev = () => {
    setCurrentOKR((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNext = () => {
    setCurrentOKR((prev) => (prev + 1) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentOKR(index)
  }

  return (
    <CContainer className="custom-carousel">
      <div className="position-relative">
        <CCarousel
          key={currentOKR}
          interval={false}
          controls={false}
          indicators={false} // custom indicators
        >
          <CCarouselItem>
            <CImage
              src="src/assets/images/white.jpg"
              className="w-100"
              height={300}
            />
            <CCarouselCaption
              style={{ bottom: 115, color: 'black' }}
              className="fs-2"
            >
              {comokr[currentOKR]?.title}
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>

        {/* Arrows */}
        <button
          className="carousel-custom-control left"
          onClick={goToPrev}
          aria-label="Previous"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          className="carousel-custom-control right"
          onClick={goToNext}
          aria-label="Next"
        >
          <ChevronRight size={48} />
        </button>

        {/* Indicators INSIDE carousel container */}
        <div className="custom-indicators">
          {comokr.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`indicator-dot ${index === currentOKR ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </CContainer>
  )
}

export default Carousels

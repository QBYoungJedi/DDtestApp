import React from 'react'
import { CFormTextarea } from '@coreui/react'
import { auto, left } from '@popperjs/core'

const Rtextarea = () => {
  return (
    <CFormTextarea
      style={{minHeight: 160, fontSize: 23, whiteSpace:'pre-wrap'}}
      plainText
      aria-label="Key-results for OKR 1"
      disabled
      readOnly
    >
    1. Learn more about mental and physical health  
    2. Learn about traffic laws and practice safe law
    3. Learn what you can do to better secure your homes</CFormTextarea>
  )
}

export default Rtextarea
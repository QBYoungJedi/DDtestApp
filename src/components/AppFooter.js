import React from 'react'
import { CFooter } from '@coreui/react'
import Ai from './AI'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto, float-start">
        <span className="me-1">Powered by</span>
          Digital Dawn          
      </div>
      <Ai/>
    </CFooter>
  )
}

export default React.memo(AppFooter)

    import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'


const Ai = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" style={{borderRadius:"50%", height: 20, width: 20}} onClick={() => setVisible(!visible)}>
        
      </CButton>
      <CModal
        className='m-0'
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="Dawn"
      >
        <CModalHeader className='m-0'>
          <CModalTitle id="Dawn"></CModalTitle>
        </CModalHeader>
        <CModalBody> 
        <iframe style={{height:500, width:465, margin: 0}} src="https://copilotstudio.microsoft.com/environments/Default-88227c99-d157-4dbe-8e33-d8b3fcc29577/bots/cr69f_dawn/webchat?__version__=2"></iframe>
        </CModalBody>
        <CModalFooter className='m-0'>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
    </>
    )
};

export default Ai
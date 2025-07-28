import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartPie,
} from '@coreui/react-chartjs'


const Pie = () => {
    return( 
        <CCol>
                <CCard style={{height: 420}}>
                  <CCardBody className='mt-sm-5 mb-4'>
                
                    <CChartPie className='align-content-center'
                      data={{
                        labels: ['Red', 'Green', 'Yellow'],
                        datasets: [
                          {
                            data: [300, 50, 100],
                            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                          },
                        ],
                      }}
                    />
                  </CCardBody>
                </CCard>
        </CCol>
    )
};

export default Pie 
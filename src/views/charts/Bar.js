import React from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'

const Bar = () => {
    return(
         <CCol sm={12}>
            <CCard style={{height: 420}}>
              <CCardBody className='mt-sm-5 mb-4'>
                <CChartBar height={200} width={150} className='mt-sm-10'
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'Safety test scores',
                        backgroundColor: '#f87979',
                        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                      },
                    ],
                  }}
                  labels="months"
                />
              </CCardBody>
            </CCard>
          </CCol>
    )
}

export default Bar
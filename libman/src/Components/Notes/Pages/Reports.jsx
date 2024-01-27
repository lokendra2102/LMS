import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/Reports_1.jpg'
import v2 from '../../../Images/Reports_2.jpg'
import v3 from '../../../Images/Reports_3.jpg'
import v4 from '../../../Images/Reports_4.jpg'
import v5 from '../../../Images/Reports_5.jpg'
import v6 from '../../../Images/Reports_6.jpg'
import v7 from '../../../Images/Reports_7.jpg'
import v8 from '../../../Images/Reports_8.jpg'


function Reports() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>Reports</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            <Image src={v6} thumbnail className='stepsImage'/>
            <Image src={v7} thumbnail className='stepsImage'/>
            <Image src={v8} thumbnail className='stepsImage'/>
            
            
            
        </Container>
    </>
  )
}

export default Reports
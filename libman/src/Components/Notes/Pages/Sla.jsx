import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/Sla_1.jpg'
import v2 from '../../../Images/Sla_2.jpg'
import v3 from '../../../Images/Sla_3.jpg'
import v4 from '../../../Images/Sla_4.jpg'
import v5 from '../../../Images/Sla_5.jpg'


function Sla() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>SLA(Service-level agreement)</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            
            
            
        </Container>
    </>
  )
}

export default Sla
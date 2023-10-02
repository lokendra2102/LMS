import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/activity_1.jpg'
import v2 from '../../../Images/activity_2.jpg'
import v3 from '../../../Images/activity_3.jpg'
import v4 from '../../../Images/activity_4.jpg'
import v5 from '../../../Images/activity_5.jpg'
import v6 from '../../../Images/activity_5.jpg'

function Activity() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>Activities</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            
            
            
        </Container>
    </>
  )
}

export default Activity
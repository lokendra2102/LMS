import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/circum_1.jpg'
import v2 from '../../../Images/circum_2.jpg'
import v3 from '../../../Images/circum_3.jpg'
import v4 from '../../../Images/circum_4.jpg'


function Circumstancing() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>CIRCUMSTANCING</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            
            
            
            
        </Container>
    </>
  )
}

export default Circumstancing
import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/Design_1.jpg'
import v2 from '../../../Images/Design_2.jpg'
import v3 from '../../../Images/Design_3.jpg'




function DesignThinking() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>Design Thinking</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            
            
            
            
            
        </Container>
    </>
  )
}

export default DesignThinking
import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/V_P1.png'

function Validation5() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>EMAIL ID FULL CODE</p>
            <Image src={v1} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation5
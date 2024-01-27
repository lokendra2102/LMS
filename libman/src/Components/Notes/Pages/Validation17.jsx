import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v12 from '../../../Images/v_p12.png'

function Validation17() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}> Split date from current System date:
:</p>
            <Image src={v12} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation17
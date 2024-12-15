import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v6 from '../../../Images/v_p6.png'

function Validation10() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>Pin Code Validation
:</p>
            <Image src={v6} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation10
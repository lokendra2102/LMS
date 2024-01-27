import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v14 from '../../../Images/v_p14.png'

function Validation19() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}> Registration number Code
:</p>
            <Image src={v14} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation19
import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v2 from '../../../Images/v_p2.png'

function Validation6() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>PHONE NUMBER VALidations</p>
            <Image src={v2} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation6
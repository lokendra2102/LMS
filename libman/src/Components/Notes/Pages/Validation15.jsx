import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v10 from '../../../Images/v_p10.png'

function Validation15() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>Age Calucations:
:</p>
            <Image src={v10} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation15
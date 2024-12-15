import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v7 from '../../../Images/v_p7.png'

function Validation12() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>To get Current Date
:</p>
            <Image src={v7} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation12
import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v8 from '../../../Images/v_p8.png'

function Validation13() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>DATE OF BIRTH:(MUST BE IN PAST):
:</p>
            <Image src={v8} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation13
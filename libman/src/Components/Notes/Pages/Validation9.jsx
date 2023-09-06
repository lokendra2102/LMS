import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v5 from '../../../Images/v_p5.png'

function Validation9() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>CVV:</p>
            <Image src={v5} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation9
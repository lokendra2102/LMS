import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v13 from '../../../Images/v_p13.png'

function Validation18() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}> Validating the Age with Date of Birth:
:</p>
            <Image src={v13} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation18
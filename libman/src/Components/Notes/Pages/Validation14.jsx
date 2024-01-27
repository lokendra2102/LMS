import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v9 from '../../../Images/v_p9.png'

function Validation14() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>Mobile Number that starts with 6 or7or8or9:
:</p>
            <Image src={v9} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation14
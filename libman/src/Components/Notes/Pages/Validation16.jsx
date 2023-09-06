import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v11 from '../../../Images/v_p11.png'

function Validation16() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>Notice Peroid in Pega:
:</p>
            <Image src={v11} thumbnail className='stepsImage'/>
        </Container>
    </>
  )
}

export default Validation16
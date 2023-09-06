import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'

function Validation4() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>USER ID</p>
            <p className='mb-1'><b>substring(.FirstName,0,3) +
substring( .LastName,0,2) + round(random(10,99))</b></p>
        </Container>
    </>
  )
}

export default Validation4
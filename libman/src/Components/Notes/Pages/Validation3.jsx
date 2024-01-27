import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'

function Validation3() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>DOB By Age</p>
            <p className='mb-1'><b>DateTimeDifference(dateValue(.DOB),CurrentDateTime(),"Y")</b></p>
        </Container>
    </>
  )
}

export default Validation3
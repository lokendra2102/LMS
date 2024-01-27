import React from 'react'

import Notes from '../Notes'
import { Container } from 'react-bootstrap'


function Validation11() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>To get a future date from today:</p>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', }}><b>@FormatDateTime(@addCalendar(@CurrentDateTime(),"0","6","0","0","0","0","0"),"dd/MM/yy","IST","")</b></p>
            
        </Container>
    </>
  )
}

export default Validation11
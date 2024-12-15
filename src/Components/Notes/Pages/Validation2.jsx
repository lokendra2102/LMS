import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'

function Validation2() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500', color : "red"}}>visible_conditions:_by_access_groups</p>
            <p className='mb-1'><b>AccessGroup.pyAccessGroup == 'AsclepiusCare:Doctors'----------single grp</b></p>
            <p className='mb-1'><b>AccessGroup.pyAccessGroup == 'AsclepiusCare:Patients' || pyWorkPage.pyAccessGroup == ' AsclepiusCare:Authors'--- 2 grps.</b></p>
            
            
     
      

        </Container>
    </>
  )
}

export default Validation2
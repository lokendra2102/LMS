import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/caseApproval_1.jpg'
import v2 from '../../../Images/caseApproval_2.jpg'


function CaseApprovals() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>CASE APPROVALS</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            
            
            
            
        </Container>
    </>
  )
}

export default CaseApprovals
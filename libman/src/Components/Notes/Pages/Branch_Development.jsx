import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/branch_1.jpg'
import v2 from '../../../Images/branch_2.jpg'
import v3 from '../../../Images/branch_3.jpg'


function Branch_Development() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>Branch Development</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            
            
            
            
        </Container>
    </>
  )
}

export default Branch_Development
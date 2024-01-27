import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/class_1.png'
import v2 from '../../../Images/class_2.png'
import v3 from '../../../Images/class_3.png'
import v4 from '../../../Images/class_4.png'
import v5 from '../../../Images/class_5.png'


function Class_Hierarchy() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>CLASS AND CLASS HIERARCHY</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            
            
            
            
        </Container>
    </>
  )
}

export default Class_Hierarchy
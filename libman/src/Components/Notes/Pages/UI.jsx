import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/UI_1.jpg'
import v2 from '../../../Images/UI_2.jpg'
import v3 from '../../../Images/UI_3.jpg'
import v4 from '../../../Images/UI_4.jpg'
import v5 from '../../../Images/UI_5.jpg'
import v6 from '../../../Images/UI_6.jpg'
import v7 from '../../../Images/UI_7.jpg'


function UI() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>UI</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            <Image src={v6} thumbnail className='stepsImage'/>
            <Image src={v7} thumbnail className='stepsImage'/>
            
            
            
        </Container>
    </>
  )
}

export default UI
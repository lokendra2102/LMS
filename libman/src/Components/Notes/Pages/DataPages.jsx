import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/dp_1.png'
import v2 from '../../../Images/dp_2.png'
import v3 from '../../../Images/dp_3.png'
import v4 from '../../../Images/dp_4.png'
import v5 from '../../../Images/dp_5.png'
import v6 from '../../../Images/dp_6.png'
import v7 from '../../../Images/dp_7.png'
import v8 from '../../../Images/dp_8.png'
import v9 from '../../../Images/dp_9.png'


function DataPages() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>DATA PAGES</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            <Image src={v6} thumbnail className='stepsImage'/>
            <Image src={v7} thumbnail className='stepsImage'/>
            <Image src={v8} thumbnail className='stepsImage'/>
            <Image src={v9} thumbnail className='stepsImage'/>
            
            
            
            
        </Container>
    </>
  )
}

export default DataPages
import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/ruleset_1.png'
import v2 from '../../../Images/ruleset_2.png'
import v3 from '../../../Images/ruleset_3.png'
import v4 from '../../../Images/ruleset_4.png'

function Ruleset() {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4'>
            <h3><b>RULESET</b></h3>
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            
            
        </Container>
    </>
  )
}

export default Ruleset
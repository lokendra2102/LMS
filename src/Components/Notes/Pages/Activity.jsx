import React from 'react'
import {
    Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v1 from '../../../Images/activity_1.jpg'
import v2 from '../../../Images/activity_2.jpg'
import v3 from '../../../Images/activity_3.jpg'
import v4 from '../../../Images/activity_4.jpg'
import v5 from '../../../Images/activity_5.jpg'
import ClipBoard from '../../ClipBoard/ClipBoard'


function Activity({toast, setMessage}) {
  return (
    <>
        {/* <Notes user={user} path={path} /> */}
        
        <Container fluid className='px-5 mt-4 note-container'>
            <h3><b>Activities</b></h3>
            {/* <ClipBoard name={"testing"} code={`#include<std.h>
gbkmhd;gd;gmd;rgd;grl
mrg;lsrmgslkmg;smg;s
dfkgmd;lfg,md;fg,s;fg,s;
d;lhmd;lg,;lrs,gms;lrg,`} toast={toast} setMessage={setMessage}/> */}
            <Image src={v1} thumbnail className='stepsImage'/>
            <Image src={v2} thumbnail className='stepsImage'/>
            <Image src={v3} thumbnail className='stepsImage'/>
            <Image src={v4} thumbnail className='stepsImage'/>
            <Image src={v5} thumbnail className='stepsImage'/>
            
            
            
        </Container>
    </>
  )
}

export default Activity
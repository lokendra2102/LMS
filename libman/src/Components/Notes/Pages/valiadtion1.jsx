import React from 'react'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'

function Valiadtion1({user, path}) {
  return (
    <>
        <Notes user={user} path={path} />
        <Container fluid className='px-5 mt-4'>
            <p className='fs-5 text-uppercase text-decoration-underline' style={{fontWeight : '500'}}>Activity:</p>

            <p className='mb-1'>1. Declare expression = use for calculations</p>
            <p className='mb-1'>2. Data pages - used to cache data on demand and store them into the clipboard.</p>
            <p className='mb-1'>3. Data transform  - used to manipulate data ( copy data, transfer data, set values/ propagate data)</p>
     
      

        </Container>
    </>
  )
}

export default Valiadtion1
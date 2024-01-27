import React from 'react'
import {
  Image
} from 'react-bootstrap'
import Notes from '../Notes'
import { Container } from 'react-bootstrap'
import v4 from '../../../Images/v_p4.png'

function Validation8({ user, isPremium, bought, id }) {
  return (
    <>
      {
        isPremium && (!user.isPremium || bought.has(id))
          ? <>
            {/* <Notes user={user} path={path} /> */}

            <Container fluid className='px-5 mt-4'>
              <p className='fs-5 text-uppercase text-decoration-underline' style={{ fontWeight: '500', color: "red" }}>CARD NUMBER VALIDATION:</p>
              <Image src={v4} thumbnail className='stepsImage' />
            </Container>
          </>
          : <>
            <h1>Kindly Buy The Course</h1>
          </>
      }
    </>
  )
}

export default Validation8
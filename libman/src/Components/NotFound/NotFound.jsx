import React from 'react'
import {
    Container,
    Button,
    Image
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NotFound({github}) {
  return (
    <Container fluid className='my-5 d-flex flex-column justify-content-center align-items-center'>
        <Container fluid className='notFoundImage'>
          <Image src={github+"404.svg"} rounded className=''/>
        </Container>
        <Container fluid className='mt-3 d-flex flex-column justify-content-center align-items-center text-center'>
            <h2 className='fs-3 fw-normal notFoundText'>This page you're looking for doesn't exist.</h2>
            <Button name='Go To Home' className='text-capitalize goBackBtn fw-medium px-3' type='button'>
              <NavLink className='pb-0 text-decoration-none text-light' to='/'>
                  go to home
              </NavLink>
            </Button>
        </Container>
    </Container>
  )
}

export default NotFound
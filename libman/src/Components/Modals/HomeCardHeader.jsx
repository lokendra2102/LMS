import React from 'react'
import { Container } from 'react-bootstrap'

function HomeCardHeader({paths, isAbout}) {
  return (
    <Container fluid className={`px-5 ps-4 ${!isAbout ? 'd-flex align-items-center justify-content-between book_head' : 'text-center text-decoration-underline'}`}>
        <h1 className='fs-3 fw-bold text-center text-uppercase book_headline'>{paths}</h1>
    </Container>
  )
}

export default HomeCardHeader
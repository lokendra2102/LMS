import React, { useContext } from 'react'
import {
  Button,
  Card,
  Container,
  Dropdown,
  Row,

} from 'react-bootstrap'

import { BookContext } from '../../Context/App.context'

function Notes({user}) {
  const { paths } = useContext(BookContext)
  return (
    <>
      <Container fluid className='mt-5'>
        <Container fluid className='px-5 ps-4 d-flex align-items-center justify-content-between book_head'>
          <h1 className='fs-3 fw-bold text-center text-decoration-underline notes_headline'><span className='text-uppercase'>{paths[0]}</span> - <span className='text-capitalize'>{paths[1].split("-").map(ele => ele[0].toUpperCase()+ele.slice(1).toLowerCase()).join(" ")}</span></h1>
        </Container>
      </Container>
    </>
  )
}

export default Notes
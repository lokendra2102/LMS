import React from 'react'
import { Container } from 'react-bootstrap'

function HomeCardHeader({paths, isAbout}) {
  return (
    <Container fluid className={`${!isAbout ? 'px-5 ps-4 d-flex align-items-center justify-content-between book_head' : 'text-center aboutHead px-3 py-4 text-light'}`}>
        <h1 className={`fs-3 fw-bold text-center text-uppercase book_headline ${isAbout ? 'text-decoration-underline' : ''}`}>{paths}</h1>
        {
          isAbout ? 
          <p className='mb-0 mx-lg-5 mx-xl-5 mx-md-3 mx-sm-1 text-center fs-5 pt-4 about_text'>
            <strong className='text-uppercase'>pega#</strong> is a one-stop destination for pega learners.This website includes all the pega basics , 
            advanced and enchanced concepts the people will get all the relevant information regarding pega.
            It is very helpful for the beginners to learn and  work on pega.
            In this website creation the people involved who are  working in a top mnc companies as a pega developers 
            and also has been part of <strong className='text-uppercase'>winners</strong> in <strong className='text-capitalize'>pega community hackathon 2022</strong>.
          </p>
          : <></>
        }
    </Container>
  )
}

export default HomeCardHeader
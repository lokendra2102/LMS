import React from 'react'
import { Container } from 'react-bootstrap'

function HomeCardHeader({paths, isAbout}) {
  return (
    <Container fluid className={`${!isAbout ? 'px-5 ps-4 d-flex align-items-center justify-content-between book_head' : 'text-center aboutHead px-3 py-4 text-light'}`}>
        <h1 className={`fs-3 text-center text-uppercase book_headline ${isAbout ? 'text-decoration-underline fw-semibold' : 'fw-bold'}`}>{paths}</h1>
        {
          isAbout ? 
          <p className='mb-0 mx-lg-5 mx-xl-5 mx-md-3 mx-sm-1 text-center fs-5 pt-4 about_text'>
            <span className='text-uppercase fw-semibold'>pega#</span> is a Curated and well revised ed-blog for Pega learners.This website includes the basics, 
            advanced and enchanced concepts on pega. This will be a one stop solution for students, beginners and experts (to revise the concepts) to learn and deep dive into Pega architecture.
            This ed-blog is brought to you by individuals who are professionals and are working in top MNC companies as pega developers and also has been part of <span className='text-uppercase fw-semibold'>winners</span> in <span className='text-capitalize fw-semibold'>pega community hackathon 2022</span>.
          </p>
          : <></>
        }
    </Container>
  )
}

export default HomeCardHeader
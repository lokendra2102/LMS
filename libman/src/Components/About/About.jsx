import React from 'react'
import HomeCardHeader from '../Modals/HomeCardHeader'
import CarouselUtil from './Carousel'
import { Col, Container, Form, Row, Button,Nav } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { GrNext } from 'react-icons/gr'
import { BsTwitter,BsFacebook,BsLinkedin,BsGithub } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function About({paths}) {
  return (
    <>
        <Container fluid className='mt-5'>
            <HomeCardHeader paths={paths} isAbout={true} />
            <Container fluid className="py-4 px-3">
                <p className='mb-0 fs-5'>
                    <strong className='text-uppercase'>pega#</strong> is a one-stop destination for pega learners.This website includes all the pega basics , 
                    advanced and enchanced concepts the people will get all the relevant information regarding pega.
                    It is very helpful for the beginners to learn and  work on pega.
                    In this website creation the people involved who are  working in a top mnc companies as a pega developers 
                    and also has been part of <strong className='text-uppercase'>winners</strong> in <strong className='text-capitalize'>pega community hackathon 2022</strong>.
                </p>
                <Container fluid className='px-5 mt-5 mb-3 py-4 carouselAbout'>
                    <p className='mb-3 text-capitalize text-center fs-3 fw-bold text-decoration-underline'>our team</p>
                    <CarouselUtil />
                </Container>
            </Container>
            <Container fluid className='py-4 px-3 mb-4'>
                <Container fluid className='px-5 py-4 carouselAbout'>
                    <p className='mb-0 fs-3 fw-bold text-center text-decoration-underline'>Contact Us</p>
                    <Row className='px-5 mt-3'>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='product_updates py-5 px-4 rounded-2'>
                        <p className='fs-4 fw-normal product_header'>Sign Up to Receive Product Updates and More</p>
                        <Form>
                            <Form.Group className="d-flex justify-content-center align-items-center" controlId="formBasicEmail">
                            <Form.Control type="email" className='input_email shadow-none rounded-0 w-10' placeholder="youremail@email.com" />
                            <Button className="input_submit shadow-none rounded-0 w-0">
                                <IconContext.Provider value = {{className:"submit_icon"}}>
                                <GrNext  />
                                </IconContext.Provider>
                            </Button>
                            </Form.Group>
                        </Form>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="company ps-5 py-4 px-4 d-flex justify-content-center align-items-center gap-3">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="office">
                            <p className='fs-5 office_header'>Office</p>
                            <p className='fs-6 office_desc'>3891 RanchView Street,Chennai,Tamil Nadu - 6000001</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className="contact">
                            <p className='fs-5 contact_header'>Contact</p>
                            <p className='fs-6 contact_desc'>+91 95xx-xxx-x01<br/>slokendra2102@gmail.com<br/>slokendra2102@outlook.com</p>
                        </Col>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    </>
  )
}

export default About
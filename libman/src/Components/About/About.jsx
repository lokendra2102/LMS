import React from 'react'
import HomeCardHeader from '../Modals/HomeCardHeader'
import CarouselUtil from './Carousel'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { GrNext } from 'react-icons/gr'

function About({paths}) {
  return (
    <>
        <Container fluid className='mt-5 aboutCheck'>
            <HomeCardHeader paths={paths} isAbout={true} />
            <Container fluid className="carouselContainer">
                <Container fluid className='px-5 py-4 carouselAbout'>
                    <p className='mb-3 text-capitalize text-center fs-3 fw-bold text-decoration-underline'>our team</p>
                    <CarouselUtil />
                </Container>
            </Container>
            <Container fluid className='carouselContact px-3'>
                <Container fluid className='px-5 py-4 text-light'>
                    <p className='mb-0 fs-3 fw-bold text-center text-decoration-underline'>Contact Us</p>
                    <Row className='px-5 mt-3'>
                        <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='product_updates py-5 px-4 rounded-2'>
                        <p className='fs-4 fw-normal product_header'>Mail Us to Contact and Receive Product Updates</p>
                        <Form>
                            <Form.Group className="d-flex justify-content-start align-items-center" controlId="formBasicEmail">
                                <a className="text-center bg-light text-dark shadow-none rounded-2 w-0 text-decoration-none px-3 py-2"
                                style={{fontWeight : 500}} href='mailto:slokendra2102@gmail.com' target='_blank'
                                // onClick="mailto:slokendra2102@gmail.com;event.preventDefault()"
                                >
                                Click to write us a mail.
                                </a>
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
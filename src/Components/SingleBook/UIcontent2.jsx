import React from 'react'
import {
    Card,
    Container,
    Row,
    Button,
    Col,
    Accordion,
    ListGroup,
    Image
} from 'react-bootstrap'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { IconContext } from 'react-icons'
import { BsStarFill, BsCartPlus, BsStarHalf, BsStar } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'

import im from '../../Images/971.jpg'
import t8p1 from '../../Images/ui_t2_p1.png'
import t8p2 from '../../Images/ui_t2_p2.png'
import t8p3 from '../../Images/ui_t2_p5.png'




function UIcontent2() {
    return (
        <Container className='single_book_container my-4 p-0'>
            <Row className='gap-3 d-flex justify-content-center align-items-center'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mx-4 my-lg-4 shadow mx-3 ">
                    <Card className='w-100 border-0 p-xs-1 p-lg-3'>
                        <Card.Body className='d-flex flex-column flex-md-row card_body1 p-0 py-4'>
                            <Container fluid className='d-flex justify-content-center align-items-center single_book_img_container d-none '>
                                <Card.Img variant="top" className='single_book_img' src={im} />
                            </Container>
                            <Container fluid className='mt-4 d-flex flex-column justify-content-start align-items-start'>
                                <Container fluid className='p-0 d-flex justify-content-between'>
                                    <Container fluid className='p-0 col-9'>
                                        <Card.Title className='fs-5'>Login Screen Change</Card.Title>
                                        <Card.Title className='fs-6'>UI</Card.Title>
                                    </Container>
                                    <Container fluid className='p-0 text-end pt-2 pe-5 col-3'>
                                        <Card.Title className='fs-5 fw-bold'><sub>$</sub>57<sup>.00</sup></Card.Title>
                                    </Container>
                                </Container>
                                <Card.Text className='single_book_text'>
                                    Here we are going to change the Login Screen Background Image.
                                </Card.Text>
                                <Container fluid className='rating_book text-start p-0 my-1'>
                                    {[1, 2, 3].map(e => {
                                        return (
                                            <IconContext.Provider key={e} value={{ className: "star rating_star_fill me-1" }}>
                                                <BsStarFill />
                                            </IconContext.Provider>
                                        )
                                    })
                                    }
                                    <IconContext.Provider value={{ className: "star rating_star_half_fill me-1" }}>
                                        <BsStarHalf />
                                    </IconContext.Provider>
                                    <IconContext.Provider value={{ className: "star rating_star_no_fill me-1" }}>
                                        <BsStar />
                                    </IconContext.Provider>
                                </Container>
                                <Card.Text className=''>
                                    Updated on : 03-09-2023
                                </Card.Text>
                                <Container fluid className='d-flex gap-3 justify-content-start p-0'>
                                    <Button variant="danger" className='cart_btn shadow-none'>
                                        <IconContext.Provider value={{ className: "cart_icon fs-4" }}>
                                            <BsCartPlus />
                                        </IconContext.Provider>
                                    </Button>
                                    <Button variant="dark" className='fs-6 buy_btn shadow-none d-flex justify-content-center align-items-center text-uppercase'>
                                        <IconContext.Provider value={{ className: "cart_icon1 fs-4 me-2" }}>
                                            <IoWalletOutline />
                                        </IconContext.Provider>
                                        <p className='mb-0 buy_text'>Buy now</p>
                                    </Button>
                                </Container>
                            </Container>
                        </Card.Body>
                        <hr />
                        <Card.Body>
                            <Card.Text className='fs-4'>Login Screen<b>Background Image</b></Card.Text>
                            <Accordion defaultActiveKey={['0']} alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><span className='fw-bold'>Step 1 :</span>&nbsp;<span>Create a ruleset </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">Create Unauthenticated ruleset.</ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t8p1} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><span className='fw-bold'>Step 2 :</span>&nbsp;<span>Add the rule into Application Def </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">Add this Unauthenticated ruleset in application definition</ListGroup.Item>
                                            <ListGroup.Item as="li">Next Step u have to do in the WEBLOGIN </ListGroup.Item>
                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t8p2} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><span className='fw-bold'>Step 3 :</span>&nbsp;<span>Code to change. </span></Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup as="div" numbered>
                                            <ListGroup.Item as="li">Open web-login HTML rule of @baseclass, and Copy it to Unauthenticated ruleset.And Add a button for SignUp in the web-login rule.</ListGroup.Item>

                                            <ListGroup.Item as="li">
                                                Details regarding the image.
                                                <Container fluid className='py-4'>
                                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                        <Image src={t8p3} thumbnail className='stepsImage' />
                                                    </Col>
                                                </Container>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                    <Card className='mb-3 w-100 border-0 d-flex flex-row justify-content-center align-items-center gap-3 p-3'>
                        <Card.Body className=''>
                            <Card.Text className='fs-5 fw-bold text-center text-uppercase about_author_header text-decoration-underline'>About the author</Card.Text>
                            <Card.Title className='fs-5'>Author</Card.Title>
                            <Card.Title className='fs-6 about_content about_author_content'>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default UIcontent2